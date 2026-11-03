// Where a waitlist signup came from (partner links such as useinbetween.com/btr).
// Carried in the URL as ?src=… (no cookie, no storage), sent with the form,
// and saved on the Supabase row and the Resend contact.

export const SOURCE_RE = /^[a-z0-9_]{1,40}$/;

export function cleanSource(raw: unknown): string | null {
  const s = String(raw ?? "").trim().toLowerCase();
  return SOURCE_RE.test(s) ? s : null;
}

// Partner short links: /<slug>?c=<channel> -> /?src=<slug>[_<channel>]
// Channels let us tell the spoken link apart from the description, a story, etc.
export const PARTNER_LINKS: Record<string, { segmentId?: string }> = {
  // Break The Routine podcast. Resend segment "InBetween Waitlist - BTR podcast".
  btr: { segmentId: process.env.RESEND_SEGMENT_BTR_ID ?? "4af7df3a-cedc-4ff5-ac92-6416427a0351" },
};

export function partnerOf(source: string | null): string | null {
  if (!source) return null;
  const slug = source.split("_")[0];
  return slug in PARTNER_LINKS ? slug : null;
}

// Outbound partner links counted in `link_clicks` before redirecting:
// useinbetween.com/go/<slug>?c=<channel> -> target. Used by the BTR site
// (breaktheroutinepodcast.com/studio) to count clicks to sponsors.
export const GO_LINKS: Record<string, string> = {
  studio: "https://otimabusedancestudio.com/",
};
