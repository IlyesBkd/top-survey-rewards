"use client";

import Image from "next/image";
import { usePostHog } from "posthog-js/react";
import { Star, Clock, DollarSign, Users, CheckCircle2, ArrowRight, Shield } from "lucide-react";

const TRACKING_URL =
  "https://k7xlm.bemobtrcks.com/click/1?ns=c%3D67f4c02b-ee54-4a9e-9382-ec6ca1ef4f6f..l%3D2..a%3D0..b%3D0";

function trackConversion() {
  if (typeof window !== "undefined" && window.gtag) {
    try {
      window.gtag("event", "conversion", {
        send_to: "AW-17986101954/6M7lCNvQyIMcEMLFuIBD",
        value: 1.0,
        currency: "USD",
      });
    } catch (e) {
      console.error("Conversion tracking error:", e);
    }
  }
}

function CTAButton({ children, className = "", eventName = "cta_clicked" }: { children: React.ReactNode; className?: string; eventName?: string }) {
  const posthog = usePostHog();

  const handleClick = () => {
    // Track with PostHog
    posthog.capture(eventName, {
      page: "make-money-online",
      button_text: children,
    });

    // Track with Google Ads
    trackConversion();
  };

  return (
    <a
      href={TRACKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 text-center text-lg font-bold text-white shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-200 hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_0_10px_rgba(16,185,129,0.3)] ${className}`}
    >
      {children}
      <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}

function StarsRow() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-emerald-400 text-emerald-400" />
      ))}
    </div>
  );
}

export default function MakeMoneyOnline() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-3xl px-4 pb-10 pt-16 sm:px-6 sm:pt-24 text-center">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Earn{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Extra Cash
            </span>{" "}
            Testing Apps, Games, and Surveys
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base text-slate-400 sm:text-lg md:text-xl">
            Turn your spare time into real money. Join millions of users earning every day.
          </p>

          {/* Trustpilot Stars Image */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <Image
              src="/image.png"
              alt="Trustpilot 5 stars"
              width={120}
              height={24}
              className="h-6 sm:h-8 w-auto"
            />
            <p className="text-xs sm:text-sm text-slate-400">
              Excellent <span className="font-semibold text-emerald-400">4.7/5</span> based on 270,000+ reviews
            </p>
          </div>

          {/* Hero Image */}
          <div className="mx-auto mt-10 w-full max-w-md sm:max-w-2xl">
            <Image
              src="/public-Photoroom.png"
              alt="Get Paid To Play Games - $10 Bonus"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl drop-shadow-[0_0_25px_rgba(16,185,129,0.2)]"
              priority
            />
          </div>

          {/* CTA Button below Hero Image */}
          <div className="mx-auto mt-8 max-w-md">
            <CTAButton>Start Earning Now (100% Free)</CTAButton>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-500">
              <Shield className="h-3.5 w-3.5" />
              No credit card required &bull; Takes 30 seconds
            </p>
          </div>
        </div>
      </section>

      {/* ─── Stats Section ─── */}
      <section className="border-y border-slate-800 bg-black/40">
        <div className="mx-auto grid max-w-4xl grid-cols-1 divide-y divide-slate-800 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { icon: Clock, label: "Average time to first reward", value: "15 mins" },
            { icon: DollarSign, label: "Minimum Cashout", value: "$5" },
            { icon: Users, label: "Members", value: "20,000,000+" },
          ].map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col items-center gap-2 px-6 py-6 text-center sm:py-8"
            >
              <stat.icon className="h-6 w-6 text-emerald-400" />
              <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl md:text-4xl">
            Want to make money{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              fast and free
            </span>
            ? Here&apos;s how:
          </h2>

          <div className="relative mt-14">
            {/* Vertical connector line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-500/60 via-emerald-500/20 to-transparent sm:block" />

            <div className="space-y-10 sm:space-y-12">
              {[
                {
                  step: 1,
                  title: "Choose an offer",
                  desc: "Sign up for our #1 recommended platform for free and browse available surveys and tasks.",
                },
                {
                  step: 2,
                  title: "Complete tasks",
                  desc: "Share your opinion, play games, or test apps. Most take 5–15 minutes.",
                },
                {
                  step: 3,
                  title: "Get paid instantly",
                  desc: "Earn points and cash out via PayPal or Gift Cards starting at just $5.",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-5">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xl font-bold text-emerald-400 ring-2 ring-emerald-500/30">
                    {item.step}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-white sm:text-xl">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400 sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Rewards Explanation Image */}
            <div className="mt-12 sm:mt-16">
              <p className="text-center text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-6">
                Cash out instantly via PayPal, Crypto, or your favorite Gift Cards
              </p>
              <div className="mx-auto max-w-md sm:max-w-lg">
                <Image
                  src="/get-paid.bf5d5ff2.png"
                  alt="Get paid - PayPal, Google Play, Amazon rewards"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl sm:rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Top Recommendation Section ─── */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-900 p-6 shadow-[0_0_60px_rgba(16,185,129,0.08)] sm:p-10">
            {/* Glow effect */}
            <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2">
              <div className="h-40 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
            </div>

            <div className="relative">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                #1 Recommended Platform
              </div>

              <h2 className="mt-4 text-center text-2xl font-extrabold sm:text-3xl">
                The #1 Website to Earn Extra Cash in 2026
              </h2>

              {/* Benefits */}
              <ul className="mt-8 space-y-3">
                {[
                  "Instant payouts via PayPal or e-Giftcards",
                  "Massive inventory of surveys available daily",
                  "Very low $5 cash-out threshold",
                  "Clean, intuitive interface + mobile app",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300 sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Social proof */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
                <StarsRow />
                <span className="font-semibold text-white">9.8/10</span>
                <span className="text-slate-500">&bull; 20M+ members</span>
              </div>

              <div className="mt-8">
                <CTAButton className="text-xl sm:text-2xl py-5">
                  Claim Your Free Account
                </CTAButton>
              </div>

              <p className="mt-4 text-center text-xs text-slate-500">
                No credit card &bull; No hidden fees &bull; Sign up in 30 seconds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer / Disclaimers ─── */}
      <footer className="border-t border-slate-800 bg-black">
        <div className="mx-auto max-w-3xl px-4 py-8 text-center sm:px-6 sm:py-10">
          <p className="text-xs leading-relaxed text-gray-500">
            <span className="font-semibold text-gray-400">Disclaimer:</span> This site is an
            independent promotional page. The promoted platform is a legitimate way to earn extra cash, but
            it is not intended to replace a full-time job. Earnings vary based on demographic profile
            and survey availability. All trademarks and brand names belong to their respective
            owners.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-600">
            <a href="/privacy" className="hover:text-gray-400 transition">
              Privacy Policy
            </a>
            <span>&bull;</span>
            <a href="/terms" className="hover:text-gray-400 transition">
              Terms of Service
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-700">
            &copy; {new Date().getFullYear()} TopSurveyRewards.com
          </p>
        </div>
      </footer>
    </main>
  );
}
