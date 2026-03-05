import type { Metadata } from "next";
import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import "./globals.css";

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
  title: "5 Meilleurs Vidéoprojecteurs Testés 2026 - AVIS CONSO",
  description: "Nous avons testé plus de 30 modèles pour identifier les 5 meilleurs vidéoprojecteurs de 2026. Guide d'achat complet avec avis d'experts et comparatifs.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} bg-white font-body text-zinc-900 antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17979730701"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17979730701');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
