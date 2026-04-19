import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_ROLES = new Set(["coach", "dancer"]);

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

  const apiKey = process.env.RESEND_API_KEY;
  const coachSegmentId = process.env.RESEND_SEGMENT_COACH_ID;
  const dancerSegmentId = process.env.RESEND_SEGMENT_DANCER_ID;

  if (!apiKey) {
    console.log("[waitlist] signup (no Resend configured):", { email, role });
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(apiKey);
  const segmentId = role === "coach" ? coachSegmentId : dancerSegmentId;
  const segments = segmentId ? [{ id: segmentId }] : undefined;

  try {
    const { error } = await resend.contacts.create({
      email,
      unsubscribed: false,
      properties: { role },
      segments,
    });

    if (error) {
      const name = (error as { name?: string }).name ?? "";
      // Already-exists errors are treated as success so re-signups don't
      // leak info about who's on the list.
      if (name === "validation_error" || name === "invalid_parameter") {
        return NextResponse.json({ ok: true });
      }
      console.error("[waitlist] Resend error:", error);
      return NextResponse.json(
        { error: "Could not join the waitlist. Try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[waitlist] Unexpected error:", err);
    return NextResponse.json(
      { error: "Could not join the waitlist. Try again." },
      { status: 500 }
    );
  }
}
