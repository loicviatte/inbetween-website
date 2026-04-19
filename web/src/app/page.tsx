import Image from "next/image";
import { IntroStage } from "@/components/IntroStage";
import { ContactModal } from "@/components/ContactModal";

export default function Home() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="logo">
          <Image
            src="/images/logo-transparent.png"
            alt="InBetween"
            width={32}
            height={32}
            priority
          />
          <span>InBetween</span>
        </div>
        <ContactModal />
      </header>

      <main>
        <IntroStage />
      </main>

      <footer>
        <div className="footer-social">
          <a href="https://instagram.com/danceuniteduk" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/inbetweenapp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="4"/>
              <line x1="8" y1="11" x2="8" y2="17"/>
              <line x1="8" y1="8" x2="8" y2="8.5"/>
              <path d="M12 17v-4c0-1.1.9-2 2-2s2 .9 2 2v4"/>
              <line x1="12" y1="11" x2="12" y2="17"/>
            </svg>
          </a>
        </div>
        © InBetween 2026
      </footer>

      <style>{`
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          background: radial-gradient(130% 100% at 80% 115%, #6B5420 0%, #3A2F14 30%, #1A1A1A 65%, #000 90%);
          overflow: clip;
        }

        .page::before {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--grain-url);
          background-size: 220px;
          opacity: 0.35;
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        main {
          position: relative;
          z-index: 5;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .site-header {
          position: relative;
          z-index: 10;
          padding: 32px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 20px;
          font-weight: 600;
          color: var(--ink-50);
          letter-spacing: -0.01em;
        }

        .logo img {
          height: 28px;
          width: auto;
          border-radius: 6px;
        }

        footer {
          position: relative;
          z-index: 10;
          padding: 32px 48px;
          text-align: center;
          font-size: 13px;
          color: rgba(247, 246, 243, 0.4);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        .footer-social {
          display: flex;
          gap: 16px;
        }

        .footer-social a {
          color: rgba(247, 246, 243, 0.35);
          transition: color 150ms var(--ease-out);
          display: flex;
        }
        .footer-social a:hover {
          color: var(--gold-500);
        }

        @media (max-width: 768px) {
          .site-header,
          footer {
            padding-left: 24px;
            padding-right: 24px;
          }
        }
      `}</style>
    </div>
  );
}
