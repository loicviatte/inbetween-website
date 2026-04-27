"use client";

import { useEffect, useRef, useState } from "react";
import { WaitlistHero } from "./WaitlistHero";
import { PhoneTransformation } from "./PhoneTransformation";

export type IntroPhase = 0 | 1 | 2 | 3 | 4 | 5;

const PHASE_TIMINGS: Record<Exclude<IntroPhase, 0>, number> = {
  1: 200,
  2: 2700,
  3: 5400,
  4: 7900,
  5: 9400,
};

const FADE_MS = 300;

export function IntroStage() {
  const [phase, setPhase] = useState<IntroPhase>(0);
  const [fading, setFading] = useState(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPhase(5);
      return;
    }
    timersRef.current = (Object.entries(PHASE_TIMINGS) as [string, number][]).map(
      ([p, ms]) => setTimeout(() => setPhase(Number(p) as IntroPhase), ms)
    );
    return () => timersRef.current.forEach(clearTimeout);
  }, []);

  function skipIntro() {
    if (phase >= 4) return;
    timersRef.current.forEach(clearTimeout);
    setFading(true);
    setTimeout(() => {
      setPhase(5);
      setFading(false);
    }, FADE_MS);
  }

  return (
    <div
      className="intro-stage"
      data-intro-phase={phase}
      data-fading={fading ? "true" : "false"}
      onClick={phase < 4 ? skipIntro : undefined}
      style={{ cursor: phase < 4 ? "default" : undefined }}
    >
      <WaitlistHero phase={phase} />
      <PhoneTransformation phase={phase} />
      {phase >= 1 && phase < 4 && (
        <div className="skip-hint" aria-hidden="true">
          Tap to skip
        </div>
      )}
      <style>{`
        .intro-stage {
          transition: opacity ${FADE_MS}ms ease;
        }
        .intro-stage[data-fading="true"] {
          opacity: 0;
          pointer-events: none;
        }
        .skip-hint {
          position: fixed;
          bottom: 88px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(247, 246, 243, 0.45);
          pointer-events: none;
          z-index: 20;
          animation: skip-pulse 1.8s ease-in-out infinite;
        }
        @keyframes skip-pulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.75; }
        }
        @media (prefers-reduced-motion: reduce) {
          .skip-hint { animation: none; opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
