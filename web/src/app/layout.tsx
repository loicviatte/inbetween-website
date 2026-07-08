import type { Metadata } from "next";
import Script from "next/script";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const META_PIXEL_ID = "1289816079954533";

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
        <Analytics />
        <SpeedInsights />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </body>
    </html>
  );
}
