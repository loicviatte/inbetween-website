// Waitlist welcome email. Mirrors the design in
// inbetween-design-system/project/emails/waitlist-welcome.html but with
// dynamic rank + referral link injected.

export function renderWelcomeEmail(params: {
  referralUrl: string;
  rank: number;
  role: "coach" | "dancer";
}): { html: string; text: string; subject: string } {
  const { referralUrl, rank, role } = params;
  const rankLabel = `#${rank.toLocaleString("en")}`;

  const subject = `You're in — ${rankLabel} on the InBetween waitlist`;

  const pitch =
    role === "coach"
      ? {
          p1: "InBetween captures everything you teach during lessons and automatically turns it into personalised focus points for each of your dancers, so they practice what you asked, not what they remember.",
          p2: "No more repeating the same correction week after week. Just real progress you can actually see.",
          taglineHtml: `You <em style="font-style:italic; color:#F7F6F3;">teach.</em> We show you what they practice. You already know before they say hi.`,
          taglineText:
            "You teach. We show you what they practice. You already know before they say hi.",
        }
      : {
          p1: "InBetween captures everything your coach teaches during a lesson and automatically turns it into personalised focus points so when you train alone, you always know exactly what to work on.",
          p2: "No more forgetting. No more wasted practice sessions. Just the corrections that matter, ready when you are.",
          taglineHtml: `Your coach <em style="font-style:italic; color:#F7F6F3;">teaches.</em> We capture every correction. You never forget.`,
          taglineText:
            "Your coach teaches. We capture every correction. You never forget.",
        };

  const text =
    `Welcome to InBetween.\n\n` +
    `You're ${rankLabel} on the waitlist.\n\n` +
    `${pitch.p1}\n\n` +
    `${pitch.p2}\n\n` +
    `${pitch.taglineText}\n\n` +
    `We're opening InBetween in small waves. The higher you are on the list, the sooner you get access. Every friend you invite bumps you 10 places.\n\n` +
    `Your link: ${referralUrl}\n\n` +
    `InBetween`;

  const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark">
<title>Welcome to InBetween</title>
<style>
body, table, td, a, p, h1, h2, h3, span { font-family: 'TT Travels Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif !important; }
a { color: #F0C24A; text-decoration: none; }
.btn:hover { background: #F0C24A !important; }
@media only screen and (max-width: 600px) {
  .container { width: 100% !important; }
  .px-48 { padding-left: 28px !important; padding-right: 28px !important; }
  .hero-title { font-size: 30px !important; line-height: 1.1 !important; }
  .rank-number { font-size: 64px !important; }
  .btn { display: block !important; padding: 16px 20px !important; }
}
</style>
</head>
<body style="margin:0; padding:0; background:#000000; color:#F7F6F3; -webkit-font-smoothing:antialiased;">
<div style="display:none; max-height:0; overflow:hidden; opacity:0; visibility:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#000;">
You're ${rankLabel} on the InBetween waitlist. Here's how to move up.
</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#000000;">
<tr><td align="center" style="padding: 24px 12px;">
<table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px; max-width:600px; background:#000000;">

<tr><td style="background:#1A1A1A; background-image: radial-gradient(130% 100% at 80% 115%, #6B5420 0%, #3A2F14 30%, #1A1A1A 65%, #000 90%); border-radius:14px 14px 0 0; padding:40px 48px 56px 48px;" class="px-48">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="left" style="font-size:18px; font-weight:600; color:#F7F6F3; letter-spacing:-0.01em;">InBetween</td>
<td align="right" style="font-size:11px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; color:#F0C24A;">— You're in</td>
</tr>
</table>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:48px;">
<tr><td class="hero-title" style="font-size:40px; font-weight:600; line-height:1.08; letter-spacing:-0.02em; color:#F7F6F3;">
Welcome to <span style="font-weight:600;">InBetween.</span>
</td></tr>
</table>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:44px;">
<tr><td style="font-size:11px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; color:#F0C24A; padding-bottom:12px;">
<span style="display:inline-block; width:18px; height:1px; background:#F0C24A; vertical-align:middle; margin-right:10px;"></span>Your rank
</td></tr>
<tr><td class="rank-number" style="font-size:84px; font-weight:600; line-height:1; letter-spacing:-0.03em; color:#F7F6F3; padding-bottom:10px;">${rankLabel}</td></tr>
<tr><td style="font-size:15px; color:rgba(247,246,243,0.65); padding-bottom:40px;">You're ${rankLabel} on the waitlist.</td></tr>
<tr><td style="border-top:1px solid rgba(255,255,255,0.10); padding-top:36px;">
<p style="font-size:16px; font-weight:300; line-height:1.65; color:rgba(247,246,243,0.85); margin:0 0 18px 0;">
${pitch.p1}
</p>
<p style="font-size:16px; font-weight:300; line-height:1.65; color:rgba(247,246,243,0.85); margin:0;">
${pitch.p2}
</p>
</td></tr>
</table>
</td></tr>

<tr><td style="background:#000000; padding:56px 48px 16px 48px;" class="px-48">
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
<tr><td style="font-size:11px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; color:#F0C24A;">
<span style="display:inline-block; width:18px; height:1px; background:#F0C24A; vertical-align:middle; margin-right:10px;"></span>What's next
</td></tr>
</table>
<h2 style="font-size:26px; font-weight:600; line-height:1.2; letter-spacing:-0.01em; color:#F7F6F3; margin:18px 0 28px 0;">
Three things, in order.
</h2>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td valign="top" width="44" style="padding:14px 0;">
<div style="font-size:14px; font-weight:600; color:#0A0A0A; background:#F0C24A; width:30px; height:30px; line-height:30px; text-align:center; border-radius:999px;">1</div>
</td>
<td valign="top" style="padding:14px 0 14px 14px; border-bottom:1px solid rgba(255,255,255,0.10);">
<div style="font-size:17px; font-weight:500; color:#F7F6F3; margin-bottom:4px;">Your spot is saved.</div>
<div style="font-size:14px; font-weight:300; color:rgba(247,246,243,0.65); line-height:1.55;">No need to refresh the page. We'll remember.</div>
</td>
</tr>
<tr>
<td valign="top" width="44" style="padding:18px 0;">
<div style="font-size:14px; font-weight:500; color:#F7F6F3; background:transparent; border:1px solid rgba(255,255,255,0.22); width:28px; height:28px; line-height:26px; text-align:center; border-radius:999px;">2</div>
</td>
<td valign="top" style="padding:18px 0 18px 14px; border-bottom:1px solid rgba(255,255,255,0.10);">
<div style="font-size:17px; font-weight:500; color:#F7F6F3; margin-bottom:4px;">Early access, in waves.</div>
<div style="font-size:14px; font-weight:300; color:rgba(247,246,243,0.65); line-height:1.55;">We invite small groups of coaches and dancers first. You'll hear from us with an invite link when it's your turn.</div>
</td>
</tr>
<tr>
<td valign="top" width="44" style="padding:18px 0;">
<div style="font-size:14px; font-weight:500; color:#F7F6F3; background:transparent; border:1px solid rgba(255,255,255,0.22); width:28px; height:28px; line-height:26px; text-align:center; border-radius:999px;">3</div>
</td>
<td valign="top" style="padding:18px 0 4px 14px;">
<div style="font-size:17px; font-weight:500; color:#F7F6F3; margin-bottom:4px;">Jump the line.</div>
<div style="font-size:14px; font-weight:300; color:rgba(247,246,243,0.65); line-height:1.55;">Send this to a coach or a training partner. Referrals move you up the list.</div>
</td>
</tr>
</table>
</td></tr>

<tr><td style="background:#000000; padding:56px 48px 16px 48px;" class="px-48">
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
<tr><td style="font-size:11px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; color:#F0C24A;">
<span style="display:inline-block; width:18px; height:1px; background:#F0C24A; vertical-align:middle; margin-right:10px;"></span>Move up the list
</td></tr>
</table>
<p style="font-size:16px; font-weight:300; line-height:1.65; color:rgba(247,246,243,0.82); margin:18px 0 12px 0;">
We're opening InBetween in small waves. Not everyone gets in at once. The higher you are on the list, the sooner you get access.
</p>
<h2 style="font-size:22px; font-weight:600; line-height:1.25; letter-spacing:-0.01em; color:#F7F6F3; margin:20px 0 28px 0;">
Every friend you invite bumps you 10 places.
</h2>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:rgba(247,246,243,0.05); border:1px solid rgba(255,255,255,0.10); border-radius:10px;">
<tr><td style="padding:18px 20px;">
<div style="font-size:11px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; color:rgba(247,246,243,0.5); margin-bottom:6px;">Your referral link</div>
<div style="font-family:ui-monospace, Menlo, Consolas, monospace; font-size:14px; color:#F0C24A; word-break:break-all;">${escapeHtml(referralUrl)}</div>
</td></tr>
</table>
</td></tr>

<tr><td align="center" style="background:#000000; padding:24px 48px 8px 48px;" class="px-48">
<a href="${escapeHtml(referralUrl)}" class="btn" style="display:inline-block; font-size:15px; font-weight:600; letter-spacing:0.01em; color:#0A0A0A; background:#E8B530; padding:16px 36px; border-radius:999px; text-decoration:none; text-align:center; box-shadow: 0 0 0 1px rgba(232,181,48,.35), 0 12px 40px -10px rgba(232,181,48,.35);">Open your rank page →</a>
</td></tr>

<tr><td style="background:#000000; padding:48px 48px 8px 48px;" class="px-48">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid rgba(255,255,255,0.10);">
<tr><td style="padding-top:40px;">
<p style="font-size:16px; font-weight:300; line-height:1.65; color:rgba(247,246,243,0.78); margin:0 0 16px 0;">
${pitch.taglineHtml}
</p>
<p style="font-size:16px; font-weight:300; line-height:1.65; color:rgba(247,246,243,0.78); margin:0;">
We only email when it matters. No noise.
</p>
</td></tr>
</table>
</td></tr>

<tr><td style="background:#000000; padding:56px 48px 40px 48px;" class="px-48">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="left" style="font-size:13px; color:rgba(247,246,243,0.45); line-height:1.6;">
&copy; InBetween 2026<br>
<a href="mailto:hello@useinbetween.com" style="color:rgba(247,246,243,0.6); text-decoration:none;">hello@useinbetween.com</a>
</td>
<td align="right" style="font-size:12px; color:rgba(247,246,243,0.4);">
<a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:rgba(247,246,243,0.5); text-decoration:underline; text-underline-offset:3px;">Unsubscribe</a>
</td>
</tr>
</table>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;

  return { html, text, subject };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
