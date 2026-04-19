# InBetween — Waitlist

Next.js 16 + React 19 waitlist site for InBetween.

## Local dev

```bash
npm run dev
```

Open http://localhost:3000

Without env vars, form submissions succeed but emails are only logged to the console (nothing stored). See **Resend setup** below to store emails.

## Resend setup (free, no DB)

1. Create an account at https://resend.com (free tier: 100 emails/day, unlimited contacts).
2. In **Audiences**, create a new audience (e.g. "InBetween Waitlist"). Copy the Audience ID.
3. In **API Keys**, create a key with "Full access" or "Contacts: full". Copy the key.
4. Copy `.env.example` to `.env.local` and fill it in:

```
RESEND_API_KEY=re_xxx
RESEND_AUDIENCE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

5. Restart `npm run dev`. Signups now land in your Resend audience.

## Deploy to Vercel (free)

1. Push this `web/` folder to a new GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. In **Environment Variables**, add `RESEND_API_KEY` and `RESEND_AUDIENCE_ID`.
4. Click **Deploy**. You get a free `*.vercel.app` URL immediately.

### Custom domain

- Vercel project → **Settings** → **Domains** → add your domain.
- Buy a domain on any registrar (Namecheap, Porkbun, OVH…) or directly on Vercel.
- Vercel gives you the DNS records to point at it — paste them at your registrar. Done.

## What's here

- `src/app/page.tsx` — waitlist page
- `src/components/WaitlistHero.tsx` — hero, rotating word, form
- `src/components/PhoneMockup.tsx` — 3D-tilted iPhone mockup with glow
- `src/app/api/waitlist/route.ts` — POST endpoint that writes to Resend audience
- `src/app/fonts/` — TT Travels Next (Trial — replace with licensed files before production)
- `public/images/` — logo + app screenshot

## Notes

- Fonts are **Trial** versions from the handoff — confirm the TT Travels Next license before production launch.
- `hello@inbetween.app` in the header is a placeholder — update in `src/app/page.tsx`.
