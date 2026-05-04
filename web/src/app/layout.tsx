import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const META_PIXEL_ID = "1289816079954533";

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
