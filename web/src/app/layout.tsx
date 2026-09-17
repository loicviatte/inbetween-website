import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { SiteAnalytics } from "@/components/SiteAnalytics";
import "./globals.css";

// Syne — variable font (weights 400–800). Regular (400) for body,
// Bold (700) for display. Self-hosted at build time by next/font.
const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const DESCRIPTION =
  "Your coach teaches. We capture every correction. You never forget. Get personalised focus points after every lesson so you always know exactly what to train — built for Latin & Ballroom.";

export const metadata: Metadata = {
  metadataBase: new URL("https://useinbetween.com"),
  title: "InBetween — Join the waitlist",
  description: DESCRIPTION,
  icons: { icon: "/favicon-icon.png" },
  openGraph: {
    type: "website",
    siteName: "InBetween",
    url: "https://useinbetween.com",
    title: "InBetween — Never forget what your coach told you",
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "InBetween — Never forget what your coach told you",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={syne.variable}>
      <body suppressHydrationWarning>
        {children}
        <SiteAnalytics />
      </body>
    </html>
  );
}
