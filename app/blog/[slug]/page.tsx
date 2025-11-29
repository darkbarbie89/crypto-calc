import Link from "next/link";
import { Calculator, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/blogPosts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: PageProps) {
  // ✅ unwrap the params Promise
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-50">
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
              href="/blog"
              className="flex items-center gap-1 text-xs text-slate-300 hover:text-slate-100"
            >
              <ArrowLeft className="h-3 w-3" />
              Back to blog
            </Link>
          </div>
        </header>

        <main className="py-10 sm:py-12 lg:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-slate-50">
              Post not found
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              No blog post was found for slug:{" "}
              <span className="font-mono text-indigo-300">{slug}</span>
            </p>
          </div>
        </main>
      </div>
    );
  }

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
            href="/blog"
            className="flex items-center gap-1 text-xs text-slate-300 hover:text-slate-100"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to blog
          </Link>
        </div>
      </header>

      <main className="py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] text-slate-400">
            {post.date} · {post.readTime}
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            {post.description}
          </p>

          <div className="mt-8 border-t border-slate-800 pt-6 text-sm leading-relaxed text-slate-200 sm:text-base">
            {post.content}
          </div>

          <div className="mt-10 flex justify-between border-t border-slate-800 pt-4 text-[11px] text-slate-400">
            <Link href="/" className="hover:text-slate-200">
              ← Back to home
            </Link>
            <Link href="/blog" className="hover:text-slate-200">
              View all articles →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
