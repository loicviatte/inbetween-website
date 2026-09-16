import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ResetPasswordForm } from "./ResetPasswordForm";

export const metadata: Metadata = {
  title: "Reset your password — InBetween",
  robots: { index: false, follow: false },
};

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { token_hash: raw } = await searchParams;
  const tokenHash = typeof raw === "string" ? raw : "";

  return (
    <div className="reset-page">
      <header className="reset-header">
        <Link href="/" className="reset-logo" aria-label="InBetween — home">
          <Image
            src="/images/logo-lockup-white.png"
            alt="InBetween"
            width={3389}
            height={463}
            priority
          />
        </Link>
      </header>

      <main className="reset-main">
        <ResetPasswordForm tokenHash={tokenHash} />
      </main>

      <style>{`
        .reset-page {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          position: relative;
          background: #000;
          overflow: clip;
        }
        .reset-page::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 520px;
          background: radial-gradient(120% 100% at 82% 0%, rgba(107, 84, 32, 0.42) 0%, rgba(58, 47, 20, 0.2) 32%, transparent 72%);
          pointer-events: none;
        }
        .reset-header {
          position: relative;
          z-index: 1;
          padding: 32px 48px;
        }
        .reset-logo {
          display: inline-flex;
        }
        .reset-logo img {
          height: 26px;
          width: auto;
        }
        .reset-main {
          position: relative;
          z-index: 1;
          flex: 1;
          display: flex;
          justify-content: center;
          padding: 72px 24px 96px;
        }
        @media (max-width: 768px) {
          .reset-header {
            padding: 24px;
          }
          .reset-main {
            padding: 40px 24px 72px;
          }
        }
      `}</style>
    </div>
  );
}
