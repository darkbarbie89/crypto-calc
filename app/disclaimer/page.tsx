import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import logo from "@/components/logo.png";

export default function DisclaimerPage() {
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
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Disclaimer
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            The tools, calculators, and information provided on SatsTally are for
            informational and educational purposes only. By using this website, you
            agree to the terms outlined below.
          </p>

          <h2 className="mt-6 text-sm font-semibold text-slate-100 sm:text-base">
            Not financial advice
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
            Nothing on this website constitutes financial, investment, legal, or
            tax advice. Cryptocurrency investments carry inherent risks, including
            market volatility and the potential loss of capital. You should always
            conduct your own research or consult with a qualified financial advisor
            before making investment decisions.
          </p>

          <h2 className="mt-6 text-sm font-semibold text-slate-100 sm:text-base">
            Accuracy of information
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
            While we strive to ensure that the calculations and data provided are
            accurate, SatsTally makes no warranties regarding the completeness,
            reliability, or accuracy of this information. Calculator results are
            estimates based on the inputs provided and may not reflect actual
            market conditions or exchange rates at the time of transaction.
          </p>

          <h2 className="mt-6 text-sm font-semibold text-slate-100 sm:text-base">
            Limitation of liability
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
            SatsTally and its developers shall not be held liable for any damages,
            losses, or expenses arising from the use of this website or reliance
            on its tools. You assume full responsibility for any actions taken
            based on the information provided here.
          </p>
        </div>
      </main>
    </div>
  );
}