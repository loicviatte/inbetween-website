import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Confirms an email change requested from the app's Account sheet. As with
// the password reset, the token is only spent on submit, never on page load.

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const record =
    typeof body === "object" && body !== null
      ? (body as Record<string, unknown>)
      : {};
  const tokenHash = String(record.token_hash ?? "").trim();
  if (!tokenHash || tokenHash.length > 256) {
    return NextResponse.json({ error: "invalid_link" }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("[confirm-email] missing Supabase env");
    return NextResponse.json({ error: "server" }, { status: 500 });
  }

  // Fresh client per request — verifying signs it in as the dancer.
  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });

  const { data, error } = await supabase.auth.verifyOtp({
    token_hash: tokenHash,
    type: "email_change",
  });
  if (error || !data.user) {
    return NextResponse.json({ error: "expired" }, { status: 410 });
  }
  if (data.session) {
    await supabase.auth.signOut({ scope: "local" }).catch(() => {});
  }

  return NextResponse.json({ ok: true, email: data.user.email ?? null });
}
