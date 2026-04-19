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
      <style>{`
        .intro-stage {
          transition: opacity ${FADE_MS}ms ease;
        }
        .intro-stage[data-fading="true"] {
          opacity: 0;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
