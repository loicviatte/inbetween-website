"use client";

import { useState } from "react";
import { ContactModal } from "./ContactModal";

const IG = "https://instagram.com/useinbetween";
const LI = "https://www.linkedin.com/company/inbetweenapp";

/**
 * Marketing footer — the 4-column layout from the design system (brand +
 * Product / Company / Legal + a bottom bar with socials). "Contact" opens the
 * shared contact dialog. Dark bookend, flows out of the final CTA band.
 */
export function SiteFooter() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="brand" aria-label="InBetween — home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="brand-white" src="/images/icon_name_white.png" alt="InBetween" />
            </a>
            <p>
              Your coach teaches. We capture every correction. You never forget.
              Built for Latin &amp; Ballroom.
            </p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><a href="#how">How it works</a></li>
              <li><a href="#app">The App</a></li>
              <li><a href="#clip">The Clip</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <button type="button" onClick={() => setContactOpen(true)}>
                  Contact
                </button>
              </li>
              <li><a href={IG} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/terms">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="copy">© InBetween 2026</span>
          <div className="footer-social">
            <a href={IG} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href={LI} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="4" />
                <line x1="8" y1="11" x2="8" y2="17" />
                <line x1="8" y1="8" x2="8" y2="8.5" />
                <path d="M12 17v-4c0-1.1.9-2 2-2s2 .9 2 2v4" />
                <line x1="12" y1="11" x2="12" y2="17" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      <style>{`
        .footer {
          background: var(--ink-1000); color: var(--ink-0);
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: clamp(72px, 9vw, 120px) 0 44px;
          position: relative;
        }
        .footer-grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 56px; }
        .footer-brand .brand { margin-bottom: 20px; }
        .footer-brand .brand span { color: var(--ink-0); }
        .footer-brand p {
          color: rgba(247,246,243,0.5); font-size: 14px; font-weight: var(--fw-light);
          line-height: 1.65; max-width: 290px; margin: 0;
        }
        .footer-col h4 {
          font-size: var(--fs-eyebrow); text-transform: uppercase;
          letter-spacing: var(--tracking-eyebrow); font-weight: var(--fw-medium);
          color: rgba(247,246,243,0.45); margin: 0 0 20px;
        }
        .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 13px; margin: 0; padding: 0; }
        .footer-col a, .footer-col button {
          color: rgba(247,246,243,0.72); text-decoration: none; font-size: 14px;
          font-family: inherit; background: none; border: 0; padding: 0; cursor: pointer;
          text-align: left; transition: color var(--dur-fast) var(--ease-out);
        }
        .footer-col a:hover, .footer-col button:hover { color: var(--ink-0); }
        .footer-bottom {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: clamp(56px, 7vw, 80px); padding-top: 30px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .footer-bottom .copy { color: rgba(247,246,243,0.4); font-size: 13px; }
        .footer-social { display: flex; gap: 14px; }
        .footer-social a { color: rgba(247,246,243,0.55); display: inline-flex; transition: color var(--dur-fast) var(--ease-out); }
        .footer-social a:hover { color: var(--gold-400); }
        .footer-social svg { width: 18px; height: 18px; }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 44px 32px; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 760px) {
          .footer-bottom { flex-direction: column; gap: 18px; align-items: flex-start; }
        }
      `}</style>
    </footer>
  );
}
