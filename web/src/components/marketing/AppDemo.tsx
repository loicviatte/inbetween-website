"use client";

import { useEffect } from "react";
import "./app-demo.css";
import { APP_DEMO_MARKUP } from "./appDemoMarkup";
import { initAppDemo } from "./appDemoController";

/**
 * "The App" — the interactive product demo (dancer + coach, ~11 phone screens,
 * scroll-spy + tap driven). The markup is the design system's exact HTML
 * (injected verbatim) and the behaviour is the ported app-demo.js controller,
 * run once on mount with a full teardown on unmount.
 */
export function AppDemo() {
  useEffect(() => initAppDemo(), []);

  return (
    <section
      className="section"
      id="app"
      dangerouslySetInnerHTML={{ __html: APP_DEMO_MARKUP }}
    />
  );
}
