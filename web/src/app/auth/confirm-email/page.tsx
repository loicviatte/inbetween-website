import type { Metadata } from "next";
import { AuthShell } from "@/components/AuthShell";
import { ConfirmEmailForm } from "./ConfirmEmailForm";

export const metadata: Metadata = {
  title: "Confirm your new email — InBetween",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default async function ConfirmEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { token_hash: raw } = await searchParams;
  const tokenHash = typeof raw === "string" ? raw : "";

  return (
    <AuthShell>
      <ConfirmEmailForm tokenHash={tokenHash} />
    </AuthShell>
  );
}
