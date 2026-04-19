import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ttTravelsNext = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    { path: "./fonts/TTTravelsNext-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/TTTravelsNext-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/TTTravelsNext-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/TTTravelsNext-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/TTTravelsNext-DemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/TTTravelsNext-DemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./fonts/TTTravelsNext-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "InBetween — Join the waitlist",
  description:
    "Your coach teaches. We capture every correction. You never forget. Get personalised focus points after every lesson so you always know exactly what to train.",
  icons: { icon: "/favicon-icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={ttTravelsNext.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
