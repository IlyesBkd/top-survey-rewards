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

  const trackOutboundClick = (targetUrl: string) => {
    if (isTracking) return;
    setIsTracking(true);

    // Track CTA click with PostHog
    if (offerName && position) {
      posthog.capture('cta_button_clicked', {
        offer_name: offerName,
        position: position,
      });
    }

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
            currency: "USD",
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
      // For other sites, redirect immediately
      redirect();
    }
  };

  return (
    <button
      onClick={() => trackOutboundClick(url)}
      className={`relative rounded-xl px-6 sm:px-8 py-4 sm:py-5 text-center font-extrabold uppercase tracking-wider text-white shadow-[0_4px_14px_0_rgba(0,0,0,0.25)] transition-all duration-200 w-full overflow-hidden ${
        isPrimary
          ? "bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 hover:shadow-[0_6px_20px_0_rgba(5,150,105,0.4)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_2px_8px_0_rgba(0,0,0,0.2)] text-base sm:text-lg md:text-xl"
          : "bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 hover:shadow-[0_6px_20px_0_rgba(30,58,138,0.4)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_2px_8px_0_rgba(0,0,0,0.2)] text-sm sm:text-base"
      } before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none`}
      disabled={isTracking}
      style={{
        letterSpacing: '0.05em',
      }}
    >
      {children}
    </button>
  );
}
