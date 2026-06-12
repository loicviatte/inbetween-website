import Image from "next/image";
import Link from "next/link";

type LegalLayoutProps = {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
};

export function LegalLayout({ title, effectiveDate, children }: LegalLayoutProps) {
  return (
    <div className="legal-page">
      <header className="site-header">
        <Link href="/" className="logo" aria-label="InBetween — home">
          <Image
            src="/images/logo-transparent.png"
            alt="InBetween"
            width={32}
            height={32}
            priority
          />
          <span>InBetween</span>
        </Link>
      </header>

      <main className="legal-main">
        <article className="legal">
          <p className="eyebrow">
            <span className="eyebrow-dash" aria-hidden="true" />
            Legal
          </p>
          <h1 className="legal-title">{title}</h1>
          <p className="legal-effective">Effective date: {effectiveDate}</p>
          <div className="divider" />
          {children}
        </article>
      </main>

      <footer className="legal-footer">
        <nav className="legal-footer-links" aria-label="Legal">
          <Link href="/">Home</Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms">Terms</Link>
          <span aria-hidden="true">·</span>
          <Link href="/privacy">Privacy</Link>
        </nav>
        <span className="legal-footer-copy">© InBetween 2026</span>
      </footer>

      <style>{`
        .legal-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          background: #000;
          overflow: clip;
        }
        /* A single warm glow at the top — the rest of the long read sits on flat black. */
        .legal-page::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 520px;
          background: radial-gradient(120% 100% at 82% 0%, rgba(107, 84, 32, 0.42) 0%, rgba(58, 47, 20, 0.2) 32%, transparent 72%);
          pointer-events: none;
          z-index: 0;
        }

        .site-header {
          position: relative;
          z-index: 10;
          padding: 32px 48px;
          display: flex;
          align-items: center;
        }
        .logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 20px;
          font-weight: 600;
          color: var(--ink-50);
          letter-spacing: -0.01em;
          text-decoration: none;
        }
        .logo img {
          height: 28px;
          width: auto;
          border-radius: 6px;
        }

        .legal-main {
          position: relative;
          z-index: 5;
          flex: 1;
          display: flex;
          justify-content: center;
          padding: 56px 24px 96px;
        }
        .legal {
          width: 100%;
          max-width: 720px;
        }

        .eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold-400);
          margin: 0 0 28px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .eyebrow-dash {
          width: 18px;
          height: 1px;
          background: currentColor;
          display: inline-block;
        }

        .legal-title {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 600;
          line-height: 1.04;
          letter-spacing: -0.02em;
          color: var(--ink-50);
          margin: 0 0 14px;
        }
        .legal-effective {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.01em;
          color: var(--gold-300);
          margin: 0;
        }

        .divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin: 36px 0 8px;
        }

        /* ----------  Long-form prose  ---------- */
        .legal h2 {
          font-size: clamp(20px, 2.4vw, 26px);
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -0.01em;
          color: var(--ink-50);
          margin: 52px 0 16px;
        }
        .legal h3 {
          font-size: 17px;
          font-weight: 600;
          color: var(--ink-50);
          margin: 32px 0 10px;
        }
        .legal p {
          font-size: 16px;
          line-height: 1.65;
          color: rgba(247, 246, 243, 0.74);
          margin: 0 0 18px;
          max-width: 66ch;
        }
        .legal strong {
          color: var(--ink-50);
          font-weight: 600;
        }
        .legal a {
          color: var(--gold-400);
          text-decoration: none;
          border-bottom: 1px solid rgba(240, 194, 74, 0.35);
          transition: border-color 150ms var(--ease-out), color 150ms var(--ease-out);
        }
        .legal a:hover {
          color: var(--gold-300);
          border-bottom-color: var(--gold-300);
        }
        .legal ul {
          margin: 0 0 18px;
          padding: 0;
          list-style: none;
          max-width: 66ch;
        }
        .legal li {
          position: relative;
          font-size: 16px;
          line-height: 1.6;
          color: rgba(247, 246, 243, 0.74);
          padding-left: 22px;
          margin: 0 0 10px;
        }
        .legal li::before {
          content: "";
          position: absolute;
          left: 2px;
          top: 11px;
          width: 6px;
          height: 1px;
          background: var(--gold-400);
        }

        /* Callout — the markdown blockquote "Note" */
        .legal .legal-note {
          position: relative;
          margin: 0 0 28px;
          padding: 16px 20px;
          border-left: 2px solid var(--gold-400);
          background: rgba(240, 194, 74, 0.06);
          border-radius: 0 8px 8px 0;
        }
        .legal .legal-note p {
          margin: 0;
          color: rgba(247, 246, 243, 0.82);
        }

        /* Hairline section rule */
        .legal .rule {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          border: 0;
          margin: 44px 0;
        }

        /* Tables */
        .legal .table-wrap {
          margin: 0 0 22px;
          overflow-x: auto;
        }
        .legal table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
          line-height: 1.5;
        }
        .legal th {
          text-align: left;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-400);
          padding: 0 16px 10px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
          vertical-align: bottom;
        }
        .legal td {
          padding: 12px 16px 12px 0;
          color: rgba(247, 246, 243, 0.74);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          vertical-align: top;
        }
        .legal td strong {
          color: var(--ink-50);
        }

        .legal-footer {
          position: relative;
          z-index: 10;
          padding: 28px 48px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .legal-footer-links {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 13px;
        }
        .legal-footer-links a {
          color: rgba(247, 246, 243, 0.55);
          text-decoration: none;
          transition: color 150ms var(--ease-out);
        }
        .legal-footer-links a:hover {
          color: var(--gold-400);
        }
        .legal-footer-links span {
          color: rgba(247, 246, 243, 0.25);
        }
        .legal-footer-copy {
          font-size: 13px;
          color: rgba(247, 246, 243, 0.4);
        }

        @media (max-width: 768px) {
          .site-header {
            padding: 24px;
          }
          .legal-main {
            padding: 40px 24px 72px;
          }
          .legal-footer {
            padding: 24px 24px 36px;
          }
        }
      `}</style>
    </div>
  );
}
