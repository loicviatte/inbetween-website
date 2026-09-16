import type { Metadata } from "next";
import { AuthShell } from "@/components/AuthShell";
import { ConfirmAgeForm } from "./ConfirmAgeForm";

export const metadata: Metadata = {
  title: "Confirm you’re 18 or over — InBetween",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default async function ConfirmAgePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { token: raw } = await searchParams;
  const token = typeof raw === "string" ? raw : "";

  return (
    <AuthShell>
      <ConfirmAgeForm token={token} />
    </AuthShell>
  );
}
