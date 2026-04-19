import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";
import { generateReferralCode } from "@/lib/referral-code";
import { getStatusByCode } from "@/lib/rank";
import { renderWelcomeEmail } from "@/lib/welcome-email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_ROLES = new Set(["coach", "dancer"]);
const MAX_CODE_ATTEMPTS = 5;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const record =
    typeof body === "object" && body !== null
      ? (body as Record<string, unknown>)
      : {};
  const email = String(record.email ?? "").trim().toLowerCase();
  const role = String(record.role ?? "").trim().toLowerCase();
  const refRaw = record.ref != null ? String(record.ref).trim() : "";
  const ref = refRaw && /^[A-Z0-9]{8}$/.test(refRaw) ? refRaw : null;

  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }
  if (!VALID_ROLES.has(role)) {
    return NextResponse.json(
      { error: "Pick one — coach or dancer." },
      { status: 400 }
    );
  }

  const supabase = getSupabaseAdmin();

  const { data: existing } = await supabase
    .from("waitlist")
    .select("referral_code")
    .eq("email", email)
    .maybeSingle();

  if (existing?.referral_code) {
    return NextResponse.json({ ok: true, code: existing.referral_code });
  }

  let validRef: string | null = null;
  if (ref) {
    const { data: referrer } = await supabase
      .from("waitlist")
      .select("referral_code")
      .eq("referral_code", ref)
      .maybeSingle();
    validRef = referrer?.referral_code ?? null;
  }

  let insertedCode: string | null = null;
  for (let attempt = 0; attempt < MAX_CODE_ATTEMPTS; attempt++) {
    const code = generateReferralCode();
    const { error } = await supabase.from("waitlist").insert({
      email,
      role,
      referral_code: code,
      referred_by: validRef,
    });
    if (!error) {
      insertedCode = code;
      break;
    }
    const pgCode = (error as { code?: string }).code;
    if (pgCode === "23505") {
      const msg = (error as { message?: string }).message ?? "";
      if (msg.includes("email")) {
        const { data: race } = await supabase
          .from("waitlist")
          .select("referral_code")
          .eq("email", email)
          .maybeSingle();
        if (race?.referral_code) {
          return NextResponse.json({ ok: true, code: race.referral_code });
        }
      }
      continue;
    }
    console.error("[waitlist] Insert error:", error);
    return NextResponse.json(
      { error: "Could not join the waitlist. Try again." },
      { status: 500 }
    );
  }

  if (!insertedCode) {
    return NextResponse.json(
      { error: "Could not join the waitlist. Try again." },
      { status: 500 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const resend = new Resend(apiKey);
    const coachSegmentId = process.env.RESEND_SEGMENT_COACH_ID;
    const dancerSegmentId = process.env.RESEND_SEGMENT_DANCER_ID;
    const segmentId = role === "coach" ? coachSegmentId : dancerSegmentId;
    const segments = segmentId ? [{ id: segmentId }] : undefined;

    try {
      const { error: contactError } = await resend.contacts.create({
        email,
        unsubscribed: false,
        segments,
      });
      if (contactError) {
        console.error("[waitlist] Resend contact error:", contactError);
      }
    } catch (err) {
      console.error("[waitlist] Resend contact threw:", err);
    }

    const status = await getStatusByCode(insertedCode);
    const origin = originFromRequest(request);
    const referralUrl = `${origin}/waitlist/${insertedCode}`;
    const { html, text, subject } = renderWelcomeEmail({
      referralUrl,
      rank: status?.rank ?? 1,
      role: role as "coach" | "dancer",
    });

    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM ?? "InBetween <hello@useinbetween.com>",
        to: email,
        subject,
        html,
        text,
      });
    } catch (err) {
      console.error("[waitlist] Resend send error:", err);
    }
  } else {
    console.log("[waitlist] signup (no Resend configured):", {
      email,
      role,
      code: insertedCode,
    });
  }

  return NextResponse.json({ ok: true, code: insertedCode });
}

function originFromRequest(req: Request): string {
  const envOrigin = process.env.NEXT_PUBLIC_SITE_URL;
  if (envOrigin) return envOrigin.replace(/\/$/, "");
  try {
    return new URL(req.url).origin;
  } catch {
    return "https://useinbetween.com";
  }
}
