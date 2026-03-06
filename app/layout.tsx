import type { Metadata } from "next";
import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import "./globals.css";
import { PostHogProvider } from "./providers/PostHogProvider";

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The 3 Best Paid Survey Sites Tested in 2026 - TopSurveyRewards",
  description: "We tested over 15 survey panels to identify the 3 best platforms to earn extra cash in your spare time. Independent reviews, honest ratings.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="delegate-ch" content="sec-ch-ua https://k7xlm.bemobtrcks.com; sec-ch-ua-mobile https://k7xlm.bemobtrcks.com; sec-ch-ua-arch https://k7xlm.bemobtrcks.com; sec-ch-ua-model https://k7xlm.bemobtrcks.com; sec-ch-ua-platform https://k7xlm.bemobtrcks.com; sec-ch-ua-platform-version https://k7xlm.bemobtrcks.com; sec-ch-ua-bitness https://k7xlm.bemobtrcks.com; sec-ch-ua-full-version-list https://k7xlm.bemobtrcks.com; sec-ch-ua-full-version https://k7xlm.bemobtrcks.com" />
      </head>
      <body
        className={`${bodyFont.variable} ${headingFont.variable} bg-white font-body text-zinc-900 antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17986101954"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17986101954');
          `}
        </Script>
        <Script id="bemob-callback" strategy="beforeInteractive">
          {`
            function bemobCb(params) {
                var t = params.trackingDomain+'/click/';
                var re = new RegExp(t+'?(\\\\d*)');
                var e = document.querySelectorAll('a[href*="'+t+'"]');
                for (var i = 0; i < e.length; i++) {
                    var ex = re.exec(e[i].href);
                    if (ex) {
                        e[i].href = params.ctaSecureUrl.replace('%%OFFER_NUMBER%%', ex || 1);
                    }
                }
            }
          `}
        </Script>
        <Script id="bemob-tracking" strategy="beforeInteractive">
          {`
            !function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://k7xlm.bemobtrcks.com/landing/d6380a30-9c5a-4296-82bf-518555e9938e?callback=bemobCb&rule=1&path=1&landing=1&"+window.location.search.substring(1);var b=document.getElementsByTagName("script");b.parentNode.insertBefore(a,b)}();
          `}
        </Script>
        <noscript>
          <img src="https://k7xlm.bemobtrcks.com/landing/d6380a30-9c5a-4296-82bf-518555e9938e?rule=1&path=1&landing=1" alt="" />
        </noscript>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
