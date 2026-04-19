"use client";

import { useState } from "react";

export function RankClient({
  referralUrl,
  referrals,
}: {
  referralUrl: string;
  referrals: number;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(referralUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback: select via a hidden input. Not implemented — modern
      // browsers support clipboard on https / localhost.
    }
  }

  const shareText = encodeURIComponent(
    `I just joined the InBetween waitlist — a quieter tool for dancers and coaches. Join through my link:`
  );
  const shareUrl = encodeURIComponent(referralUrl);

  return (
    <div className="share">
      <div className="link-box">
        <span className="link-text" title={referralUrl}>
          {referralUrl.replace(/^https?:\/\//, "")}
        </span>
        <button
          type="button"
          className="copy-btn"
          onClick={copy}
          aria-label="Copy referral link"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <div className="share-row">
        <a
          className="share-btn"
          href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <a
          className="share-btn"
          href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          X / Twitter
        </a>
        <a
          className="share-btn"
          href={`mailto:?subject=${encodeURIComponent(
            "Join me on the InBetween waitlist"
          )}&body=${shareText}%20${shareUrl}`}
        >
          Email
        </a>
      </div>

      {referrals === 0 && (
        <p className="hint">
          No friends yet — share the link to start climbing.
        </p>
      )}

      <style>{`
        .share {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 14px;
        }
        .link-box {
          display: flex;
          align-items: center;
          gap: 8px;
          height: 56px;
          padding: 4px 4px 4px 20px;
          background: rgba(247, 246, 243, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          transition: border-color 150ms var(--ease-out), background 150ms var(--ease-out);
        }
        .link-box:hover {
          background: rgba(247, 246, 243, 0.09);
        }
        .link-text {
          flex: 1;
          min-width: 0;
          font-family: ui-monospace, "JetBrains Mono", Menlo, Consolas, monospace;
          font-size: 13px;
          color: var(--gold-400);
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-right: 4px;
        }
        .copy-btn {
          height: 48px;
          padding: 0 22px;
          background: var(--gold-500);
          color: var(--ink-950);
          border: 0;
          border-radius: 999px;
          font-family: inherit;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 150ms var(--ease-out);
          box-shadow:
            0 0 0 1px rgba(232, 181, 48, 0.35),
            0 4px 16px -4px rgba(232, 181, 48, 0.4);
          flex-shrink: 0;
          min-width: 92px;
        }
        .copy-btn:hover {
          background: var(--gold-400);
          transform: translateY(-1px);
        }
        .copy-btn:active {
          transform: scale(0.98);
        }

        .share-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 8px;
        }
        .share-btn {
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 500;
          color: rgba(247, 246, 243, 0.75);
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          text-decoration: none;
          transition: all 150ms var(--ease-out);
        }
        .share-btn:hover {
          color: var(--ink-50);
          border-color: rgba(255, 255, 255, 0.25);
          background: rgba(247, 246, 243, 0.04);
        }

        .hint {
          font-size: 13px;
          color: rgba(247, 246, 243, 0.4);
          margin: 4px 0 0;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
