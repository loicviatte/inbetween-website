import Image from "next/image";
import Link from "next/link";

// Shared frame for the pages the app's account emails open (password reset,
// email change): logo, warm glow, one narrow panel. Analytics and the Meta
// pixel stay off these routes — their URLs carry one-time tokens.
export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="reset-page">
      <header className="reset-header">
        <Link href="/" className="reset-logo" aria-label="InBetween — home">
          <Image
            src="/images/logo-lockup-white.png"
            alt="InBetween"
            width={3389}
            height={463}
            priority
          />
        </Link>
      </header>

      <main className="reset-main">{children}</main>

      <style>{`
      .reset-page {
        min-height: 100vh;
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        position: relative;
        background: #000;
        overflow: clip;
      }
      .reset-page::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 520px;
        background: radial-gradient(120% 100% at 82% 0%, rgba(107, 84, 32, 0.42) 0%, rgba(58, 47, 20, 0.2) 32%, transparent 72%);
        pointer-events: none;
      }
      .reset-header {
        position: relative;
        z-index: 1;
        padding: 32px 48px;
      }
      .reset-logo {
        display: inline-flex;
      }
      .reset-logo img {
        height: 26px;
        width: auto;
      }
      .reset-main {
        position: relative;
        z-index: 1;
        flex: 1;
        display: flex;
        justify-content: center;
        padding: 72px 24px 96px;
      }
      @media (max-width: 768px) {
        .reset-header {
          padding: 24px;
        }
        .reset-main {
          padding: 40px 24px 72px;
        }
      }
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
      .rp-hint-after {
        margin: 16px 0 0;
        text-align: center;
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
    </div>
  );
}
