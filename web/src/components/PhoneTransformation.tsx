"use client";

import { useRef, useState } from "react";
import { PhoneMockup } from "./PhoneMockup";
import type { IntroPhase } from "./IntroStage";

type Track = {
  coach: string;
  focus: { eyebrow: string; title: string; sub: string };
  delay: number;
};

const TRACKS: Track[] = [
  {
    coach:
      "Coming out of that walk your back hip isn't opening. You're leaving the leg behind instead of using the standing leg to drive it through. That's why the line never finishes. Open the back hip earlier, every single step.",
    focus: {
      eyebrow: "FOCUS 01",
      title: "Open the back hip",
      sub: "Standing leg drives. Back hip follows through.",
    },
    delay: 0,
  },
  {
    coach:
      "On the 4 and 1 your spine stops moving completely. That's the most important moment in Rumba. I need to see you travel through it, not freeze. Move the spine, then stop it. That contrast is everything.",
    focus: {
      eyebrow: "FOCUS 02",
      title: "Spine on the 4 and 1",
      sub: "Move it. Then stop it. Contrast is the point.",
    },
    delay: 3.2,
  },
  {
    coach:
      "The back leg isn't finishing the line. You're bending the knee before the foot is straight. I need the foot and knee straight first, then you settle. Faster placing on that standing leg.",
    focus: {
      eyebrow: "FOCUS 03",
      title: "Finish the leg line",
      sub: "Straight foot first. Then bend.",
    },
    delay: 6.4,
  },
];

const CYCLE = 9.6;

// Negative delay = jump to that point in the cycle. 60% of CYCLE lands between
// the "fully visible" keyframes (48% → 76%), so the focus card appears immediately.
const FOCUS_SHOW_DELAY = -(CYCLE * 0.6);

export function PhoneTransformation({ phase }: { phase: IntroPhase }) {
  const [pausedTrack, setPausedTrack] = useState<number | null>(null);
  const [lingeringTrack, setLingeringTrack] = useState<number | null>(null);
  const lingerTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleCoachClick(i: number) {
    if (lingerTimer.current) clearTimeout(lingerTimer.current);
    setLingeringTrack(null);
    setPausedTrack(i);
  }

  function handleCoachLeave(i: number) {
    if (pausedTrack !== i) return;
    setPausedTrack(null);
    setLingeringTrack(i);
    // Give the focus card time to exit naturally from its current position
    lingerTimer.current = setTimeout(() => setLingeringTrack(null), 1200);
  }

  return (
    <div className="scene" data-phase={phase}>
      <div className="tracks" aria-hidden="true">
        {TRACKS.map((t, i) => (
          <div
            className="track"
            key={i}
            style={{ "--track-index": i } as React.CSSProperties}
          >
            <div
              className="coach"
              style={{
                animationDelay: `${t.delay}s`,
                animationPlayState: pausedTrack === i ? "paused" : undefined,
                cursor: "pointer",
              }}
              onClick={() => handleCoachClick(i)}
              onMouseLeave={() => handleCoachLeave(i)}
            >
              <div className="coach-head">
                <div className="coach-avatar" />
                <div className="coach-meta">
                  <span className="coach-name">Coach</span>
                  <span className="coach-time">live</span>
                </div>
              </div>
              <p className="coach-body">{t.coach}</p>
            </div>

            <div
              className="focus"
              style={pausedTrack === i ? {
                animationDelay: `${FOCUS_SHOW_DELAY}s`,
                animationPlayState: "paused",
              } : lingeringTrack === i ? {
                animationDelay: `${FOCUS_SHOW_DELAY}s`,
                animationPlayState: "running",
              } : {
                animationDelay: `${t.delay + 0.2}s`,
              }}
            >
              <span className="focus-eyebrow">{t.focus.eyebrow}</span>
              <h3 className="focus-title">{t.focus.title}</h3>
              <p className="focus-sub">{t.focus.sub}</p>
              <div className="focus-cta">
                <span>Start drill</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="phone-center">
        <PhoneMockup src="/images/app-screen.png" alt="InBetween app" />
      </div>

      <style>{`
        .scene {
          position: relative;
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          min-height: 720px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 48px;
          transition: transform 1100ms var(--ease-out);
          will-change: transform;
        }
        /* Lift scene so the phone sits roughly in the vertical center of the
           viewport during the intro. Calibrated so the phone's natural center
           (~1100px from document top) lands at 50vh. Clamped so it never
           pushes up too far on small desktop heights. */
        .scene[data-phase="1"],
        .scene[data-phase="2"],
        .scene[data-phase="3"] {
          transform: translateY(clamp(-560px, calc(50vh - 920px), -100px));
        }
        .scene[data-phase="4"],
        .scene[data-phase="5"] {
          transform: translateY(0);
        }

        /* ---- Phone ---- */
        .phone-center {
          position: relative;
          z-index: 5;
          width: 380px;
          max-width: 100%;
          display: flex;
          justify-content: center;
          opacity: 0;
          transform: scale(0.85) translateY(40px);
          filter: blur(12px);
          transition:
            opacity 900ms var(--ease-out),
            transform 1000ms var(--ease-spring),
            filter 900ms var(--ease-out);
        }
        .scene[data-phase="2"] .phone-center,
        .scene[data-phase="3"] .phone-center,
        .scene[data-phase="4"] .phone-center,
        .scene[data-phase="5"] .phone-center {
          opacity: 1;
          transform: scale(1) translateY(0);
          filter: blur(0);
        }

        /* ---- Tracks layout ---- */
        .tracks {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          overflow: hidden;
        }

        .track {
          position: absolute;
          left: 0;
          right: 0;
          height: 160px;
          top: calc(80px + var(--track-index) * 200px);
        }

        /* ---- Coach message ---- */
        .coach {
          pointer-events: auto;
          position: absolute;
          left: 0;
          top: 0;
          width: 320px;
          max-width: 40%;
          padding: 14px 18px;
          border-radius: 18px;
          background: linear-gradient(140deg, rgba(28, 28, 28, 0.9), rgba(14, 14, 14, 0.82));
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          color: rgba(247, 246, 243, 0.88);
          font-size: 13.5px;
          line-height: 1.5;
          opacity: 0;
          transform: translateX(-40px);
          will-change: transform, opacity;
        }

        /* Track 0 coach always animates (drives the intro). Tracks 1 & 2
           only kick in once the intro has finished (phase 5). */
        .track:nth-child(1) .coach,
        .scene[data-phase="5"] .track:nth-child(2) .coach,
        .scene[data-phase="5"] .track:nth-child(3) .coach {
          animation: coachFlow ${CYCLE}s cubic-bezier(.5, .1, .3, 1) infinite;
        }

        .coach-head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }
        .coach-avatar {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: linear-gradient(135deg, #555, #222);
          border: 1px solid rgba(255, 255, 255, 0.1);
          flex-shrink: 0;
        }
        .coach-meta {
          display: flex;
          align-items: baseline;
          gap: 8px;
          flex: 1;
        }
        .coach-name {
          font-size: 12px;
          font-weight: 500;
          color: rgba(247, 246, 243, 0.9);
        }
        .coach-time {
          font-size: 10px;
          color: rgba(232, 181, 48, 0.85);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .coach-time::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #D06A5A;
          box-shadow: 0 0 8px rgba(208, 106, 90, 0.8);
        }
        .coach-body { margin: 0; font-weight: 300; }

        @keyframes coachFlow {
          0% { transform: translateX(-40px); opacity: 0; filter: blur(0); }
          8% { transform: translateX(0); opacity: 1; }
          38% { transform: translateX(32%); opacity: 1; filter: blur(0); }
          48% { transform: translateX(48%); opacity: 0; filter: blur(4px); }
          100% { transform: translateX(48%); opacity: 0; filter: blur(4px); }
        }

        /* ---- Focus point ---- */
        .focus {
          position: absolute;
          right: 0;
          top: 0;
          width: 280px;
          max-width: 36%;
          padding: 16px 18px 14px;
          border-radius: 18px;
          background: linear-gradient(140deg, rgba(32, 28, 20, 0.95), rgba(18, 16, 12, 0.95));
          border: 1px solid rgba(232, 181, 48, 0.28);
          box-shadow:
            0 24px 48px -16px rgba(0, 0, 0, 0.7),
            0 0 0 1px rgba(232, 181, 48, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          opacity: 0;
          transform: translateX(-40%) scale(0.88);
          will-change: transform, opacity;
          color: var(--ink-50);
        }

        /* Track 0 focus always runs. Others start at phase 5. */
        .track:nth-child(1) .focus,
        .scene[data-phase="5"] .track:nth-child(2) .focus,
        .scene[data-phase="5"] .track:nth-child(3) .focus {
          animation: focusFlow ${CYCLE}s cubic-bezier(.5, .1, .3, 1) infinite;
        }

        .focus-eyebrow {
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold-400);
          margin-bottom: 8px;
        }
        .focus-title {
          margin: 0 0 6px;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.015em;
          line-height: 1.2;
          color: #fff;
        }
        .focus-sub {
          margin: 0 0 12px;
          font-size: 12.5px;
          font-weight: 300;
          line-height: 1.4;
          color: rgba(247, 246, 243, 0.65);
        }
        .focus-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 999px;
          background: var(--gold-500);
          color: var(--ink-950);
          font-size: 12px;
          font-weight: 600;
        }

        @keyframes focusFlow {
          0%, 36% { transform: translateX(-40%) scale(0.88); opacity: 0; filter: blur(4px); }
          48% { transform: translateX(-16%) scale(1); opacity: 1; filter: blur(0); }
          76% { transform: translateX(0) scale(1); opacity: 1; filter: blur(0); }
          86% { transform: translateX(24px) scale(0.96); opacity: 0; filter: blur(2px); }
          100% { transform: translateX(24px) scale(0.96); opacity: 0; }
        }

        /* ---- Responsive ---- */
        @media (max-width: 1024px) {
          .scene {
            min-height: auto;
            padding: 20px 24px 40px;
          }
          .scene[data-phase="1"],
          .scene[data-phase="2"],
          .scene[data-phase="3"],
          .scene[data-phase="4"],
          .scene[data-phase="5"] { transform: none; }
          .tracks { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .scene, .phone-center { transition: none; transform: none !important; }
          .coach, .focus { animation: none !important; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
