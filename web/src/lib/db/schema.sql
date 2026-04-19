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
