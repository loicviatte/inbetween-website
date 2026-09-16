// Pages opened from the app's account and parent-permission emails. Their URLs
// carry one-time codes, so analytics and the Meta pixel must never see them.
export const PRIVATE_ROUTE_RE = /^\/(reset-password|auth|consent)(\/|$)/;

export function isPrivateUrl(url: string): boolean {
  try {
    const u = new URL(url, "https://www.useinbetween.com");
    return PRIVATE_ROUTE_RE.test(u.pathname) || /(access_token|refresh_token|token_hash|token)=/.test(u.search + u.hash);
  } catch {
    return true;
  }
}
