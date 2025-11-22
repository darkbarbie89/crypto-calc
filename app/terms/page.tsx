import Link from "next/link";
import { Calculator, ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Terms &amp; Disclaimer
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            CryptoCalcHub is provided for informational and educational purposes
            only. The calculators and content on this site do not constitute
            financial, investment, tax, legal, or trading advice.
          </p>

          <h2 className="mt-6 text-sm font-semibold text-slate-100 sm:text-base">
            No financial advice
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
            Calculations, projections and examples on this site are estimates
            only and may not reflect real-world results. You are solely
            responsible for any trading or investment decisions you make. Always
            do your own research and, if needed, consult a licensed professional.
          </p>

          <h2 className="mt-6 text-sm font-semibold text-slate-100 sm:text-base">
            No guarantees
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
            We do not guarantee the accuracy, completeness or timeliness of any
            calculations, market data or content. Markets can change quickly and
            external data sources may be incorrect or delayed.
          </p>

          <h2 className="mt-6 text-sm font-semibold text-slate-100 sm:text-base">
            Limitation of liability
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
            By using CryptoCalcHub, you agree that the owner and contributors of
            this site are not liable for any loss or damage, direct or indirect,
            arising from your use of the calculators, the content, or any
            third-party links.
          </p>
        </div>
      </main>
    </div>
  );
}
