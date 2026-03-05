"use client";

import { useState } from "react";

interface ConversionButtonProps {
  url: string;
  isNexgear?: boolean;
  trackConversion?: boolean;
  children: React.ReactNode;
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
  isNexgear = false,
  trackConversion = false,
  children,
}: ConversionButtonProps) {
  const [isTracking, setIsTracking] = useState(false);

  const trackOutboundClick = (targetUrl: string) => {
    if (isTracking) return;
    setIsTracking(true);

    let hasRedirected = false;

    const redirect = () => {
      if (!hasRedirected) {
        hasRedirected = true;
        window.location.href = targetUrl;
      }
    };

    // Only track conversion for NEXGEAR
    if (trackConversion) {
      // Fallback: redirect after 300ms if gtag is blocked or fails
      const fallbackTimer = setTimeout(redirect, 300);

      // Try to track with Google Ads
      if (typeof window !== "undefined" && window.gtag) {
        try {
          window.gtag("event", "conversion", {
            send_to: "AW-17979730701/2tBNCPLAgIEcEI3Ws_1C",
            value: 1.0,
            currency: "EUR",
            event_callback: () => {
              clearTimeout(fallbackTimer);
              redirect();
            },
          });
        } catch (error) {
          // If gtag fails, fallback will handle redirect
          console.error("Conversion tracking error:", error);
        }
      }
      // If gtag doesn't exist (AdBlocker), fallback timer will redirect
    } else {
      // For other products, redirect immediately
      redirect();
    }
  };

  return (
    <button
      onClick={() => trackOutboundClick(url)}
      className={`rounded-full bg-orange-500 px-4 sm:px-6 py-2.5 sm:py-3 text-center text-xs sm:text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600 w-full ${
        isNexgear ? "hover:shadow-xl hover:scale-[1.02]" : ""
      }`}
      disabled={isTracking}
    >
      {children}
    </button>
  );
}
