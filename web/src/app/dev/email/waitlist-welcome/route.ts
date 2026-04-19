import { NextResponse } from "next/server";
import { renderWelcomeEmail } from "@/lib/welcome-email";

// Dev-only preview of the waitlist welcome email.
// Query params: ?rank=247&url=https://useinbetween.com/waitlist/ABC12345

export async function GET(request: Request) {
  if (process.env.NODE_ENV === "production") {
    return new NextResponse("Not found", { status: 404 });
  }

  const { searchParams } = new URL(request.url);
  const rank = Math.max(1, Number(searchParams.get("rank") ?? "247"));
  const referralUrl =
    searchParams.get("url") ?? "https://useinbetween.com/waitlist/2AGBKEQW";
  const role = searchParams.get("role") === "coach" ? "coach" : "dancer";

  const { html } = renderWelcomeEmail({ referralUrl, rank, role });

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
