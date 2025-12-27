import Link from "next/link";
import { Calculator, ArrowLeft, Shield } from "lucide-react";
import LiquidationCalculator from "@/components/calculators/LiquidationCalculator";
import AffiliateBanner from "@/components/AffiliateBanner";
import logo from "@/components/logo.png";
import Image from "next/image"

export default function LiquidationPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top bar */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* LEFT SIDE: Logo */}
          <Link href="/" className="block">
            <Image
              src={logo}
              alt="SatsTally"
              className="h-12 w-auto rounded-md object-contain"
              priority
            />
          </Link>

          {/* RIGHT SIDE: Back to home */}
          <Link
            href="/"
            className="flex items-center gap-1 text-xs text-slate-300 hover:text-slate-100"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to home
          </Link>
        </div>
      </header>
      <main className="py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Page heading */}
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-indigo-400">
                LIQUIDATION CALCULATOR
              </p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Know your liquidation price before opening a trade.
              </h1>
              <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm">
                Check liquidation levels for isolated or cross margin, choose
                any leverage, and understand your risk before placing a futures
                order.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 font-medium text-amber-300">
                <span className="mr-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                High-risk tool – use responsibly
              </span>
            </div>
          </div>

          {/* Glowing calculator card */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-48 max-w-xl rounded-full bg-purple-500/30 blur-3xl" />

            <div className="relative rounded-[1.5rem] bg-gradient-to-r from-purple-500/70 via-indigo-500/70 to-sky-500/70 p-[1px] shadow-[0_0_0_1px_rgba(129,140,248,0.4),0_0_40px_rgba(79,70,229,0.6)]">
              <div className="rounded-[1.4rem] border border-slate-800 bg-slate-950/95 p-5 sm:p-6">
                <LiquidationCalculator />

              {/* <--- THE MONETIZATION NUDGE ---> */}
                <AffiliateBanner />

              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-4 text-[11px] leading-relaxed text-slate-500">
            Liquidation calculations are estimates only. Real liquidation prices
            depend on the exchange, funding rates, index price, and volatility.
          </p>
        </div>
      </main>
    </div>
  );
}
