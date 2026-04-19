import { getSupabaseAdmin } from "./supabase";

export type WaitlistStatus = {
  code: string;
  email: string;
  role: "coach" | "dancer";
  rank: number;
  totalSignups: number;
  referrals: number;
  createdAt: string;
};

// Rank rule: base position = signup order (1 = first). Each successful
// referral subtracts REFERRAL_BOOST places, floored at 1.
const REFERRAL_BOOST = 10;

export async function getStatusByCode(
  code: string
): Promise<WaitlistStatus | null> {
  const supabase = getSupabaseAdmin();

  const { data: me, error: meErr } = await supabase
    .from("waitlist")
    .select("email, role, referral_code, created_at")
    .eq("referral_code", code)
    .maybeSingle();

  if (meErr || !me) return null;

  const [{ count: beforeCount }, { count: referralsCount }, { count: total }] =
    await Promise.all([
      supabase
        .from("waitlist")
        .select("*", { count: "exact", head: true })
        .lt("created_at", me.created_at),
      supabase
        .from("waitlist")
        .select("*", { count: "exact", head: true })
        .eq("referred_by", me.referral_code),
      supabase
        .from("waitlist")
        .select("*", { count: "exact", head: true }),
    ]);

  const basePosition = (beforeCount ?? 0) + 1;
  const referrals = referralsCount ?? 0;
  const rank = Math.max(1, basePosition - REFERRAL_BOOST * referrals);

  return {
    code: me.referral_code,
    email: me.email,
    role: me.role as "coach" | "dancer",
    rank,
    totalSignups: total ?? 0,
    referrals,
    createdAt: me.created_at,
  };
}
