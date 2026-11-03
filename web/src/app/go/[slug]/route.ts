import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { GO_LINKS } from "@/lib/source";

// Counted outbound link: /go/<slug>?c=<channel> -> GO_LINKS[slug].
// The click is stored in `link_clicks` (slug, source = slug[_channel]).
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const target = GO_LINKS[slug];
  if (!target) {
    return NextResponse.redirect(new URL("/", request.url), 307);
  }

  const channel = (new URL(request.url).searchParams.get("c") ?? "").toLowerCase();
  const source = /^[a-z0-9]{1,12}$/.test(channel) ? `${slug}_${channel}` : slug;

  try {
    await getSupabaseAdmin().from("link_clicks").insert({ slug, source });
  } catch {
    // Counting is optional: never block the redirect.
  }

  return NextResponse.redirect(target, 307);
}
