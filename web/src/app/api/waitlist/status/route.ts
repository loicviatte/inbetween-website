import { NextResponse } from "next/server";
import { getStatusByCode } from "@/lib/rank";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = (searchParams.get("code") ?? "").trim();

  if (!/^[A-Z0-9]{8}$/.test(code)) {
    return NextResponse.json({ error: "Invalid code." }, { status: 400 });
  }

  try {
    const status = await getStatusByCode(code);
    if (!status) {
      return NextResponse.json({ error: "Not found." }, { status: 404 });
    }
    // Don't leak email over this endpoint — rank page shows it via SSR only.
    const { email: _email, ...safe } = status;
    void _email;
    return NextResponse.json(safe);
  } catch (err) {
    console.error("[waitlist/status] error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
