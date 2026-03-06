"use client";

import { useState } from "react";
import { usePostHog } from "posthog-js/react";

interface ConversionButtonProps {
  url: string;
  isPrimary?: boolean;
  trackConversion?: boolean;
  children: React.ReactNode;
  offerName?: string;
  position?: string;
}

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params: {
        send_to: string;
        value: number;
        currency: string;
        event_callback?: () => void;
      }
    ) => void;
  }
}

export default function ConversionButton({
  url,
  isPrimary = false,
  trackConversion = false,
  children,
  offerName,
  position,
}: ConversionButtonProps) {
  const [isTracking, setIsTracking] = useState(false);
  const posthog = usePostHog();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Track CTA click with PostHog
    if (offerName && position) {
      posthog.capture('cta_button_clicked', {
        offer_name: offerName,
        position: position,
      });
    }

    // Track conversion with Google Ads for primary offer
    if (trackConversion && typeof window !== "undefined" && window.gtag) {
      try {
        window.gtag("event", "conversion", {
          send_to: "AW-17979730701/2tBNCPLAgIEcEI3Ws_1C",
          value: 1.0,
          currency: "USD",
        });
      } catch (error) {
        console.error("Conversion tracking error:", error);
      }
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="relative rounded-xl px-6 sm:px-8 py-4 sm:py-5 text-center font-extrabold uppercase tracking-wider text-white shadow-[0_4px_14px_0_rgba(0,0,0,0.25)] transition-all duration-200 w-full overflow-hidden inline-block bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 hover:shadow-[0_6px_20px_0_rgba(249,115,22,0.5)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_2px_8px_0_rgba(0,0,0,0.2)] text-base sm:text-lg md:text-xl before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none"
      style={{
        letterSpacing: '0.05em',
      }}
    >
      {children}
    </a>
  );
}
