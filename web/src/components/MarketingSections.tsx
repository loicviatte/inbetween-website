"use client";

import { useEffect, useRef } from "react";
import { Statement } from "./marketing/Statement";
import { HowItWorks } from "./marketing/HowItWorks";
import { AppDemo } from "./marketing/AppDemo";
import { MeetTheClip } from "./marketing/MeetTheClip";
import { FinalCta } from "./marketing/FinalCta";

/**
 * The marketing page below the hero: warm-paper sections + dark bands,
 * ported from the design system's Waitlist.html. Runs the scroll-reveal
 * (from enhance.js) over its own subtree, reduced-motion aware and with a
 * safety net so nothing stays hidden if the observer never fires.
 */
export function MarketingSections() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    if (!els.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));

    // Safety net: never leave content stuck hidden.
    const failSafe = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("is-in"));
    }, 2600);

    return () => {
      io.disconnect();
      window.clearTimeout(failSafe);
    };
  }, []);

  return (
    <div className="marketing" ref={rootRef}>
      <Statement />
      <HowItWorks />
      <AppDemo />
      <MeetTheClip />
      <FinalCta />

      <style>{`
        .marketing { position: relative; background: var(--ink-50); }
      `}</style>
    </div>
  );
}
