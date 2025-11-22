// app/blog/page.tsx
import Link from "next/link";
import { Calculator, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/blogPosts";

export default function BlogIndexPage() {
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-indigo-400">
              BLOG
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Learn crypto strategies before you click “Buy”.
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
              Short, practical articles that match the calculators on CryptoCalcHub —
              profit/loss, DCA, liquidation and staking.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-left transition hover:border-slate-500 hover:bg-slate-900"
              >
                <div>
                  <p className="text-[11px] text-slate-400">
                    {post.date} · {post.readTime}
                  </p>
                  <h2 className="mt-2 text-base font-semibold text-slate-50 sm:text-lg">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {post.description}
                  </p>
                </div>
                <div className="mt-4 text-[11px] font-semibold text-indigo-300">
                  Read article →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
