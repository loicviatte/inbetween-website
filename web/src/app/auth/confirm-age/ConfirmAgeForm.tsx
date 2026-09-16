"use client";

import { useState } from "react";

// A coach marked this student's account as under 18, which locked it. The link
// in the email lands here; confirming (a button press, never the page load)
// unlocks the account. The age-check edge function does the work.

const FN = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/age-check`;

type Stage = "ask" | "done" | "dead";

export function ConfirmAgeForm({ token }: { token: string }) {
  const [stage, setStage] = useState<Stage>(token ? "ask" : "dead");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function confirm() {
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      const res = await fetch(FN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "confirm-adult", token }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; firstName?: string; error?: string };
      if (json.ok) {
        setName(json.firstName || "");
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
          <h1 className="rp-title">Confirm you&rsquo;re 18 or over</h1>
          <p className="rp-lead">
            Your coach marked your InBetween account as under 18, so it&rsquo;s locked. Confirm
            only if you&rsquo;re 18 or over &mdash; if you&rsquo;re under 18, a parent needs to
            approve your account from the app instead.
          </p>
          <button className="rp-submit" type="button" onClick={confirm} disabled={busy}>
            {busy ? "Confirming…" : "I’m 18 or over"}
          </button>
          <p className={`rp-hint rp-hint-after ${error ? "is-error" : ""}`}>
            {error || "Not 18 yet? Close this page and open the app."}
          </p>
        </>
      )}

      {stage === "done" && (
        <>
          <h1 className="rp-title">{name ? `Thanks, ${name}` : "Thanks"}</h1>
          <p className="rp-lead">
            Your account is unlocked, and your coach can capture your lessons again. Go back to
            the InBetween app &mdash; it updates by itself.
          </p>
          <a className="rp-submit rp-open" href="com.loicviatte.inbetweenapp://">
            Open InBetween
          </a>
        </>
      )}

      {stage === "dead" && (
        <>
          <h1 className="rp-title">This link has expired</h1>
          <p className="rp-lead">
            Links work once, for 24 hours. Open InBetween and tap{" "}
            <strong>I&rsquo;m 18 or over</strong> to get a new one.
          </p>
          <a className="rp-submit rp-open" href="com.loicviatte.inbetweenapp://">
            Open InBetween
          </a>
        </>
      )}
    </section>
  );
}
