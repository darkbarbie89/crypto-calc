import Link from "next/link";
import { Calculator, ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
              SatsTally
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
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            SatsTally provides free crypto calculators without requiring you
            to create an account or submit personal information. The tools can be
            used anonymously.
          </p>

          <h2 className="mt-6 text-sm font-semibold text-slate-100 sm:text-base">
            Analytics & usage data
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
            We may use basic analytics (such as page views and traffic sources)
            to understand how the site is used and to improve the experience.
            This data is aggregated and is not used to personally identify you.
          </p>

          <h2 className="mt-6 text-sm font-semibold text-slate-100 sm:text-base">
            Third-party services
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
            If we integrate third-party services in the future (for example
            analytics, advertising or payment providers), they will process data
            according to their own privacy policies. You should review those
            policies before using any paid or account-based features if they are
            added later.
          </p>

          <h2 className="mt-6 text-sm font-semibold text-slate-100 sm:text-base">
            Your choices
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
            If you do not agree with this Privacy Policy, you should discontinue
            use of SatsTally. Continuing to use the site will be treated as
            acceptance of this policy.
          </p>
        </div>
      </main>
    </div>
  );
}
