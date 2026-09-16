import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Sets a new password from the link in the "Reset your password" email.
// The token is only spent here, on submit — never when the page loads — so
// mail scanners that open links ahead of the reader can't burn it.

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
  const password = String(record.password ?? "");

  if (!tokenHash || tokenHash.length > 256) {
    return NextResponse.json({ error: "invalid_link" }, { status: 400 });
  }
  if (password.length < 6) {
    return NextResponse.json({ error: "too_short" }, { status: 400 });
  }
  if (password.length > 72) {
    return NextResponse.json({ error: "too_long" }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("[reset-password] missing Supabase env");
    return NextResponse.json({ error: "server" }, { status: 500 });
  }

  // A fresh client per request: verifying the link signs this client in as
  // the dancer, and the shared admin client must never carry a user session.
  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });

  const { data, error } = await supabase.auth.verifyOtp({
    token_hash: tokenHash,
    type: "recovery",
  });
  if (error || !data.session) {
    return NextResponse.json({ error: "expired" }, { status: 410 });
  }

  const { error: updateError } = await supabase.auth.updateUser({ password });
  // Drop the one-off session the link opened; the dancer signs in from the app.
  await supabase.auth.signOut({ scope: "local" }).catch(() => {});

  if (updateError) {
    if (updateError.code === "same_password") {
      return NextResponse.json({ error: "same_password" }, { status: 422 });
    }
    if (updateError.code === "weak_password") {
      return NextResponse.json({ error: "weak_password" }, { status: 422 });
    }
    console.error("[reset-password] update failed:", updateError.code, updateError.message);
    return NextResponse.json({ error: "server" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
