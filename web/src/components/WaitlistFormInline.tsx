"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Status = "idle" | "loading" | "success" | "error";
type Role = "coach" | "dancer";

/**
 * Compact waitlist form for the marketing bands (e.g. the final CTA).
 * Wired to the same /api/waitlist flow as the hero — email + role, Meta Pixel
 * Lead tracking, then redirect to the referral rank page. The hero form is left
 * untouched; this is a self-contained twin so both entry points behave alike.
 */
export function WaitlistFormInline({ idPrefix = "cta" }: { idPrefix?: string }) {
  const [role, setRole] = useState<Role>("dancer");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const refCode = (() => {
    const raw = searchParams?.get("ref") ?? "";
    return /^[A-Z0-9]{8}$/.test(raw) ? raw : null;
  })();

  const busy = status === "loading" || status === "success";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role, ref: refCode }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        code?: string;
      };
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }
      setStatus("success");
      setMessage("You're on the list. Taking you to your rank…");
      setEmail("");
      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Lead", {
          content_name: "waitlist_signup",
          content_category: role,
        });
      }
      if (data.code) router.push(`/waitlist/${data.code}`);
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <form className="wl-inline" onSubmit={handleSubmit} noValidate>
      <div className="wl-row">
        <input
          type="email"
          className="wl-email"
          placeholder="Email address"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={busy}
          autoComplete="email"
        />
        <div className="wl-seg" role="radiogroup" aria-label="I'm a…">
          <button
            type="button"
            role="radio"
            aria-checked={role === "dancer"}
            className={role === "dancer" ? "wl-on" : ""}
            onClick={() => setRole("dancer")}
            disabled={busy}
          >
            I&rsquo;m a dancer
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={role === "coach"}
            className={role === "coach" ? "wl-on" : ""}
            onClick={() => setRole("coach")}
            disabled={busy}
          >
            I&rsquo;m a coach
          </button>
        </div>
        <button type="submit" className="btn btn-gold" disabled={busy}>
          {status === "loading"
            ? "Joining…"
            : status === "success"
              ? "On the list"
              : "Join the waitlist"}
        </button>
      </div>
      <p
        className={`wl-msg ${status === "error" ? "wl-msg-error" : ""} ${status === "success" ? "wl-msg-success" : ""}`}
        aria-live="polite"
      >
        {message || " "}
      </p>

      <style>{`
        .wl-inline { width: 100%; }
        .wl-row {
          display: flex; align-items: center; justify-content: center;
          gap: 10px; flex-wrap: wrap;
        }
        .wl-email {
          height: 56px; width: 290px; max-width: 100%; padding: 0 24px;
          background: rgba(247, 246, 243, 0.06);
          border: 1px solid var(--border);
          border-radius: var(--radius-pill);
          font-family: inherit; font-size: 15px; color: var(--ink-50);
          transition: border-color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out);
        }
        .wl-email::placeholder { color: rgba(247, 246, 243, 0.4); }
        .wl-email:focus {
          outline: none; background: rgba(247, 246, 243, 0.10);
          border-color: var(--gold-400);
          box-shadow: 0 0 0 3px rgba(232, 181, 48, 0.18);
        }
        .wl-email:disabled { opacity: 0.6; cursor: not-allowed; }

        .wl-seg {
          display: inline-flex; align-items: center; height: 56px; padding: 5px;
          background: rgba(247, 246, 243, 0.06);
          border: 1px solid var(--border);
          border-radius: var(--radius-pill);
        }
        .wl-seg button {
          display: inline-flex; align-items: center; justify-content: center;
          height: 100%; padding: 0 22px; cursor: pointer; white-space: nowrap;
          font-family: inherit; font-size: 14px; font-weight: var(--fw-medium);
          color: var(--ink-300); background: transparent; border: 0;
          border-radius: var(--radius-pill);
          transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out);
        }
        .wl-seg button.wl-on { background: var(--ink-50); color: var(--ink-1000); }
        .wl-seg button:disabled { cursor: not-allowed; opacity: 0.7; }
        .wl-inline .btn-gold { height: 56px; }

        .wl-msg {
          min-height: 20px; margin: 14px 0 0; font-size: 13px;
          color: rgba(247, 246, 243, 0.5); text-align: center;
        }
        .wl-msg-error { color: var(--danger); }
        .wl-msg-success { color: var(--gold-400); }

        @media (max-width: 760px) {
          .wl-row { flex-direction: column; }
          .wl-email, .wl-seg, .wl-inline .btn-gold { width: 100%; }
          .wl-seg button { flex: 1; }
        }
      `}</style>
    </form>
  );
}
