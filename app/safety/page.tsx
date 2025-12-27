"use client";

import { useState } from "react";
import Link from "next/link";
import { Shield, ArrowLeft, AlertTriangle, CheckCircle2, Search, Loader2 } from "lucide-react";
import logo from "@/components/logo.png"; 
import Image from "next/image";

export default function SafetyPage() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const checkTokenSafety = async () => {
    if (!address) {
      setError("Please enter a token address first.");
      return;
    }

    setLoading(true);
    setResult(null);
    setError("");

    try {
      // Connect to GoPlus Security API (Chain ID 1 = Ethereum)
      const response = await fetch(
        `https://api.gopluslabs.io/api/v1/token_security/1?contract_addresses=${address}`
      );
      const data = await response.json();

      if (data.result && data.result[address.toLowerCase()]) {
        setResult(data.result[address.toLowerCase()]);
      } else {
        setError("Could not find data. Ensure this is a valid Ethereum address.");
      }
    } catch (err) {
      setError("Error connecting to safety server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
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

          <Link
            href="/"
            className="flex items-center gap-1 text-xs text-slate-300 hover:text-slate-100 transition-colors"
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
                TOKEN SECURITY
              </p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Scan smart contracts for risks.
              </h1>
              <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm">
                Paste an Ethereum contract address to check for honeypots, high taxes, 
                and open source verification before you trade.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 font-medium text-emerald-300">
                <span className="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Powered by GoPlus Security
              </span>
            </div>
          </div>

          {/* Glowing Container */}
          <div className="relative">
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-48 max-w-xl rounded-full bg-indigo-500/30 blur-3xl" />

            {/* The Card */}
            <div className="relative rounded-[1.5rem] bg-gradient-to-r from-indigo-500/70 via-sky-500/70 to-purple-500/70 p-[1px] shadow-[0_0_0_1px_rgba(129,140,248,0.4),0_0_40px_rgba(79,70,229,0.6)]">
              <div className="rounded-[1.4rem] border border-slate-800 bg-slate-950/95 p-5 sm:p-6 min-h-[300px] flex flex-col">
                
                {/* Input Section */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2">
                      Token Contract Address (ETH)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="e.g. 0xdAC17F958D2ee523a2206206994597C13D831ec7"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  <button
                    onClick={checkTokenSafety}
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 hover:scale-[1.01] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Scanning...
                      </>
                    ) : (
                      <>
                        <Search className="h-4 w-4" /> Scan Token Safety
                      </>
                    )}
                  </button>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mt-6 rounded-lg bg-rose-500/10 border border-rose-500/20 p-4 text-sm text-rose-300 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 shrink-0" />
                    {error}
                  </div>
                )}

                {/* Results Section */}
                {result && (
                  <div className="mt-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="border-t border-slate-800 pt-6">
                      <h3 className="text-sm font-semibold text-slate-200 mb-4 flex items-center gap-2">
                        Results for: <span className="text-indigo-400">{result.token_name || 'Unknown Token'}</span>
                        <span className="text-xs font-normal text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">{result.token_symbol || 'ERC20'}</span>
                      </h3>

                      {/* HONEYPOT STATUS */}
                      <div className={`rounded-xl p-4 border ${result.is_honeypot === "1" ? 'bg-rose-500/10 border-rose-500/30' : 'bg-emerald-500/10 border-emerald-500/30'}`}>
                        <div className="flex items-start gap-3">
                            {result.is_honeypot === "1" ? (
                                <AlertTriangle className="h-5 w-5 text-rose-400 mt-0.5" />
                            ) : (
                                <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5" />
                            )}
                            <div>
                                <h4 className={`text-sm font-bold ${result.is_honeypot === "1" ? 'text-rose-400' : 'text-emerald-400'}`}>
                                    {result.is_honeypot === "1" ? "HONEYPOT DETECTED" : "No Honeypot Detected"}
                                </h4>
                                <p className="text-xs text-slate-300 mt-1 opacity-80">
                                    {result.is_honeypot === "1" 
                                        ? "Warning: Users are unable to sell this token. Do not buy."
                                        : "This token does not appear to be a honeypot. You should be able to sell."
                                    }
                                </p>
                            </div>
                        </div>
                      </div>

                      {/* DATA GRID */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                        
                        {/* Buy Tax */}
                        <div className="rounded-lg bg-slate-900 border border-slate-800 p-3">
                            <span className="block text-[10px] uppercase text-slate-500 font-semibold mb-1">Buy Tax</span>
                            <span className={`text-lg font-bold ${(result.buy_tax * 100) > 10 ? 'text-amber-400' : 'text-slate-200'}`}>
                                {(result.buy_tax * 100).toFixed(1)}%
                            </span>
                        </div>

                        {/* Sell Tax */}
                        <div className="rounded-lg bg-slate-900 border border-slate-800 p-3">
                            <span className="block text-[10px] uppercase text-slate-500 font-semibold mb-1">Sell Tax</span>
                            <span className={`text-lg font-bold ${(result.sell_tax * 100) > 10 ? 'text-amber-400' : 'text-slate-200'}`}>
                                {(result.sell_tax * 100).toFixed(1)}%
                            </span>
                        </div>

                         {/* Open Source */}
                         <div className="rounded-lg bg-slate-900 border border-slate-800 p-3">
                            <span className="block text-[10px] uppercase text-slate-500 font-semibold mb-1">Open Source</span>
                            <span className={`text-lg font-bold flex items-center gap-1 ${result.is_open_source === "1" ? 'text-emerald-400' : 'text-rose-400'}`}>
                                {result.is_open_source === "1" ? 'Yes' : 'No'}
                                {result.is_open_source === "1" && <CheckCircle2 className="h-3 w-3" />}
                            </span>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
                
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-6 text-[11px] leading-relaxed text-slate-500 text-center">
            This tool provides data from third-party security providers. 
            SatsTally does not guarantee the safety of any token. Always do your own research (DYOR).
          </p>

        </div>
      </main>
    </div>
  );
}