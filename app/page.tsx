import Image from "next/image";
import ConversionButton from "./components/ConversionButton";
import { Star, ShieldCheck, TrendingUp } from "lucide-react";

const introParagraphs = [
  "Making money online is no longer a pipe dream. Millions of Americans earn extra cash every month simply by sharing their opinions through paid survey sites. The key is knowing which platforms are legitimate and which ones are a waste of your time.",
  "The problem? There are hundreds of survey sites out there, and most of them either pay pennies, have unreachable payout thresholds, or are outright scams designed to harvest your data. We did the hard work so you don't have to.",
  "Our team personally tested over 15 survey panels over the past 6 months. We ranked them based on three core criteria: ease of use, payout threshold (how fast you can cash out), and how frequently new surveys are available. Here are the 3 clear winners for 2026.",
];

const lookForList = [
  "Low payout threshold ($5 or less)",
  "Multiple cash-out options (PayPal, gift cards, direct deposit)",
  "Large inventory of available surveys",
  "Clean, user-friendly interface and mobile app",
  "Transparent privacy policy and data handling",
];

const avoidList = [
  "Sites that ask for your credit card information",
  "Platforms with $25+ minimum payout thresholds",
  "Panels that only pay in obscure reward points",
  "Survey sites with no contact info or privacy policy",
];

const sites = [
  {
    id: 1,
    rank: 1,
    name: "SurveyJunkie",
    tag: "#1 Editor's Choice",
    logo: "/surveyjunkie.png",
    interfaceImage: "/s-interface.png",
    rating: 9.8,
    advantages: [
      "Instant payouts via PayPal or e-Giftcards",
      "Massive inventory of surveys",
      "Very low $5 cash-out threshold",
    ],
    disadvantages: ["You might not qualify for every survey"],
    expertReview:
      "SurveyJunkie is the undisputed leader among paid survey platforms in 2026. The interface is incredibly clean and intuitive, making it easy to find and complete surveys in minutes. Their mobile app is excellent, letting you earn on the go during commutes or downtime. Best of all, you can cash out as soon as you hit just $5 in earnings -- a threshold most competitors can't match. If you only sign up for one survey site, make it this one.",
    ctaText: "VISIT OFFICIAL SITE",
    socialProof: "⭐ Trusted by over 20+ million members worldwide. Payouts processed within 24 hours.",
    url: "",
    isPrimary: true,
  },
  {
    id: 2,
    rank: 2,
    name: "Nielsen Computer & Mobile Panel",
    tag: "Best for Passive Income",
    logo: "/nielsen.png",
    interfaceImage: "/n-interface.png",
    rating: 9.2,
    advantages: [
      "100% passive income",
      "Earn just by installing the app",
      "Huge sweepstakes entries",
    ],
    disadvantages: [
      "Not a traditional survey site",
      "Earnings are slow and steady",
    ],
    expertReview:
      "Nielsen isn't your typical survey site -- it's a market research app that pays you passively just for keeping it installed on your devices. You don't need to answer questions or fill out forms. Simply install the app on your phone or computer, and Nielsen collects anonymous usage data in the background. In return, you earn points redeemable for gift cards and get entered into monthly $10,000 sweepstakes. It's the perfect complement to an active survey site like SurveyJunkie.",
    ctaText: "VISIT OFFICIAL SITE",
    socialProof: "🔒 Backed by a 90-year-old market research giant. 100% safe and secure.",
    url: "",
    isPrimary: false,
  },
  {
    id: 3,
    rank: 3,
    name: "InboxDollars",
    tag: "Best Signup Bonus",
    logo: "/inboxdollars.png",
    interfaceImage: "/i-interface.png",
    rating: 8.7,
    advantages: [
      "Earn money watching videos and playing games",
      "Instant $5 signup bonus",
    ],
    disadvantages: ["Higher minimum payout threshold ($15)"],
    expertReview:
      "InboxDollars is a fun and engaging platform that pays you real cash -- not points -- for reading emails, watching videos, playing games, and completing surveys. The instant $5 signup bonus is a nice touch that gets you started right away. The only downside is the $15 minimum payout, which means you'll need a bit of patience before your first withdrawal. That said, the variety of earning methods keeps things interesting and makes it easy to hit that threshold faster than you'd expect.",
    ctaText: "VISIT OFFICIAL SITE",
    socialProof: "💵 Over $80 million in cash rewards paid to members since 2000.",
    url: "",
    isPrimary: false,
  },
];

type Site = (typeof sites)[number];

function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating / 2);
  const hasHalf = rating % 2 >= 0.7;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 sm:h-6 sm:w-6 ${
            i < fullStars
              ? "fill-amber-400 text-amber-400"
              : i === fullStars && hasHalf
              ? "fill-amber-400/50 text-amber-400"
              : "fill-zinc-200 text-zinc-200"
          }`}
        />
      ))}
    </div>
  );
}

function SiteCard({ site }: { site: Site }) {
  return (
    <article
      className={`relative rounded-2xl md:rounded-[32px] border bg-white p-4 sm:p-6 md:p-10 shadow-[0_18px_40px_rgba(15,23,42,0.12)] ${
        site.isPrimary
          ? "border-emerald-300 ring-2 ring-emerald-200"
          : "border-zinc-200"
      }`}
    >
      {site.tag && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <span
            className={`inline-block rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wide shadow-md ${
              site.isPrimary 
                ? "bg-emerald-600 text-white" 
                : "bg-slate-100 text-slate-700"
            }`}
          >
            {site.tag}
          </span>
        </div>
      )}

      <div className="pt-6 md:pt-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-5 sm:justify-between">
          <div className="flex items-center gap-4 sm:gap-5">
            <span className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-xl sm:text-2xl font-bold text-zinc-600">
              #{site.rank}
            </span>
            <Image
              src={site.logo}
              alt={`${site.name} logo`}
              width={280}
              height={84}
              className="h-20 sm:h-24 md:h-28 w-auto max-w-[140px] sm:max-w-[180px] object-contain"
            />
          </div>
          <div className="flex flex-col items-center sm:items-end gap-1 shrink-0">
            <RatingStars rating={site.rating} />
            <p className="text-lg sm:text-2xl font-bold text-zinc-900 whitespace-nowrap">
              {site.rating}/10
            </p>
          </div>
        </div>

        <div className="mt-5 sm:mt-8 grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div className="flex items-center justify-center overflow-hidden rounded-xl md:rounded-2xl border border-zinc-100 shadow-sm bg-zinc-50 p-3">
            <Image
              src={site.interfaceImage}
              alt={`${site.name} dashboard interface`}
              width={600}
              height={400}
              className="w-full h-auto max-h-[250px] sm:max-h-[280px] object-contain"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            <div className="rounded-xl md:rounded-2xl bg-emerald-50 p-3 sm:p-4">
              <p className="text-sm sm:text-base font-semibold uppercase text-emerald-700">
                Pros
              </p>
              <ul className="mt-2 space-y-1.5 text-sm sm:text-base text-emerald-900">
                {site.advantages.map((item) => (
                  <li key={item} className="leading-relaxed flex items-start gap-2">
                    <span className="text-emerald-600 mt-0.5 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl md:rounded-2xl bg-rose-50 p-3 sm:p-4">
              <p className="text-sm sm:text-base font-semibold uppercase text-rose-600">
                Cons
              </p>
              <ul className="mt-2 space-y-1.5 text-sm sm:text-base text-rose-900">
                {site.disadvantages.map((item) => (
                  <li key={item} className="leading-relaxed flex items-start gap-2">
                    <span className="text-rose-500 mt-0.5 shrink-0">&#10007;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8">
          <h4 className="text-lg sm:text-xl font-bold text-zinc-900 mb-2">
            Expert Review
          </h4>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-zinc-700">
            {site.expertReview}
          </p>
        </div>

        <div className="mt-6 sm:mt-8 space-y-3">
          <ConversionButton
            url={site.url}
            isPrimary={site.isPrimary}
            trackConversion={site.isPrimary}
          >
            {site.ctaText}
          </ConversionButton>
          {site.socialProof && (
            <p className="text-xs sm:text-sm text-center text-slate-600 leading-relaxed">
              {site.socialProof}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Navbar */}
      <nav className="border-b border-zinc-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50 h-16 sm:h-20">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 h-full sm:px-6">
          <div className="flex items-center h-full overflow-hidden">
            <Image
              src="/logo.png"
              alt="TopSurveyRewards.com logo"
              width={240}
              height={53}
              priority
              className="h-48 sm:h-60 w-auto object-contain object-center"
            />
          </div>
          <a
            href="#ranking"
            className="hidden sm:inline-block rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-700 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-[0_3px_10px_0_rgba(0,0,0,0.2)] hover:shadow-[0_4px_14px_0_rgba(5,150,105,0.3)] hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-200"
          >
            See Top 3
          </a>
        </div>
      </nav>

      {/* Hero / Intro */}
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-5 sm:gap-7 px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-12">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            The 3 Best Paid Survey Sites Tested in 2026
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-zinc-600">
            We tested over 15 survey panels to identify the 3 best platforms to earn extra cash in your spare time.
          </p>
        </div>

        <div className="rounded-2xl md:rounded-3xl border border-zinc-200 bg-white p-3 sm:p-4 md:p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center">
            <Image
              src="/projecteur-lp/author-david.jpg"
              alt="Michael Thompson"
              width={80}
              height={80}
              priority
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border-4 border-white object-cover shadow"
            />
            <div className="space-y-1">
              <div className="flex items-center flex-wrap gap-1">
                <p className="text-base sm:text-lg md:text-xl font-semibold">Michael Thompson</p>
                <span className="text-green-600 text-[10px] sm:text-xs font-semibold bg-green-100 px-1.5 sm:px-2 py-0.5 rounded-full">✓ Verified Reviewer</span>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed">
                Michael, 32, is a personal finance enthusiast who has been earning extra income through survey sites for over 3 years. He tests platforms rigorously to help others avoid scams and maximize their earnings in the gig economy.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">Updated March 5, 2026</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-zinc-700">
          {introParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          <div className="rounded-2xl md:rounded-3xl border border-emerald-200 bg-emerald-50 p-4 sm:p-5">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-emerald-900">
              Look For
            </h3>
            <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-sm sm:text-base md:text-lg text-emerald-900">
              {lookForList.map((item) => (
                <li key={item} className="leading-relaxed flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5 shrink-0">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl md:rounded-3xl border border-rose-200 bg-rose-50 p-4 sm:p-5">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-rose-700">
              Avoid
            </h3>
            <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-sm sm:text-base md:text-lg text-rose-900">
              {avoidList.map((item) => (
                <li key={item} className="leading-relaxed flex items-start gap-2">
                  <span className="text-rose-500 mt-0.5 shrink-0">&#10007;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          id="ranking"
          href="#ranking"
          className="rounded-full bg-blue-600 px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-200"
        >
          Our Top 3 Paid Survey Sites for 2026
        </a>
      </section>

      {/* Site Cards */}
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-12 sm:gap-16 px-4 pb-12 sm:pb-20 pt-4 sm:pt-6 sm:px-6">
        {sites.map((site) => (
          <SiteCard key={site.id} site={site} />
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
          <div className="flex flex-col items-center gap-6 text-center">
            <Image
              src="/logo.png"
              alt="TopSurveyRewards.com logo"
              width={160}
              height={36}
              className="h-7 sm:h-8 w-auto object-contain opacity-70"
            />
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base font-medium text-zinc-600">
              <a href="/privacy-policy" className="hover:text-zinc-900 transition">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-zinc-900 transition">
                Terms of Conditions
              </a>
              <a href="/contact" className="hover:text-zinc-900 transition">
                Contact Us
              </a>
            </div>
            <div className="max-w-2xl rounded-xl bg-zinc-100 p-4 sm:p-5 text-sm sm:text-base leading-relaxed text-zinc-700">
              <p>
                <strong className="text-zinc-900 font-bold">Disclosure:</strong>{" "}
                TopSurveyRewards.com is an independent review site. We may
                receive compensation from the companies whose products we
                review, at no extra cost to you.
              </p>
            </div>
            <p className="text-xs text-zinc-400">
              &copy; {new Date().getFullYear()} TopSurveyRewards.com &mdash; All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
