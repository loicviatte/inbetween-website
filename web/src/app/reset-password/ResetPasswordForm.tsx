"use client";

import { useState } from "react";

type Stage = "form" | "done" | "dead";

const INLINE_ERRORS: Record<string, string> = {
  too_short: "Use at least 6 characters.",
  too_long: "Keep it under 72 characters.",
  weak_password: "Choose a stronger password.",
  server: "Something went wrong on our side. Try again in a moment.",
  network: "We couldn't reach InBetween. Check your connection and try again.",
};

export function ResetPasswordForm({ tokenHash }: { tokenHash: string }) {
  const [stage, setStage] = useState<Stage>(tokenHash ? "form" : "dead");
  const [deadReason, setDeadReason] = useState<"missing" | "expired">(
    tokenHash ? "expired" : "missing",
  );
  const [password, setPassword] = useState("");
  const [shown, setShown] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [alreadySet, setAlreadySet] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    if (password.length < 6) {
      setError(INLINE_ERRORS.too_short);
      return;
    }
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token_hash: tokenHash, password }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (json.ok) {
        setStage("done");
      } else if (json.error === "expired" || json.error === "invalid_link") {
        setDeadReason("expired");
        setStage("dead");
      } else if (json.error === "same_password") {
        setAlreadySet(true);
        setStage("done");
      } else {
        setError(INLINE_ERRORS[json.error ?? ""] ?? INLINE_ERRORS.server);
      }
    } catch {
      setError(INLINE_ERRORS.network);
    }
    setBusy(false);
  }

  return (
    <section className="rp" aria-live="polite">
      <p className="rp-eyebrow">
        <span className="rp-dash" aria-hidden="true" />
        Your account
      </p>

      {stage === "form" && (
        <>
          <h1 className="rp-title">Choose a new password</h1>
          <p className="rp-lead">
            Pick something you&rsquo;ll remember. You&rsquo;ll use it to sign in to
            the InBetween app.
          </p>

          <form className="rp-form" onSubmit={submit} noValidate>
            <label className="rp-label" htmlFor="rp-password">
              New password
            </label>
            <div className={`rp-field ${error ? "has-error" : ""}`}>
              <input
                id="rp-password"
                className="rp-input"
                type={shown ? "text" : "password"}
                autoComplete="new-password"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                autoFocus
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError("");
                }}
                aria-invalid={!!error}
                aria-describedby="rp-hint"
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
            <p id="rp-hint" className={`rp-hint ${error ? "is-error" : ""}`}>
              {error || "At least 6 characters."}
            </p>

            <button className="rp-submit" type="submit" disabled={busy}>
              {busy ? "Saving…" : "Save new password"}
            </button>
          </form>
        </>
      )}

      {stage === "done" && (
        <>
          <h1 className="rp-title">
            {alreadySet ? "That’s already your password" : "Password updated"}
          </h1>
          <p className="rp-lead">
            {alreadySet
              ? "Nothing to change. Go back to the InBetween app and sign in with it."
              : "Go back to the InBetween app and sign in with your new password."}
          </p>
          <a className="rp-submit rp-open" href="inbetween://">
            Open InBetween
          </a>
        </>
      )}

      {stage === "dead" && (
        <>
          <h1 className="rp-title">
            {deadReason === "missing" ? "This link is incomplete" : "This link has expired"}
          </h1>
          <p className="rp-lead">
            {deadReason === "missing"
              ? "Open the link straight from your email, without editing it."
              : "Reset links work once, for one hour."}{" "}
            To get a new one, open InBetween, enter your email on the sign-in
            screen and tap <strong>Forgot password</strong>.
          </p>
          <a className="rp-submit rp-open" href="inbetween://">
            Open InBetween
          </a>
        </>
      )}

      <style>{`
        .rp {
          width: 100%;
          max-width: 420px;
        }
        .rp-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold-400);
          margin: 0 0 24px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .rp-dash {
          width: 18px;
          height: 1px;
          background: currentColor;
        }
        .rp-title {
          font-size: clamp(32px, 6vw, 44px);
          font-weight: 700;
          line-height: 1.06;
          letter-spacing: -0.02em;
          color: var(--ink-50);
          margin: 0 0 14px;
          text-wrap: balance;
        }
        .rp-lead {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(247, 246, 243, 0.72);
          margin: 0 0 36px;
          text-wrap: pretty;
        }
        .rp-lead strong {
          color: var(--ink-50);
          font-weight: 600;
        }
        .rp-form {
          display: flex;
          flex-direction: column;
        }
        .rp-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--ink-50);
          margin: 0 0 10px;
        }
        .rp-field {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 14px;
          transition: border-color 150ms var(--ease-out), background 150ms var(--ease-out);
        }
        .rp-field:focus-within {
          border-color: var(--gold-400);
          background: rgba(255, 255, 255, 0.07);
        }
        .rp-field.has-error {
          border-color: var(--danger);
        }
        .rp-input {
          flex: 1;
          min-width: 0;
          background: transparent;
          border: 0;
          outline: none;
          padding: 16px 16px;
          font: inherit;
          font-size: 17px;
          color: var(--ink-50);
          letter-spacing: 0.02em;
        }
        .rp-toggle {
          flex: none;
          background: transparent;
          border: 0;
          padding: 0 16px;
          align-self: stretch;
          font: inherit;
          font-size: 13px;
          font-weight: 600;
          color: rgba(247, 246, 243, 0.6);
          cursor: pointer;
          border-radius: 0 14px 14px 0;
        }
        .rp-toggle:hover {
          color: var(--gold-300);
        }
        .rp-toggle:focus-visible {
          outline: 2px solid var(--gold-400);
          outline-offset: -4px;
        }
        .rp-hint {
          font-size: 13px;
          line-height: 1.4;
          color: rgba(247, 246, 243, 0.5);
          margin: 10px 0 28px;
          min-height: 18px;
        }
        .rp-hint.is-error {
          color: #E8907F;
        }
        .rp-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 54px;
          border: 0;
          border-radius: 999px;
          background: var(--gold-400);
          color: var(--ink-1000);
          font: inherit;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: background 150ms var(--ease-out), transform 150ms var(--ease-out);
        }
        .rp-submit:hover {
          background: var(--gold-300);
        }
        .rp-submit:active {
          transform: scale(0.98);
        }
        .rp-submit:disabled {
          opacity: 0.6;
          cursor: default;
        }
        .rp-submit:focus-visible {
          outline: 2px solid var(--gold-300);
          outline-offset: 3px;
        }
        /* The app link only makes sense where the app lives. */
        @media (hover: hover) and (pointer: fine) {
          .rp-open {
            display: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .rp-field,
          .rp-submit {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
