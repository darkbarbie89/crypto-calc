import Link from "next/link";
import { Calculator, ArrowLeft } from "lucide-react";
import StakingCalculator from "@/components/calculators/StakingCalculator";
import AffiliateBanner from "@/components/AffiliateBanner";

export default function StakingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top bar */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500">
              <Calculator className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-slate-100">
              CryptoCalcHub
            </span>
          </Link>

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
                STAKING CALCULATOR
              </p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Estimate staking rewards with precision.
              </h1>
              <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm">
                Enter your stake amount, APY, compounding frequency, and duration to
                project long-term yield. Compare simple vs. compound staking returns.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="inline-flex items-center rounded-full border border-purple-400/40 bg-purple-500/10 px-3 py-1 font-medium text-purple-300">
                <span className="mr-1 h-1.5 w-1.5 rounded-full bg-purple-400" />
                Passive income estimator
              </span>
            </div>
          </div>

          {/* Glowing staking calculator card */}
          <div className="relative">
            {/* subtle background glow */}
            <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-48 max-w-xl rounded-full bg-purple-500/30 blur-3xl" />

            <div className="relative rounded-[1.5rem] bg-gradient-to-r from-purple-500/70 via-pink-500/70 to-indigo-500/70 p-[1px] shadow-[0_0_0_1px_rgba(168,85,247,0.45),0_0_40px_rgba(168,85,247,0.55)]">
              <div className="rounded-[1.4rem] border border-slate-800 bg-slate-950/95 p-5 sm:p-6">
                <StakingCalculator />

              {/* <--- THE MONETIZATION NUDGE ---> */}
                 <AffiliateBanner />


              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-4 text-[11px] leading-relaxed text-slate-500">
            Staking projections are estimates only. Actual rewards vary based on
            validator performance, on-chain conditions, network inflation, and compounding rules.
          </p>
        </div>
      </main>
    </div>
  );
}
