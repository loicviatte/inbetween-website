"use client";

import { useState } from "react";

type Stage = "ask" | "done" | "dead";

export function ConfirmEmailForm({ tokenHash }: { tokenHash: string }) {
  const [stage, setStage] = useState<Stage>(tokenHash ? "ask" : "dead");
  const [email, setEmail] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function confirm() {
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/confirm-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token_hash: tokenHash }),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        email?: string | null;
        error?: string;
      };
      if (json.ok) {
        setEmail(json.email ?? null);
        setStage("done");
      } else if (json.error === "expired" || json.error === "invalid_link") {
        setStage("dead");
      } else {
        setError("Something went wrong on our side. Try again in a moment.");
      }
    } catch {
      setError("We couldn't reach InBetween. Check your connection and try again.");
    }
    setBusy(false);
  }

  return (
    <section className="rp" aria-live="polite">
      <p className="rp-eyebrow">
        <span className="rp-dash" aria-hidden="true" />
        Your account
      </p>

      {stage === "ask" && (
        <>
          <h1 className="rp-title">Confirm your new email</h1>
          <p className="rp-lead">
            You asked to change the email on your InBetween account to this
            address. Confirm it and you&rsquo;ll sign in with it from now on.
          </p>
          <button className="rp-submit" type="button" onClick={confirm} disabled={busy}>
            {busy ? "Confirming…" : "Confirm new email"}
          </button>
          <p className={`rp-hint rp-hint-after ${error ? "is-error" : ""}`}>
            {error || "Didn’t ask for this? Close this page and nothing changes."}
          </p>
        </>
      )}

      {stage === "done" && (
        <>
          <h1 className="rp-title">Email updated</h1>
          <p className="rp-lead">
            {email ? (
              <>
                Your InBetween account now uses <strong>{email}</strong>. Use it
                next time you sign in.
              </>
            ) : (
              "Your InBetween account uses your new email. Use it next time you sign in."
            )}
          </p>
          <a className="rp-submit rp-open" href="inbetween://">
            Open InBetween
          </a>
        </>
      )}

      {stage === "dead" && (
        <>
          <h1 className="rp-title">This link has expired</h1>
          <p className="rp-lead">
            Confirmation links work once, for one hour. To try again, open
            InBetween and change your email in <strong>Settings › Account</strong>.
          </p>
          <a className="rp-submit rp-open" href="inbetween://">
            Open InBetween
          </a>
        </>
      )}
    </section>
  );
}
