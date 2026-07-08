import { ImageResponse } from "next/og";

// Branded Open Graph / Twitter card, generated at build time.
export const alt = "InBetween — Never forget what your coach told you.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const syne = await fetch(
    "https://cdn.jsdelivr.net/npm/@fontsource/syne@5.0.18/files/syne-latin-700-normal.woff",
  ).then((r) => r.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px",
          fontFamily: "Syne",
          background:
            "radial-gradient(130% 100% at 80% 115%, #6B5420 0%, #3A2F14 30%, #1A1A1A 65%, #000 90%)",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: "0.3em", color: "#F0C24A", marginBottom: 44 }}>
          INBETWEEN
        </div>
        <div style={{ fontSize: 64, color: "#ffffff", lineHeight: 1.12, maxWidth: 960 }}>
          Never forget what your coach told you.
        </div>
        <div style={{ fontSize: 42, color: "#F0C24A", marginTop: 28 }}>
          Start training intentionally.
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Syne", data: syne, weight: 700, style: "normal" }] },
  );
}
