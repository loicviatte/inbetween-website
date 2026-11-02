-- InBetween waitlist schema
-- Run this once in your Supabase SQL editor.

create extension if not exists "pgcrypto";

create table if not exists public.waitlist (
  id             uuid primary key default gen_random_uuid(),
  email          text not null unique,
  role           text not null check (role in ('coach','dancer')),
  referral_code  text not null unique,
  referred_by    text references public.waitlist(referral_code) on delete set null,
  created_at     timestamptz not null default now()
);

create index if not exists waitlist_created_at_idx on public.waitlist (created_at);
create index if not exists waitlist_referred_by_idx on public.waitlist (referred_by);

-- RLS: nobody reads/writes directly from the client.
-- All access goes through the server (service_role key) in Next.js route handlers.
alter table public.waitlist enable row level security;

-- No policies = deny all for anon & authenticated. Service role bypasses RLS.

-- Partner attribution (Nov 2026). Run once in the Supabase SQL editor.
-- `source` = where the signup came from, e.g. btr, btr_yt (null = direct).
alter table public.waitlist add column if not exists source text;
create index if not exists waitlist_source_idx on public.waitlist (source);

-- Clicks on partner short links (e.g. useinbetween.com/btr), to report
-- clicks -> signups to the partner. Server-only, like `waitlist`.
create table if not exists public.link_clicks (
  id          bigint generated always as identity primary key,
  slug        text not null,
  source      text not null,
  created_at  timestamptz not null default now()
);
create index if not exists link_clicks_slug_idx on public.link_clicks (slug, created_at);
alter table public.link_clicks enable row level security;
