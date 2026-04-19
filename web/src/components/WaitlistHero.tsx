"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { IntroPhase } from "./IntroStage";

type Status = "idle" | "loading" | "success" | "error";
type Role = "coach" | "dancer";

type Variant = {
  line1: { prefix: string; accent: string };
  line2Prefix: string;
  rotatingWords: string[];
  line3: { prefix: string; accent: string };
  subtitle: string;
};

const COPY: Record<Role, Variant> = {
  dancer: {
    line1: { prefix: "Your coach", accent: "teaches." },
    line2Prefix: "We capture every",
    rotatingWords: [
      "correction.",
      "input.",
      "tip.",
      "metaphor.",
      "comment.",
      "drill.",
      "cue.",
    ],
    line3: { prefix: "You never", accent: "forget." },
    subtitle:
      "Capture every hip correction, timing note, and technique cue from your Latin and Ballroom sessions. So you always know exactly what to train next.",
  },
  coach: {
    line1: { prefix: "You", accent: "teach." },
    line2Prefix: "We show you what\u00A0they",
    rotatingWords: ["practice.", "ask.", "struggle on.", "improve."],
    line3: {
      prefix: "You already know before they say",
      accent: "hi.",
    },
    subtitle:
      "See which student drilled their hip rotation, who's still fighting the back-leg line, and who asked about timing. Every session starts exactly where it needs to.",
  },
};

const TEXT_FADE_MS = 320;

export function WaitlistHero({ phase }: { phase: IntroPhase }) {
  const [role, setRole] = useState<Role>("dancer");
  const [activeRole, setActiveRole] = useState<Role>("dancer");
  const [textFading, setTextFading] = useState(false);
  const [word, setWord] = useState(COPY.dancer.rotatingWords[0]);
  const [wordFading, setWordFading] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const indexRef = useRef(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const refCode = (() => {
    const raw = searchParams?.get("ref") ?? "";
    return /^[A-Z0-9]{8}$/.test(raw) ? raw : null;
  })();

  const variant = COPY[activeRole];

  // Role switch: fade out current text, swap content, fade back in.
  useEffect(() => {
    if (activeRole === role) return;
    setTextFading(true);
    const t = setTimeout(() => {
      setActiveRole(role);
      setTextFading(false);
    }, TEXT_FADE_MS);
    return () => clearTimeout(t);
  }, [role, activeRole]);

  // Reset rotating-word cycle when the displayed variant changes.
  useEffect(() => {
    indexRef.current = 0;
    setWord(COPY[activeRole].rotatingWords[0]);
    setWordFading(false);
  }, [activeRole]);

  useEffect(() => {
    if (phase < 5) return;
    const words = COPY[activeRole].rotatingWords;
    const interval = setInterval(() => {
      setWordFading(true);
      setTimeout(() => {
        indexRef.current = (indexRef.current + 1) % words.length;
        setWord(words[indexRef.current]);
        setWordFading(false);
      }, 280);
    }, 2000);
    return () => clearInterval(interval);
  }, [phase, activeRole]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
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
      if (data.code) {
        router.push(`/waitlist/${data.code}`);
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <section
      className="hero"
      data-phase={phase}
      data-role={activeRole}
      data-text-fading={textFading ? "true" : "false"}
    >
      <h1 className="hero-title">
        <span className="line line-1">
          <span className="line-content">
            <span className="part">{variant.line1.prefix}</span>{" "}
            <span className="part italic">{variant.line1.accent}</span>
          </span>
        </span>
        <span className="line line-2">
          <span className="line-content">
            <span className="part">{variant.line2Prefix}</span>{" "}
            <span
              className={`part rotating-word ${wordFading ? "rotating-word--out" : ""}`}
            >
              {phase >= 5 ? word : variant.rotatingWords[0]}
            </span>
          </span>
        </span>
        <span className="line line-3">
          <span className="line-content">
            <span className="part">{variant.line3.prefix}</span>{" "}
            <span className="part forget">{variant.line3.accent}</span>
          </span>
        </span>
      </h1>

      <div className="reveal-stack">
        <p className="hero-subtitle">
          <span className="sub-content">{variant.subtitle}</span>
        </p>

        <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            className="email-input"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading" || status === "success"}
            autoComplete="email"
          />
          <div
            className="role-picker"
            role="radiogroup"
            aria-label="I'm a…"
          >
            <button
              type="button"
              role="radio"
              aria-checked={role === "dancer"}
              className={`role-pill ${role === "dancer" ? "role-pill--active" : ""}`}
              onClick={() => setRole("dancer")}
              disabled={status === "loading" || status === "success"}
            >
              I&rsquo;m a dancer
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={role === "coach"}
              className={`role-pill ${role === "coach" ? "role-pill--active" : ""}`}
              onClick={() => setRole("coach")}
              disabled={status === "loading" || status === "success"}
            >
              I&rsquo;m a coach
            </button>
          </div>
          <button
            type="submit"
            className="submit-btn"
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading"
              ? "Joining…"
              : status === "success"
                ? "On the list"
                : "Join the waitlist"}
          </button>
        </form>

        <p
          className={`form-message ${status === "error" ? "form-message--error" : ""} ${
            status === "success" ? "form-message--success" : ""
          }`}
          aria-live="polite"
        >
          {message || "\u00A0"}
        </p>

        <div className="social-proof">
          <div className="avatars">
            {[1, 5, 9].map((i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={`https://i.pravatar.cc/64?img=${i}`}
                alt="Waitlist member"
              />
            ))}
          </div>
          <span>Join coaches and students already on the waitlist</span>
          <span className="social-proof-tagline">and be the first to try it</span>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 48px 20px;
          text-align: center;
        }

        .hero-title {
          position: relative;
          font-weight: 600;
          line-height: 1.08;
          letter-spacing: -0.025em;
          margin: 0 0 28px;
          color: #fff;
          width: 100%;
          max-width: 1720px;
          min-height: clamp(200px, 22vw, 280px);
        }

        .line {
          position: absolute;
          left: 0;
          right: 0;
          text-align: center;
          white-space: nowrap;
          opacity: 0;
          filter: blur(10px);
          font-size: clamp(36px, 4.6vw, 58px);
          transition:
            opacity 700ms var(--ease-out),
            filter 700ms var(--ease-out),
            top 900ms var(--ease-out),
            left 900ms var(--ease-out),
            right 900ms var(--ease-out),
            font-size 900ms var(--ease-out);
          will-change: opacity, top, left, right, font-size;
        }
        .line-1 { top: 0; }
        .line-2 { top: clamp(40px, 5vw, 66px); }
        .line-3 { top: clamp(80px, 10vw, 132px); }

        /* ---------- INTRO (phases 1-3): ONE LINE AT A TIME ---------- */
        /* "left: calc(50% - 50vw + Npx)" pins the line to the viewport's
           left edge + Npx, regardless of H1's constrained width. Same trick
           on the right side for line 3. */
        .hero[data-phase="1"] .line-1 {
          top: 0;
          left: calc(50% - 50vw + 72px);
          right: auto;
          text-align: left;
          opacity: 1;
          filter: blur(0);
        }
        .hero[data-phase="2"] .line-2 {
          top: 0;
          left: 0;
          right: 0;
          text-align: center;
          opacity: 1;
          filter: blur(0);
        }
        .hero[data-phase="3"] .line-3 {
          top: 0;
          left: auto;
          right: calc(50% - 50vw + 72px);
          text-align: right;
          opacity: 1;
          filter: blur(0);
        }

        /* ---------- PHASE 4 / 5 : stacked centered, full size ---------- */
        /* Smooth settle curve used for the "everything falls into place" moment */
        .hero[data-phase="4"] .line,
        .hero[data-phase="5"] .line {
          white-space: normal;
          transition:
            top 1600ms cubic-bezier(0.22, 1, 0.36, 1),
            left 1600ms cubic-bezier(0.22, 1, 0.36, 1),
            right 1600ms cubic-bezier(0.22, 1, 0.36, 1),
            font-size 1600ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 700ms var(--ease-out),
            filter 700ms var(--ease-out);
        }
        /* Line 3 leads the settle — its position+size anim runs immediately,
           opacity stays at 1. Lines 1 & 2 fade in with a delay so they never
           visually cross Line 3 during its descent. */
        .hero[data-phase="4"] .line-1,
        .hero[data-phase="5"] .line-1,
        .hero[data-phase="4"] .line-2,
        .hero[data-phase="5"] .line-2 {
          transition:
            top 1100ms cubic-bezier(0.22, 1, 0.36, 1) 1000ms,
            left 1100ms cubic-bezier(0.22, 1, 0.36, 1) 1000ms,
            right 1100ms cubic-bezier(0.22, 1, 0.36, 1) 1000ms,
            font-size 1100ms cubic-bezier(0.22, 1, 0.36, 1) 1000ms,
            opacity 800ms var(--ease-out) 1000ms,
            filter 800ms var(--ease-out) 1000ms;
        }

        .hero[data-phase="4"] .line-1,
        .hero[data-phase="5"] .line-1 {
          top: 0;
          left: 0;
          right: 0;
          text-align: center;
          font-size: clamp(28px, 3.6vw, 58px);
          opacity: 1;
          filter: blur(0);
        }
        .hero[data-phase="4"] .line-2,
        .hero[data-phase="5"] .line-2 {
          top: clamp(46px, 7vw, 90px);
          left: 0;
          right: 0;
          text-align: center;
          font-size: clamp(28px, 3.6vw, 58px);
          opacity: 1;
          filter: blur(0);
        }
        .hero[data-phase="4"] .line-3,
        .hero[data-phase="5"] .line-3 {
          top: clamp(92px, 14vw, 180px);
          left: 0;
          right: 0;
          text-align: center;
          font-size: clamp(28px, 3.6vw, 58px);
          opacity: 1;
          filter: blur(0);
        }

        .hero-title .italic {
          font-style: italic;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.85);
        }
        .hero-title .forget {
          font-weight: 300;
          letter-spacing: 0.02em;
          color: var(--gold-400);
        }

        .rotating-word {
          display: inline-block;
          font-weight: 800;
          letter-spacing: -0.035em;
          width: 9em;
          text-align: left;
          vertical-align: baseline;
          overflow: visible;
          transition:
            opacity 280ms var(--ease-out),
            transform 280ms var(--ease-out);
          background: linear-gradient(135deg, var(--gold-300) 0%, var(--gold-500) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .rotating-word--out {
          opacity: 0;
          transform: translateY(-8px);
        }

        /* ---- Reveal stack (subtitle, form, social) ---- */
        .reveal-stack {
          width: 100%;
          max-width: 672px;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 900ms var(--ease-out) 120ms,
            transform 900ms var(--ease-out) 120ms;
          pointer-events: none;
        }
        .hero[data-phase="4"] .reveal-stack,
        .hero[data-phase="5"] .reveal-stack {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .hero-subtitle {
          font-size: 17px;
          font-weight: 500;
          color: rgba(247, 246, 243, 0.75);
          line-height: 1.6;
          margin: 0 0 40px;
          max-width: 560px;
          /* reserved for the longer coach variant so the form below doesn't shift */
          min-height: calc(17px * 1.6 * 3);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .role-picker {
          display: inline-flex;
          gap: 4px;
          padding: 4px;
          height: 56px;
          box-sizing: border-box;
          background: rgba(247, 246, 243, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          flex-shrink: 0;
          align-items: stretch;
        }
        .role-pill {
          appearance: none;
          background: transparent;
          border: 0;
          color: rgba(247, 246, 243, 0.7);
          font-family: inherit;
          font-size: 13px;
          font-weight: 500;
          padding: 0 18px;
          border-radius: 999px;
          cursor: pointer;
          transition: all 150ms var(--ease-out);
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .role-pill:hover:not(:disabled):not(.role-pill--active) {
          color: var(--ink-50);
          background: rgba(247, 246, 243, 0.06);
        }
        .role-pill--active {
          background: var(--ink-50);
          color: var(--ink-950);
          box-shadow: 0 2px 10px -2px rgba(247, 246, 243, 0.18);
        }
        .role-pill--active:hover:not(:disabled) {
          background: #ffffff;
        }
        .role-pill:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }

        .waitlist-form {
          display: flex;
          gap: 10px;
          align-items: center;
          max-width: 820px;
          width: 100%;
          margin-bottom: 14px;
          justify-content: center;
        }

        /* Content-swap fade for role variant switching — nothing else moves */
        .line-content {
          display: inline-block;
        }
        .sub-content {
          display: inline;
        }
        .line-content,
        .sub-content {
          opacity: 1;
          filter: blur(0);
          transition:
            opacity 320ms var(--ease-out),
            filter 320ms var(--ease-out);
        }
        .hero[data-text-fading="true"] .line-content,
        .hero[data-text-fading="true"] .sub-content {
          opacity: 0;
          filter: blur(6px);
        }

        .email-input {
          flex: 1 1 340px;
          min-width: 280px;
          height: 56px;
          padding: 0 24px;
          background: rgba(247, 246, 243, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          font-family: inherit;
          font-size: 15px;
          color: var(--ink-50);
          transition: all 150ms var(--ease-out);
        }
        .email-input::placeholder {
          color: rgba(247, 246, 243, 0.4);
        }
        .email-input:focus {
          outline: none;
          background: rgba(247, 246, 243, 0.12);
          border-color: var(--gold-500);
          box-shadow: 0 0 0 3px rgba(232, 181, 48, 0.18);
        }
        .email-input:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .submit-btn {
          height: 56px;
          padding: 0 32px;
          background: var(--gold-500);
          color: var(--ink-950);
          border: 0;
          border-radius: 999px;
          font-family: inherit;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.01em;
          cursor: pointer;
          transition: all 150ms var(--ease-out);
          box-shadow:
            0 0 0 1px rgba(232, 181, 48, 0.35),
            0 4px 16px -4px rgba(232, 181, 48, 0.4);
          white-space: nowrap;
        }
        .submit-btn:hover:not(:disabled) {
          background: var(--gold-400);
          transform: translateY(-1px);
          box-shadow:
            0 0 0 1px rgba(232, 181, 48, 0.45),
            0 6px 20px -4px rgba(232, 181, 48, 0.5);
        }
        .submit-btn:active:not(:disabled) {
          transform: scale(0.98);
          background: var(--gold-500);
        }
        .submit-btn:disabled {
          cursor: not-allowed;
          opacity: 0.75;
        }

        .form-message {
          min-height: 20px;
          font-size: 13px;
          margin: 0 0 20px;
          color: rgba(247, 246, 243, 0.5);
          transition: color 150ms var(--ease-out);
        }
        .form-message--error { color: #D06A5A; }
        .form-message--success { color: var(--gold-400); }

        .social-proof {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: rgba(247, 246, 243, 0.6);
          text-align: center;
        }
        .avatars { display: flex; }
        .avatars img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid #1a1a1a;
          margin-left: -8px;
          object-fit: cover;
        }
        .avatars img:first-child { margin-left: 0; }
        .social-proof-tagline {
          font-size: 12px;
          color: rgba(247, 246, 243, 0.4);
        }

        @media (max-width: 900px) {
          .waitlist-form { flex-direction: column; gap: 12px; }
          .email-input {
            flex: 0 0 auto;
            width: 100%;
            min-width: 0;
          }
          .submit-btn, .role-picker {
            flex: 0 0 auto;
            width: 100%;
          }
          .role-picker { justify-content: center; display: flex; }
          .role-pill { flex: 1; text-align: center; }
        }

        @media (max-width: 768px) {
          .hero { padding: 40px 20px 16px; }
          /* Static layout on mobile (no spatial intro), but keep phase-based
             opacity fade so the intro animation still plays. */
          .hero-title {
            position: static;
            min-height: 0;
            max-width: 100%;
            margin: 0 0 24px;
            text-align: center;
          }
          .hero .line {
            position: static !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            display: block;
            white-space: normal;
            font-size: clamp(26px, 7vw, 34px) !important;
            text-align: center !important;
            margin: 0;
            transition:
              opacity 700ms var(--ease-out),
              filter 700ms var(--ease-out);
          }
          /* Mobile intro: progressive reveal (line 1 → +2 → +3) rather than
             the one-at-a-time cross-fade used on desktop. */
          .hero[data-phase="1"] .line-1,
          .hero[data-phase="2"] .line-1,
          .hero[data-phase="3"] .line-1,
          .hero[data-phase="2"] .line-2,
          .hero[data-phase="3"] .line-2,
          .hero[data-phase="3"] .line-3 {
            opacity: 1 !important;
            filter: blur(0) !important;
          }
          /* 6 lines: prefix on its own row, accent / rotating word on the next */
          .hero .line .part { display: block; }
          .hero .line .rotating-word {
            width: auto;
            text-align: center;
          }
          .hero-subtitle {
            font-size: 15px;
            margin-bottom: 28px;
            min-height: 0;
            display: block;
            line-height: 1.55;
          }
          .email-input { height: 52px; font-size: 14px; }
          .submit-btn { height: 52px; padding: 0 20px; font-size: 14px; }
          .role-picker { height: 52px; }
          .role-pill { font-size: 13px; }
          .social-proof {
            font-size: 13px;
            gap: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .line, .reveal-stack {
            transition: none;
            opacity: 1;
            transform: none;
            filter: none;
            pointer-events: auto;
          }
        }
      `}</style>
    </section>
  );
}
