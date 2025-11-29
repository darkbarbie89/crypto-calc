import { ShieldCheck, ArrowRight } from "lucide-react";

export default function AffiliateBanner() {
  return (
    <div className="mt-8 rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-100">
              Profits looking good?
            </h4>
            <p className="text-xs text-slate-400">
              Don't keep long-term holdings on exchanges. Secure them now.
            </p>
          </div>
        </div>
        <a
          href="https://shop.ledger.com/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-indigo-500 hover:scale-105"
        >
          Get a Ledger <ArrowRight className="ml-1 inline h-3 w-3" />
        </a>
      </div>
    </div>
  );
}