// components/SiteFooter.tsx
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-100">
                CryptoCalcHub
              </span>
              <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-medium text-slate-400">
                Tools for serious traders
              </span>
            </div>
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-slate-400">
              Free, no-login crypto calculators for profit/loss, DCA, liquidation
              and staking. Built for traders who want clear numbers before
              they click “confirm”.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-6 text-xs text-slate-300 sm:grid-cols-3">
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Calculators
              </h3>
              <ul className="mt-2 space-y-1.5">
                <li>
                  <Link href="/profit-loss" className="hover:text-slate-100">
                    Profit / Loss
                  </Link>
                </li>
                <li>
                  <Link href="/dca" className="hover:text-slate-100">
                    DCA
                  </Link>
                </li>
                <li>
                  <Link href="/liquidation" className="hover:text-slate-100">
                    Liquidation
                  </Link>
                </li>
                <li>
                  <Link href="/staking" className="hover:text-slate-100">
                    Staking
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Learn
              </h3>
              <ul className="mt-2 space-y-1.5">
                <li>
                  <Link href="/blog" className="hover:text-slate-100">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Legal
              </h3>
              <ul className="mt-2 space-y-1.5">
                <li>
                  <Link href="/privacy" className="hover:text-slate-100">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-slate-100">
                    Terms &amp; Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-6 border-t border-slate-800 pt-4 text-[11px] text-slate-500">
          <p className="max-w-3xl">
            CryptoCalcHub does not provide financial, investment or trading
            advice. All calculations are estimates only. Always do your own
            research and consult a professional before making financial
            decisions.
          </p>
          <p className="mt-2 text-[10px] text-slate-500">
            © {new Date().getFullYear()} CryptoCalcHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
