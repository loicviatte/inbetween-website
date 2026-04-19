import { notFound } from "next/navigation";
import Image from "next/image";
import { getStatusByCode } from "@/lib/rank";
import { RankClient } from "./RankClient";

// Next 16: route params are async.
type Params = { params: Promise<{ code: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Params) {
  const { code } = await params;
  return {
    title: `You're on the InBetween waitlist — ${code}`,
    description:
      "Your spot on the InBetween waitlist. Share your link to move up the list.",
    robots: { index: false, follow: false },
  };
}

export default async function WaitlistRankPage({ params }: Params) {
  const { code } = await params;
  if (!/^[A-Z0-9]{8}$/.test(code)) notFound();

  const status = await getStatusByCode(code);
  if (!status) notFound();

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://useinbetween.com";
  const referralUrl = `${siteUrl}/?ref=${status.code}`;

  return (
    <div className="page">
      <header className="site-header">
        <div className="logo">
          <Image
            src="/images/logo-transparent.png"
            alt="InBetween"
            width={32}
            height={32}
            priority
          />
          <span>InBetween</span>
        </div>
      </header>

      <main className="rank-main">
        <section className="rank">
          <p className="eyebrow">
            <span className="eyebrow-dash" aria-hidden="true" />
            You&rsquo;re on the list
          </p>

          <p className="rank-label">Your rank</p>
          <p className="rank-number">
            #{status.rank.toLocaleString("en")}
          </p>
          <p className="rank-total">
            of {status.totalSignups.toLocaleString("en")}{" "}
            {status.role === "coach" ? "coaches & dancers" : "dancers & coaches"}
          </p>

          <div className="divider" />

          <h1 className="headline">
            Every friend bumps you{" "}
            <span className="gold">10 places.</span>
          </h1>
          <p className="sub">
            Share your link. When someone joins through it, you move up. We
            invite the top of the list first.
          </p>

          <RankClient referralUrl={referralUrl} referrals={status.referrals} />

          <div className="stats">
            <div className="stat">
              <div className="stat-value">{status.referrals}</div>
              <div className="stat-label">Friends joined</div>
            </div>
            <div className="stat">
              <div className="stat-value">
                {(status.referrals * 10).toLocaleString("en")}
              </div>
              <div className="stat-label">Places climbed</div>
            </div>
          </div>
        </section>
      </main>

      <footer>© InBetween 2026</footer>

      <style>{`
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          background: radial-gradient(130% 100% at 80% 115%, #6B5420 0%, #3A2F14 30%, #1A1A1A 65%, #000 90%);
          overflow: clip;
        }
        .page::before {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--grain-url);
          background-size: 220px;
          opacity: 0.35;
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        .site-header {
          position: relative;
          z-index: 10;
          padding: 32px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 20px;
          font-weight: 600;
          color: var(--ink-50);
          letter-spacing: -0.01em;
        }
        .logo img {
          height: 28px;
          width: auto;
          border-radius: 6px;
        }

        .rank-main {
          position: relative;
          z-index: 5;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 24px 80px;
        }
        .rank {
          width: 100%;
          max-width: 560px;
          text-align: center;
        }

        .eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold-400);
          margin: 0 0 36px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .eyebrow-dash {
          width: 18px;
          height: 1px;
          background: currentColor;
          display: inline-block;
        }

        .rank-label {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(247, 246, 243, 0.55);
          margin: 0 0 12px;
        }
        .rank-number {
          font-size: clamp(88px, 16vw, 160px);
          font-weight: 600;
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: var(--ink-50);
          margin: 0 0 12px;
          background: linear-gradient(135deg, var(--gold-300) 0%, var(--gold-500) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .rank-total {
          font-size: 14px;
          color: rgba(247, 246, 243, 0.5);
          margin: 0 0 48px;
        }

        .divider {
          width: 40px;
          height: 1px;
          background: rgba(255, 255, 255, 0.15);
          margin: 0 auto 48px;
        }

        .headline {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--ink-50);
          margin: 0 0 16px;
        }
        .headline .gold {
          font-weight: 300;
          letter-spacing: 0.01em;
          color: var(--gold-400);
        }
        .sub {
          font-size: 16px;
          font-weight: 300;
          color: rgba(247, 246, 243, 0.7);
          line-height: 1.6;
          margin: 0 auto 36px;
          max-width: 440px;
        }

        .stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 48px;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .stat {
          padding: 20px;
          background: rgba(247, 246, 243, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
        }
        .stat-value {
          font-size: 36px;
          font-weight: 600;
          color: var(--ink-50);
          line-height: 1;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
        }
        .stat-label {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(247, 246, 243, 0.45);
        }

        footer {
          position: relative;
          z-index: 10;
          padding: 32px 48px;
          text-align: center;
          font-size: 13px;
          color: rgba(247, 246, 243, 0.4);
        }

        @media (max-width: 768px) {
          .site-header, footer { padding-left: 24px; padding-right: 24px; }
        }
      `}</style>
    </div>
  );
}
