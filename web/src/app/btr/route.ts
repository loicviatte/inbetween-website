import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

// useinbetween.com/btr  -> the spoken link in the Break The Routine podcast.
// useinbetween.com/btr?c=yt (or ig, sp, tt…) -> the same link per channel.
// Redirects to the home page with ?src=btr[_channel] so the waitlist forms can
// attribute the signup. Each visit is also counted (best effort) so we can
// report clicks -> signups to the partner.
export async function GET(request: Request) {
  const url = new URL(request.url);
  const channel = (url.searchParams.get("c") ?? "").toLowerCase();
  const src = /^[a-z0-9]{1,12}$/.test(channel) ? `btr_${channel}` : "btr";

  try {
    await getSupabaseAdmin()
      .from("link_clicks")
      .insert({ slug: "btr", source: src });
  } catch {
    // Counting is optional: never block the redirect.
  }

  const dest = new URL("/", url);
  dest.searchParams.set("src", src);
  return NextResponse.redirect(dest, 307);
}
