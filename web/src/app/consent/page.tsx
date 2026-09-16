import type { Metadata } from "next";
import { AuthShell } from "@/components/AuthShell";
import { ConsentFlow } from "./ConsentFlow";

export const metadata: Metadata = {
  title: "Parent permission — InBetween",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default async function ConsentPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { token: raw } = await searchParams;
  const token = typeof raw === "string" ? raw : "";

  return (
    <AuthShell>
      <ConsentFlow initialToken={token} />
    </AuthShell>
  );
}
