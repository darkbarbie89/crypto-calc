import Link from "next/link";
import { Calculator, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import DCACalculator from "@/components/calculators/DCACalculator";
import AffiliateBanner from "@/components/AffiliateBanner"; // <--- NEW IMPORT

export default function DCAPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top bar – same style family as home */}
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

          <Link href="/" className="flex items-center gap-1 text-xs text-slate-300 hover:text-slate-100">
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
                DCA CALCULATOR
              </p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Plan your Dollar Cost Averaging with clarity.
              </h1>
              <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm">
                Test different buy frequencies, time ranges and amounts to see
                how consistent investing would change your average entry price
                and total return.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 font-medium text-emerald-300">
                <span className="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live calculation only – no wallet connection
              </span>
            </div>
          </div>

          {/* Glowing calculator container */}
          <div className="relative">
            {/* subtle background glow */}
            <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-48 max-w-xl rounded-full bg-indigo-500/30 blur-3xl" />

            <div className="relative rounded-[1.5rem] bg-gradient-to-r from-indigo-500/70 via-sky-500/70 to-purple-500/70 p-[1px] shadow-[0_0_0_1px_rgba(129,140,248,0.4),0_0_40px_rgba(79,70,229,0.6)]">
              <div className="rounded-[1.4rem] border border-slate-800 bg-slate-950/95 p-5 sm:p-6">
                
                <DCACalculator />

                {/* <--- THE MONETIZATION NUDGE ---> */}
                <AffiliateBanner />
                
              </div>
            </div>
          </div>

          {/* Small note under calculator */}
          <p className="mt-4 text-[11px] leading-relaxed text-slate-500">
            Results are for educational purposes only and do not constitute financial advice.
            Always do your own research before making investment decisions.
          </p>
        </div>
      </main>
    </div>
  );
}