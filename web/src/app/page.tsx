import "./marketing.css";
import { Suspense } from "react";
import { IntroStage } from "@/components/IntroStage";
import { Nav } from "@/components/Nav";
import { MarketingSections } from "@/components/MarketingSections";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="page-root mkt">
      <Nav />

      {/* Hero — kept exactly as before: dark gradient + grain scoped here so it
          never bleeds behind the marketing sections. */}
      <div className="page">
        <main>
          <Suspense fallback={null}>
            <IntroStage />
          </Suspense>
        </main>
      </div>

      <MarketingSections />

      <SiteFooter />

      <style>{`
        .page-root {
          display: flex;
          flex-direction: column;
          background: var(--ink-50);
        }

        /* Hero shell — unchanged from the original single-viewport landing. */
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

        .page main {
          position: relative;
          z-index: 5;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

      `}</style>
    </div>
  );
}
