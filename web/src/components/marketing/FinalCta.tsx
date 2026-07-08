import { Suspense } from "react";
import { WaitlistFormInline } from "../WaitlistFormInline";

export function FinalCta() {
  return (
    <section className="section final grain on-dark">
      <div className="final-glow" />
      <div className="container final-inner reveal">
        <h2>
          Never forget what your coach told you.{" "}
          <span className="g">Start training intentionally.</span>
        </h2>
        <Suspense fallback={null}>
          <WaitlistFormInline idPrefix="final" />
        </Suspense>
        <p className="micro">No spam, just one note when it&rsquo;s your turn.</p>
      </div>

      <style>{`
        .final {
          position: relative; text-align: center; overflow: hidden;
          background: var(--ink-1000); color: var(--ink-0);
          margin-top: clamp(40px, 6vw, 72px);
        }
        .final-glow {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background: radial-gradient(60% 80% at 50% 110%, rgba(150,112,42,0.45) 0%, rgba(60,45,18,0.18) 40%, transparent 72%);
        }
        .final-inner { position: relative; z-index: 3; }
        .final h2 {
          font-size: var(--fs-display-lg); max-width: 720px; margin: 0 auto 36px;
          letter-spacing: -0.02em; color: var(--ink-0);
        }
        .final h2 .g { color: var(--gold-400); }
        .final .micro { color: rgba(247,246,243,0.5); font-size: 13px; margin-top: 12px; }
      `}</style>
    </section>
  );
}
