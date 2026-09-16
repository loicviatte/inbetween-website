"use client";

import { useState } from "react";

// A parent approves their child's InBetween account here, from the link in the
// invitation email. Every step runs in the minor-consent edge function; this
// page calls it straight from the browser so its rate limits see the parent's
// own IP. The wording the parent agrees to comes from the server, never from
// this file — what they read is exactly what the proof stores.

const FN = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/minor-consent`;

type Copy = {
  context: { title: string; subtitle: string | null };
  what: string[];
  checks: string[];
};
type Invitation = {
  ticket: string;
  childName: string;
  coachName: string | null;
  parentEmail: string;
  accountExists: boolean;
  coachAccount: boolean;
  copy: Copy;
};
type Stage = "codes" | "review" | "done";

class CallError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

async function call<T>(action: string, body: Record<string, unknown>): Promise<T> {
  let res: Response;
  try {
    res = await fetch(FN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, ...body }),
    });
  } catch {
    throw new CallError("We couldn't reach InBetween. Check your connection and try again.", 0);
  }
  const json = (await res.json().catch(() => ({}))) as { error?: string };
  if (!res.ok) {
    throw new CallError(json.error || "Something went wrong. Try again in a moment.", res.status);
  }
  return json as T;
}

// ABCD-EFGH-JKMN, grouped as it's typed. Same alphabet rules as the server.
function formatCode(raw: string) {
  const clean = raw.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12);
  return clean.match(/.{1,4}/g)?.join("-") ?? "";
}

export function ConsentFlow({ initialToken }: { initialToken: string }) {
  const prefilled = formatCode(initialToken);
  const [stage, setStage] = useState<Stage>("codes");
  const [token, setToken] = useState(prefilled);
  const [smsCode, setSmsCode] = useState("");
  const [inv, setInv] = useState<Invitation | null>(null);
  const [checks, setChecks] = useState([false, false, false]);
  const [password, setPassword] = useState("");
  const [shown, setShown] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function verify(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    if (token.replace(/-/g, "").length !== 12) return setError("Enter the 12-character code from the email.");
    if (smsCode.length !== 6) return setError("Enter the 6-digit code from the text message.");
    setBusy(true);
    setError("");
    try {
      const r = await call<Invitation>("verify", { token, code: smsCode });
      setInv(r);
      // Every box starts empty, every time the codes are entered.
      setChecks([false, false, false]);
      setPassword("");
      setStage("review");
      window.scrollTo({ top: 0 });
    } catch (err) {
      setError((err as Error).message);
    }
    setBusy(false);
  }

  async function approve(e: React.FormEvent) {
    e.preventDefault();
    if (busy || !inv) return;
    if (!checks.every(Boolean)) return setError("Tick all three boxes to give permission.");
    if (!inv.accountExists && password.length < 8) return setError("Choose a password of at least 8 characters.");
    setBusy(true);
    setError("");
    try {
      await call("approve", {
        ticket: inv.ticket,
        checks,
        password: inv.accountExists ? undefined : password,
      });
      setStage("done");
      window.scrollTo({ top: 0 });
    } catch (err) {
      const ce = err as CallError;
      if (ce.status === 410) {
        setStage("codes");
        setSmsCode("");
      }
      setError(ce.message);
    }
    setBusy(false);
  }

  const child = inv?.childName || "your child";

  return (
    <section className="rp cf" aria-live="polite">
      <p className="rp-eyebrow">
        <span className="rp-dash" aria-hidden="true" />
        Parent permission
      </p>

      {stage === "codes" && (
        <>
          <h1 className="rp-title">Approve your child&rsquo;s account</h1>
          <p className="rp-lead">
            {prefilled
              ? "The code from your email is already filled in. Add the 6-digit code we texted you — you need both."
              : "Enter the code from the invitation email and the 6-digit code we texted you. You need both."}
          </p>

          <form className="rp-form" onSubmit={verify} noValidate>
            <label className="rp-label" htmlFor="cf-token">
              Email code
            </label>
            <div className="rp-field">
              <input
                id="cf-token"
                className="rp-input cf-mono"
                value={token}
                onChange={(e) => {
                  setToken(formatCode(e.target.value));
                  if (error) setError("");
                }}
                placeholder="ABCD-EFGH-JKMN"
                autoCapitalize="characters"
                autoCorrect="off"
                autoComplete="off"
                spellCheck={false}
              />
            </div>

            <label className="rp-label cf-gap" htmlFor="cf-sms">
              Text message code
            </label>
            <div className="rp-field">
              <input
                id="cf-sms"
                className="rp-input cf-mono"
                value={smsCode}
                onChange={(e) => {
                  setSmsCode(e.target.value.replace(/\D/g, "").slice(0, 6));
                  if (error) setError("");
                }}
                placeholder="123456"
                inputMode="numeric"
                autoComplete="one-time-code"
                autoFocus={!!prefilled}
              />
            </div>

            <p className={`rp-hint ${error ? "is-error" : ""}`} role={error ? "alert" : undefined}>
              {error || "The text message went to the number your child gave us."}
            </p>

            <button className="rp-submit" type="submit" disabled={busy}>
              {busy ? "Checking…" : "Continue"}
            </button>
          </form>
        </>
      )}

      {stage === "review" && inv && (
        <form onSubmit={approve} noValidate>
          <h1 className="rp-title">{inv.copy.context.title}</h1>
          {inv.copy.context.subtitle && (
            <p className="rp-lead cf-sub">
              {inv.copy.context.subtitle.charAt(0).toUpperCase() + inv.copy.context.subtitle.slice(1)}
            </p>
          )}

          <h2 className="cf-h2">What happens</h2>
          <ul className="cf-list">
            {inv.copy.what.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <h2 className="cf-h2">Your permission</h2>
          <div className="cf-checks">
            {inv.copy.checks.map((line, i) => (
              <label key={line} className={`cf-check ${checks[i] ? "is-on" : ""}`}>
                <input
                  type="checkbox"
                  checked={checks[i]}
                  onChange={() => {
                    setChecks(checks.map((c, k) => (k === i ? !c : c)));
                    if (error) setError("");
                  }}
                />
                <span className="cf-box" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="12" height="12">
                    <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="cf-check-t">{line}</span>
              </label>
            ))}
          </div>

          <h2 className="cf-h2">Your account</h2>
          {inv.coachAccount ? (
            <p className="cf-note is-warn">
              {inv.parentEmail} is a coach account, so it can&rsquo;t also hold {child}&rsquo;s
              training. Ask {child} to send the invitation to another email.
            </p>
          ) : inv.accountExists ? (
            <p className="cf-note">
              You already have an InBetween account with <strong>{inv.parentEmail}</strong>.{" "}
              {child}&rsquo;s training will be added to it.
            </p>
          ) : (
            <>
              <p className="cf-note">
                This account holds {child}&rsquo;s training. You&rsquo;ll sign in with{" "}
                <strong>{inv.parentEmail}</strong>.
              </p>
              <label className="rp-label cf-gap" htmlFor="cf-password">
                Choose a password
              </label>
              <div className="rp-field">
                <input
                  id="cf-password"
                  className="rp-input"
                  type={shown ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError("");
                  }}
                  autoComplete="new-password"
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                />
                <button
                  type="button"
                  className="rp-toggle"
                  onClick={() => setShown((s) => !s)}
                  aria-pressed={shown}
                >
                  {shown ? "Hide" : "Show"}
                </button>
              </div>
            </>
          )}

          {!inv.coachAccount && (
            <>
              <p className={`rp-hint ${error ? "is-error" : ""}`} role={error ? "alert" : undefined}>
                {error || (inv.accountExists ? "" : "At least 8 characters.")}
              </p>
              <button className="rp-submit" type="submit" disabled={busy}>
                {busy ? "Saving…" : "Give permission"}
              </button>
              <p className="rp-hint rp-hint-after">
                You can withdraw it and delete {child}&rsquo;s data at any time from your account.
              </p>
            </>
          )}
        </form>
      )}

      {stage === "done" && inv && (
        <>
          <h1 className="rp-title">{child} is set up</h1>
          <p className="rp-lead">
            {inv.coachName || "Their coach"} can now capture {child}&rsquo;s lessons, and {child}
            &rsquo;s phone will show that you said yes.
          </p>
          <div className="cf-note">
            To follow {child}&rsquo;s training, sign in to the InBetween app with{" "}
            <strong>{inv.parentEmail}</strong>
            {inv.accountExists ? " and your usual password." : " and the password you just chose."}{" "}
            {child} signs in with the same account on their phone.
          </div>
        </>
      )}

      <style>{`
        .rp-input.cf-mono {
          font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .rp-label.cf-gap {
          display: block;
          margin-top: 22px;
        }
        .rp-lead.cf-sub {
          margin-bottom: 8px;
        }
        .cf-h2 {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold-300);
          margin: 40px 0 16px;
        }
        .cf-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .cf-list li {
          position: relative;
          padding-left: 22px;
          margin: 0 0 12px;
          font-size: 16px;
          line-height: 1.55;
          color: rgba(247, 246, 243, 0.78);
        }
        .cf-list li::before {
          content: "";
          position: absolute;
          left: 2px;
          top: 12px;
          width: 8px;
          height: 1px;
          background: var(--gold-400);
        }
        .cf-checks {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .cf-check {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.03);
          cursor: pointer;
          transition: border-color 150ms var(--ease-out), background 150ms var(--ease-out);
        }
        .cf-check:hover {
          border-color: rgba(255, 255, 255, 0.24);
        }
        .cf-check.is-on {
          border-color: rgba(240, 194, 74, 0.55);
          background: rgba(240, 194, 74, 0.06);
        }
        .cf-check input {
          position: absolute;
          opacity: 0;
          width: 1px;
          height: 1px;
        }
        .cf-box {
          flex: none;
          width: 22px;
          height: 22px;
          margin-top: 1px;
          border-radius: 7px;
          border: 1.5px solid rgba(255, 255, 255, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: transparent;
          transition: background 150ms var(--ease-out), border-color 150ms var(--ease-out), color 150ms var(--ease-out);
        }
        .cf-check.is-on .cf-box {
          background: var(--gold-400);
          border-color: var(--gold-400);
          color: var(--ink-1000);
        }
        .cf-check input:focus-visible + .cf-box {
          outline: 2px solid var(--gold-300);
          outline-offset: 3px;
        }
        .cf-check-t {
          font-size: 15px;
          line-height: 1.5;
          color: var(--ink-50);
        }
        .cf-note {
          font-size: 15px;
          line-height: 1.6;
          color: rgba(247, 246, 243, 0.78);
          margin: 0;
          padding: 16px 18px;
          border-left: 2px solid var(--gold-400);
          background: rgba(240, 194, 74, 0.06);
          border-radius: 0 12px 12px 0;
        }
        .cf-note strong {
          color: var(--ink-50);
          font-weight: 600;
          overflow-wrap: anywhere;
        }
        .cf-note.is-warn {
          border-left-color: var(--danger);
          background: rgba(208, 106, 90, 0.08);
        }
        .cf .rp-submit + .rp-hint-after {
          margin-top: 16px;
        }
        @media (prefers-reduced-motion: reduce) {
          .cf-check,
          .cf-box {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
