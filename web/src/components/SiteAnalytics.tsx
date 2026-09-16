"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { isPrivateUrl } from "@/lib/privateRoutes";

// Vercel Analytics + Speed Insights, minus the pages that carry one-time tokens.
export function SiteAnalytics() {
  return (
    <>
      <Analytics beforeSend={(event) => (isPrivateUrl(event.url) ? null : event)} />
      <SpeedInsights beforeSend={(event) => (isPrivateUrl(event.url) ? null : event)} />
    </>
  );
}
