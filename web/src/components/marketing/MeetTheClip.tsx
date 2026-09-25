"use client";

import { useState } from "react";
import Image from "next/image";

// Real product renders, matted onto transparency so the device floats on the
// dark band. Order is the tour shown in the thumbnail strip.
const ANGLES = [
  { src: "/images/clip/clip-hero.webp", label: "Three-quarter" },
  { src: "/images/clip/clip-front.webp", label: "Front" },
  { src: "/images/clip/clip-back.webp", label: "Back" },
  { src: "/images/clip/clip-side.webp", label: "Side" },
] as const;

export function MeetTheClip() {
  const [active, setActive] = useState(0);

  return (
    <section className="section--tight meet" id="clip">
      <div className="meet-band grain on-dark reveal">
        <div className="meet-glow" />
        <div className="meet-visual">
          <div className="clip-stage">
            <span className="clip-halo" aria-hidden="true" />
            <div className="clip-shots">
              {ANGLES.map((a, i) => (
                <Image
                  key={a.src}
                  src={a.src}
                  alt={`The InBetween Clip, ${a.label.toLowerCase()} view`}
                  fill
                  sizes="(max-width: 900px) 68vw, 360px"
                  className="clip-shot"
                  data-active={i === active}
                  priority={i === 0}
                />
              ))}
            </div>
          </div>
          <div className="clip-thumbs" role="group" aria-label="Clip angles">
            {ANGLES.map((a, i) => (
              <button
                key={a.src}
                type="button"
                className="clip-thumb"
                data-active={i === active}
                aria-pressed={i === active}
                aria-label={`Show ${a.label.toLowerCase()} view`}
                onClick={() => setActive(i)}
              >
                <Image src={a.src} alt="" fill sizes="64px" className="clip-thumb-img" />
              </button>
            ))}
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
        .meet-visual {
          position: relative; z-index: 2;
          display: flex; flex-direction: column; align-items: center;
          gap: clamp(16px, 2.4vw, 26px);
        }
        /* Floating device showcase */
        .clip-stage {
          position: relative;
          width: 100%;
          height: clamp(300px, 40vh, 440px);
        }
        .clip-halo {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(44% 40% at 50% 46%, rgba(240,194,74,0.24), rgba(240,194,74,0.06) 44%, transparent 70%);
        }
        .clip-shots { position: absolute; inset: 0; }
        .clip-shot {
          object-fit: contain;
          opacity: 0;
          transition: opacity .5s var(--ease-out);
          filter: drop-shadow(0 26px 46px rgba(0,0,0,0.55));
        }
        .clip-shot[data-active="true"] { opacity: 1; }
        @media (prefers-reduced-motion: reduce) {
          .clip-shot { transition: none; }
        }
        .clip-thumbs { display: flex; gap: 10px; justify-content: center; }
        .clip-thumb {
          position: relative; width: 56px; height: 56px; flex: none;
          border-radius: 14px; padding: 6px; cursor: pointer; overflow: hidden;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          transition: border-color .18s var(--ease-out), background .18s var(--ease-out), transform .18s var(--ease-out);
        }
        .clip-thumb:hover { border-color: rgba(240,194,74,0.5); transform: translateY(-1px); }
        .clip-thumb[data-active="true"] {
          border-color: var(--gold-400);
          background: rgba(240,194,74,0.10);
        }
        .clip-thumb:focus-visible { outline: 2px solid var(--gold-400); outline-offset: 2px; }
        .clip-thumb-img { object-fit: contain; }

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

        @media (max-width: 900px) {
          .meet-band { grid-template-columns: 1fr; padding: clamp(56px, 9vw, 80px) clamp(24px, 6vw, 48px); }
          .meet-visual { order: -1; }
        }
        @media (max-width: 760px) {
          .spec-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
