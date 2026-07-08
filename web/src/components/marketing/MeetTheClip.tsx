export function MeetTheClip() {
  return (
    <section className="section--tight meet" id="clip">
      <div className="meet-band grain on-dark reveal">
        <div className="meet-glow" />
        <div className="meet-visual">
          <div className="clip-device">
            <span className="cd-mic" />
            <span className="cd-led" />
            <span className="cd-engrave">InBetween</span>
          </div>
        </div>
        <div className="meet-copy">
          <span className="eyebrow">The hardware that makes it effortless</span>
          <h2>
            The InBetween Clip. <em>Wear it. Forget it.</em>
          </h2>
          <p>
            A featherweight capsule that clips to your coach&rsquo;s collar. One tap
            when the lesson starts, and every focus point arrives in the app on its
            own.
          </p>
          <div className="spec-grid">
            <div className="spec">
              <h3>One-tap capture</h3>
              <p>Tap once at the start. The gold light means every word is safe.</p>
            </div>
            <div className="spec">
              <h3>All-lesson battery</h3>
              <p>Outlasts the longest training day, charges in its case.</p>
            </div>
            <div className="spec">
              <h3>Clips to anything</h3>
              <p>Collar, lapel, lanyard or wristband, it disappears on you.</p>
            </div>
            <div className="spec">
              <h3>Pairs instantly</h3>
              <p>Lessons land in the app the moment you&rsquo;re done teaching.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .meet { padding-left: clamp(12px, 3vw, 40px); padding-right: clamp(12px, 3vw, 40px); }
        .meet-band {
          background: var(--ink-1000);
          border-radius: clamp(28px, 4vw, 48px);
          position: relative; overflow: hidden;
          padding: clamp(72px, 9vw, 128px) clamp(28px, 6vw, 96px);
          display: grid; grid-template-columns: 1fr 1.15fr;
          gap: clamp(40px, 6vw, 96px);
          align-items: center;
        }
        .meet-glow {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(60% 75% at 28% 60%, rgba(150,112,42,0.34) 0%, rgba(60,45,18,0.12) 45%, transparent 72%);
        }
        .meet-visual { position: relative; display: flex; justify-content: center; z-index: 2; }
        .meet-visual .clip-device {
          --cw: clamp(160px, 16vw, 210px);
          transform: rotate(-6deg);
          filter: drop-shadow(0 0 80px rgba(240,194,74,.12));
        }
        .meet-copy { position: relative; z-index: 2; }
        .meet-copy .eyebrow { margin-bottom: 22px; }
        .meet-copy h2 {
          font-size: var(--fs-display-lg);
          color: var(--ink-0);
          letter-spacing: -0.02em;
          margin-bottom: 18px;
        }
        .meet-copy h2 em { font-style: italic; font-weight: var(--fw-light); color: var(--gold-400); }
        .meet-copy > p {
          color: rgba(247,246,243,0.66); font-weight: var(--fw-light);
          font-size: 16.5px; line-height: 1.7; max-width: 480px; margin-bottom: 40px;
        }
        .spec-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 0;
          border-top: 1px solid rgba(255,255,255,.10);
        }
        .spec { padding: 22px 24px 24px 0; border-bottom: 1px solid rgba(255,255,255,.10); }
        .spec h3 { font-size: 16px; font-weight: var(--fw-demibold); color: var(--ink-0); margin-bottom: 5px; letter-spacing: -0.005em; }
        .spec p { font-size: 13.5px; font-weight: var(--fw-light); color: rgba(247,246,243,0.52); line-height: 1.55; margin: 0; }
        /* .clip-device / .cd-* live in marketing.css (shared with how-it-works) */

        @media (max-width: 900px) {
          .meet-band { grid-template-columns: 1fr; padding: clamp(56px, 9vw, 80px) clamp(24px, 6vw, 48px); }
        }
        @media (max-width: 760px) {
          .spec-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
