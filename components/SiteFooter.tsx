import Link from "next/link";
import { Calculator, Twitter, Github } from "lucide-react";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand & Status */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500">
                <Calculator className="h-3 w-3 text-white" />
              </div>
              <span className="font-semibold text-slate-100">CryptoCalcHub</span>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-slate-400">
              Professional grade profit, DCA, and risk calculators for the modern crypto trader.
              Built for the 2026 cycle.
            </p>
            
            {/* TRUST SIGNAL: Live Data Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 text-[11px] text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Systems Operational • Live Data
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-4 font-semibold text-slate-200">Calculators</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/profit-loss" className="hover:text-indigo-400 transition-colors">Profit & Loss</Link></li>
              <li><Link href="/dca" className="hover:text-indigo-400 transition-colors">DCA Strategy</Link></li>
              <li><Link href="/liquidation" className="hover:text-indigo-400 transition-colors">Liquidation Risk</Link></li>
              <li><Link href="/staking" className="hover:text-indigo-400 transition-colors">Staking Rewards</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold text-slate-200">Resources</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/blog" className="hover:text-indigo-400 transition-colors">Trading Blog</Link></li>
              <li><Link href="/#faq" className="hover:text-indigo-400 transition-colors">FAQ</Link></li>
              <li><span className="text-slate-600 cursor-not-allowed">API Docs (Coming Soon)</span></li>
            </ul>
          </div>

          {/* Legal / Placeholder */}
          <div>
            <h3 className="mb-4 font-semibold text-slate-200">Legal</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} CryptoCalcHub. All rights reserved.
          </p>
          <div className="flex gap-4">
             {/* Social placeholders for credibility */}
             <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="h-4 w-4" /></a>
             <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}