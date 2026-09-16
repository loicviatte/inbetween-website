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
    </section>
  );
}
