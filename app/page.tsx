"use client";

import Link from "next/link";
import Script from "next/script";
import Image from "next/image"; 
import {
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  PiggyBank,
  Shield,
  CheckCircle2,
  Star,
} from "lucide-react";
import { blogPosts } from "@/lib/blogPosts";
import SiteFooter from "@/components/SiteFooter";
import logo from "@/components/logo.png"; 

export default function Home() {
  const tools = [
    {
      title: "Profit / Loss",
      description:
        "See exactly how much you gained or lost on every trade with real-time market data.",
      href: "/profit-loss",
      icon: TrendingUp,
    },
    {
      title: "DCA Strategy",
      description:
        "Simulate weekly or monthly investing and compare different DCA strategies.",
      href: "/dca",
      icon: null, 
    },
    {
      title: "Liquidation Price",
      description:
        "Calculate liquidation levels for margin positions and understand your risk.",
      href: "/liquidation",
      icon: AlertTriangle,
    },
    {
      title: "Staking Rewards",
      description:
        "Estimate APY, compounding, and long-term rewards for your staking positions.",
      href: "/staking",
      icon: PiggyBank,
    },
  ];

  const steps = [
    {
      title: "Connect your plan",
      body: "Choose the calculator that matches your strategy – profit, DCA, liquidation or staking.",
    },
    {
      title: "Enter your numbers",
      body: "Fill in your entry price, investment size, dates and exchange fees in seconds.",
    },
    {
      title: "See the full picture",
      body: "Instant charts, risk metrics and clear summaries help you make confident decisions.",
    },
  ];

  const faqs = [
    {
      q: "Is SatsTally free to use?", 
      a: "Yes. All calculators on SatsTally are free. You can use them as often as you like with no signup required.",
    },
    {
      q: "Do you support real-time prices?",
      a: "Yes. Profit/Loss and DCA tools are designed to work with live prices from major markets, or you can enter custom values.",
    },
    {
      q: "Can I use this for futures and leverage?",
      a: "Yes. The liquidation calculator is built specifically for margin and futures traders to understand risk at different leverage levels.",
    },
    {
      q: "Does SatsTally give financial advice?",
      a: "No. All tools are for educational purposes only. Always do your own research before investing in any asset.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      
      {/* CoinGecko Live Ticker Script & Widget */}
      <Script
        src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"
        strategy="lazyOnload"
      />
      <div className="border-b border-slate-800 bg-slate-950">
        <coingecko-coin-price-marquee-widget
          coin-ids="bitcoin,ethereum,solana,binancecoin,ripple,cardano"
          currency="usd"
          background-color="#020617" 
          locale="en"
          font-color="#f8fafc"
        ></coingecko-coin-price-marquee-widget>
      </div>

      {/* Top navbar */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="block">
                {/* LOGO IN HEADER - ADJUSTED SIZE TO H-12 (48px) */}
                <Image
                  src={logo}
                  alt="SatsTally"
                  className="h-12 w-auto rounded-md object-contain"
                  priority
                />
            </Link>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#how-it-works" className="hover:text-white transition-colors">
              How it works
            </a>
            <a href="#tools" className="hover:text-white transition-colors">
              Tools
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="/blog" className="hover:text-white transition-colors">
              Blog
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex">
            <Link
              href="#tools"
              className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-4 py-1 text-xs font-semibold text-slate-100 hover:border-slate-400 hover:bg-slate-800 transition-all"
            >
              Launch tools
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="border-b border-slate-800 bg-slate-950 overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-8 lg:py-24">
            
            {/* Left Column: Text & Actions */}
            <div className="relative z-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                PLAN EVERY MOVE
              </p>
              <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
                Invest at the <br className="hidden lg:block"/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">perfect time.</span>
              </h1>
              <p className="mb-8 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                SatsTally turns confusing crypto math into clear, visual
                answers. Test entries, exits, DCA strategies and staking
                rewards before you commit real money.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="#tools"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-slate-200 hover:scale-105 transition-all"
                >
                  Try the calculators
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-xs text-slate-400 px-2">
                  No signup. No fees.
                </span>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-slate-500">
                <span>Built for spot, futures & staking.</span>
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                <span>Updated for 2026 Cycle.</span>
              </div>
            </div>

            {/* Right Column: Phone Mockup with FEAR & GREED WIDGET */}
            <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="pointer-events-none absolute -top-16 -left-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

              {/* The Phone Container */}
              <div className="relative w-[280px] rounded-[2.5rem] border border-slate-700 bg-slate-900 px-4 pb-6 pt-6 shadow-2xl shadow-indigo-500/10 transform transition hover:scale-[1.02] duration-500">
                
                {/* iPhone Notch */}
                <div className="mx-auto mb-4 h-6 w-24 rounded-full bg-slate-800" />
                
                <div className="space-y-4 text-xs">
                  {/* App Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-100">
                      Market Status
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400">
                       <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                        </span>
                        Live
                    </span>
                  </div>

                  {/* FEAR & GREED WIDGET (MAXIMIZED) */}
                  <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-700/60">
                     <a 
                        href="https://alternative.me/crypto/fear-and-greed-index/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="block w-full"
                     >
                        <img
                            src="https://alternative.me/crypto/fear-and-greed-index.png"
                            alt="Fear and Greed Index"
                            className="w-full h-auto object-cover" 
                        />
                     </a>
                  </div>

                  {/* PnL Stats Card */}
                  <div className="space-y-1 rounded-xl border border-slate-700/80 bg-slate-900/80 p-3">
                    <div className="mb-2 border-b border-slate-800 pb-2 text-[10px] font-semibold uppercase text-indigo-400">
                        Portfolio Simulation
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">Entry price</span>
                      <span className="font-medium text-slate-100">
                        $52,300
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">Current price</span>
                      <span className="font-medium text-emerald-400">
                        $58,940
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">Unrealized PnL</span>
                      <span className="font-semibold text-emerald-400">
                        +$1,612.40
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Next DCA buy in 3d 4h</span>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400">
                      Auto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TOOLS GRID */}
        <section
          id="tools"
          className="relative border-b border-slate-800 bg-slate-950 py-20"
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-x-0 top-0 mx-auto h-64 max-w-4xl bg-gradient-to-b from-indigo-500/25 via-slate-950 to-slate-950 blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-indigo-400">
                  LIVE CALCULATORS
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  Run the numbers before you risk a dollar.
                </h2>
                <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm">
                  These are the tools traders use every day to check entries,
                  exits, DCA paths and liquidation risk.
                </p>
              </div>
              <div className="hidden text-[11px] text-slate-400 md:block">
                <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 font-medium text-emerald-300">
                  <span className="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  All calculators free
                </span>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-gradient-to-r from-indigo-500/70 via-sky-500/70 to-purple-500/70 p-[1px] shadow-[0_0_0_1px_rgba(129,140,248,0.4),0_0_40px_rgba(79,70,229,0.6)]">
              <div className="rounded-[1.6rem] border border-slate-800 bg-slate-950/90 p-5 sm:p-6">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
                  <span>
                    Pick a calculator to start. You can switch tools without
                    losing your inputs.
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-medium text-slate-200">
                    <Shield className="h-3 w-3 text-emerald-400" />
                    No wallets, no API keys – calculations only.
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {tools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <Link
                        key={tool.title}
                        href={tool.href}
                        className="group flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/80 p-4 text-left transition hover:border-indigo-400/80 hover:bg-slate-900"
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 group-hover:bg-indigo-500/90">
                           {Icon && <Icon className="h-4 w-4 text-slate-100" />}
                          </div>
                          <h3 className="text-sm font-semibold text-slate-50">
                            {tool.title}
                          </h3>
                        </div>
                        <p className="mb-3 text-xs leading-relaxed text-slate-300">
                          {tool.description}
                        </p>
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-indigo-300">
                          Open calculator
                          <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          className="border-b border-slate-800 bg-slate-950"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                HOW IT WORKS
              </p>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                From idea to insight in three steps.
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                SatsTally is designed to remove friction. Each calculator
                guides you with clean inputs, clear labels and outputs you can
                trust.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={step.title} className="flex gap-4">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-[11px] font-semibold text-slate-100">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-300">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG PREVIEW */}
        <section
          id="blog"
          className="border-b border-slate-800 bg-slate-950 py-16"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-indigo-400">
                  EDUCATION
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  Learn the “why” behind every calculator.
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  These short articles explain profit/loss, DCA, liquidation and staking
                  in the same language as the tools, so you can make sense of the numbers.
                </p>
              </div>

              <Link
                href="/blog"
                className="text-xs font-semibold text-indigo-300 hover:text-indigo-200"
              >
                View all articles →
              </Link>
            </div>

            {/* show first 3 posts */}
            <div className="grid gap-4 md:grid-cols-3">
              {blogPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-left transition hover:border-slate-500 hover:bg-slate-900"
                >
                  <div>
                    <p className="text-[11px] text-slate-400">
                      {post.date} · {post.readTime}
                    </p>
                    <h3 className="mt-2 text-sm font-semibold text-slate-50 sm:text-base">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-3 text-[11px] font-semibold text-indigo-300">
                    Read article →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="border-b border-slate-800 bg-slate-950 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-2xl">
              <h2 className="mb-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Everyone is changing their trading with SatsTally.
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Traders use these tools to validate setups, understand risk and
                avoid emotional decisions.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "Arjun M.",
                  role: "Swing trader",
                  quote:
                    "I used to keep PnL in a spreadsheet. Now I run every idea through SatsTally first.",
                },
                {
                  name: "Sarah L.",
                  role: "Long-term investor",
                  quote:
                    "The DCA calculator finally showed me how powerful consistent buying is over 2–3 years.",
                },
                {
                  name: "Leo K.",
                  role: "Futures trader",
                  quote:
                    "The liquidation tool stopped me from over-leveraging. Seeing the levels visually is priceless.",
                },
              ].map((t) => (
                <figure
                  key={t.name}
                  className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm"
                >
                  <div className="mb-3 flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400" />
                    ))}
                  </div>
                  <blockquote className="mb-4 text-xs leading-relaxed text-slate-200">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-auto text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-200">
                      {t.name}
                    </span>{" "}
                    · {t.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section
          id="pricing"
          className="border-b border-slate-800 bg-slate-950 py-16"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-2xl text-left">
              <h2 className="mb-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Flat pricing, no management fees.
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                SatsTally is free. In the future we may add optional
                advanced reports – but the core tools will stay free forever.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                      CURRENT PLAN
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-slate-50">
                      SatsTally Free
                    </h3>
                  </div>
                  <p className="text-right text-sm font-semibold text-slate-50">
                    $0
                    <span className="ml-1 text-xs font-normal text-slate-400">
                      / forever
                    </span>
                  </p>
                </div>

                <p className="mb-4 text-xs leading-relaxed text-slate-300">
                  Use every calculator, unlimited times, on any device. No
                  credit card. No trial. Just open and calculate.
                </p>

                <ul className="space-y-2 text-xs text-slate-200">
                  {[
                    "Unlimited use of all four calculators",
                    "Support for spot, margin and staking scenarios",
                    "Clean PDF-ready summaries for your notes",
                    "Works on desktop, tablet and mobile",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <p>
                  We believe good decisions start with clear numbers. That’s why
                  SatsTally doesn’t charge management or subscription fees
                  for the core tools.
                </p>
                <p>
                  Run as many scenarios as you like, export your results, and
                  share screenshots with your trading partners or community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="bg-slate-950 pb-16 pt-8 sm:pt-12 lg:pt-16"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Frequently asked questions
            </h2>
            <dl className="space-y-5 text-sm text-slate-200">
              {faqs.map((item) => (
                <div key={item.q}>
                  <dt className="font-semibold">{item.q}</dt>
                  <dd className="mt-1 max-w-3xl text-xs leading-relaxed text-slate-300">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}