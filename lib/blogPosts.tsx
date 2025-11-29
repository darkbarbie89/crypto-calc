// lib/blogPosts.tsx
import type { ReactNode } from "react";
import Link from "next/link";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;      // ISO or readable string
  readTime: string;
  content: ReactNode;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-calculate-crypto-profit-and-loss",
    title: "How to Calculate Crypto Profit and Loss (Without Getting Confused)",
    description:
      "A simple step-by-step guide to calculating crypto PnL and why most traders prefer using a profit/loss calculator.",
    date: "2025-11-21",
    readTime: "7 min read",
    content: (
      <>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          Profit and loss (PnL) is the first thing every trader looks at, but it’s also
          one of the most confusing parts of crypto trading. Different entry prices,
          multiple buys, trading fees and volatility can make it hard to know if you
          actually made money or not.
        </p>

        <h2 className="mt-6 mb-2 text-lg font-semibold text-slate-50">
          The basic PnL formula
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          At its core, profit and loss is simply:
        </p>
        <pre className="mb-4 rounded-lg bg-slate-900 p-3 text-xs text-slate-100">
{`PnL = (Sell Price − Buy Price) × Quantity`}
        </pre>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          For example, if you bought <strong>0.5 BTC at $30,000</strong> and sold at{" "}
          <strong>$38,000</strong>:
        </p>
        <pre className="mb-4 rounded-lg bg-slate-900 p-3 text-xs text-slate-100">
{`PnL = (38,000 − 30,000) × 0.5 = $4,000`}
        </pre>

        <h2 className="mt-6 mb-2 text-lg font-semibold text-slate-50">
          What most traders forget to include
        </h2>
        <p className="mb-2 text-sm leading-relaxed text-slate-300">
          In real trading, your “true” PnL usually isn’t that clean. You often need to
          adjust for:
        </p>
        <ul className="mb-4 list-disc pl-6 text-sm text-slate-300">
          <li>Exchange trading fees (maker/taker)</li>
          <li>Multiple buy orders at different prices (average entry)</li>
          <li>Partial sells instead of one full exit</li>
          <li>Differences between mark price and last traded price</li>
        </ul>

        <h2 className="mt-6 mb-2 text-lg font-semibold text-slate-50">
          Why using a calculator is easier
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          Manually calculating this every time is slow and easy to mess up. A profit/loss
          calculator can:
        </p>
        <ul className="mb-4 list-disc pl-6 text-sm text-slate-300">
          <li>Handle average entry price for you</li>
          <li>Include fees in both entry and exit</li>
          <li>Show ROI and percentage gain/loss instantly</li>
          <li>Let you test “what if I exit at this price?” scenarios</li>
        </ul>

        <h2 className="mt-6 mb-2 text-lg font-semibold text-slate-50">
          Try it with SatsTally
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          Instead of guessing your PnL in a spreadsheet, you can plug your trade into the{" "}
          <Link href="/profit-loss" className="text-indigo-300 underline underline-offset-2">
            SatsTally Profit/Loss Calculator
          </Link>{" "}
          and see your:
        </p>
        <ul className="mb-4 list-disc pl-6 text-sm text-slate-300">
          <li>Net profit or loss after fees</li>
          <li>Percentage gain/loss</li>
          <li>Return on investment (ROI)</li>
          <li>Break-even price</li>
        </ul>
        <p className="text-sm leading-relaxed text-slate-300">
          The more trades you run through a calculator, the better your intuition becomes
          for sizing positions and setting realistic targets.
        </p>
      </>
    ),
  },
  {
    slug: "what-is-dca-and-why-crypto-traders-use-it",
    title: "What Is DCA and Why So Many Crypto Traders Use It",
    description:
      "Dollar Cost Averaging (DCA) is one of the simplest and most powerful strategies in crypto. Here’s how it works and how to test it.",
    date: "2025-11-21",
    readTime: "6 min read",
    content: (
      <>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          Dollar Cost Averaging (DCA) is a strategy where you invest a fixed amount of
          money at regular intervals, regardless of the current price. Instead of trying
          to buy the bottom, you let consistency do the work.
        </p>

        <h2 className="mt-6 mb-2 text-lg font-semibold text-slate-50">
          How DCA works in crypto
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          Imagine you buy <strong>$100 of BTC every week</strong>:
        </p>
        <ul className="mb-4 list-disc pl-6 text-sm text-slate-300">
          <li>When price is high, you buy fewer coins</li>
          <li>When price is low, you buy more coins</li>
          <li>
            Over time, you get an <strong>average entry price</strong> that reflects the
            market, not a single lucky (or unlucky) buy
          </li>
        </ul>

        <h2 className="mt-6 mb-2 text-lg font-semibold text-slate-50">
          Why beginners like DCA
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          DCA is popular because it:
        </p>
        <ul className="mb-4 list-disc pl-6 text-sm text-slate-300">
          <li>Removes the need to perfectly time the market</li>
          <li>Helps avoid emotional “all in” decisions</li>
          <li>Works well with long-term conviction in a project or asset</li>
        </ul>

        <h2 className="mt-6 mb-2 text-lg font-semibold text-slate-50">
          Test DCA before committing real money
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          A DCA calculator lets you answer questions like:
        </p>
        <ul className="mb-4 list-disc pl-6 text-sm text-slate-300">
          <li>What if I invest weekly vs monthly?</li>
          <li>How much would I have after 6, 12, or 24 months?</li>
          <li>What happens if price goes sideways for a year?</li>
        </ul>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          You can try these scenarios in the{" "}
          <Link href="/dca" className="text-indigo-300 underline underline-offset-2">
            SatsTally DCA Calculator
          </Link>{" "}
          and see your average entry price and potential returns.
        </p>
      </>
    ),
  },
  {
    slug: "how-crypto-liquidation-works-and-how-to-avoid-it",
    title: "How Crypto Liquidation Works (and How to Avoid It)",
    description:
      "Leverage can multiply your gains, but liquidation can wipe you out. Learn how liquidation works and how to manage your risk.",
    date: "2025-11-21",
    readTime: "8 min read",
    content: (
      <>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          Liquidation is one of the biggest risks in leveraged crypto trading. When your
          margin is too low to support an open position, the exchange forcibly closes
          your trade to prevent further losses.
        </p>

        <h2 className="mt-6 mb-2 text-lg font-semibold text-slate-50">
          The idea behind liquidation
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          When you trade with leverage, you&apos;re effectively borrowing money from the
          exchange. Your own capital (margin) is the safety buffer. If the market moves
          against you too far, that buffer disappears — and the exchange liquidates your
          position.
        </p>

        <h2 className="mt-6 mb-2 text-lg font-semibold text-slate-50">
          Simple example of liquidation risk
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          If you open a 10× long position, a roughly <strong>10% move against you</strong>{" "}
          could be enough to trigger liquidation, depending on fees and maintenance
          margin. Higher leverage = smaller move required to liquidate you.
        </p>

        <h2 className="mt-6 mb-2 text-lg font-semibold text-slate-50">
          How a liquidation calculator helps
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          A liquidation calculator lets you see:
        </p>
        <ul className="mb-4 list-disc pl-6 text-sm text-slate-300">
          <li>At what price your position would be liquidated</li>
          <li>How changing leverage affects liquidation price</li>
          <li>How much extra margin reduces your risk</li>
        </ul>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          You can experiment safely using the{" "}
          <Link href="/liquidation" className="text-indigo-300 underline underline-offset-2">
            SatsTally Liquidation Calculator
          </Link>{" "}
          before opening any real trades.
        </p>
      </>
    ),
  },
  {
    slug: "how-much-can-you-earn-from-crypto-staking",
    title: "How Much Can You Really Earn From Crypto Staking?",
    description:
      "Staking can be a form of passive income in crypto. Here’s how to estimate real staking rewards using APY and compounding.",
    date: "2025-11-21",
    readTime: "7 min read",
    content: (
      <>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          Staking lets you earn rewards by locking your coins to help secure a network.
          It&apos;s often advertised with attractive APYs, but the real question is:
          how much can you actually earn over time?
        </p>

        <h2 className="mt-6 mb-2 text-lg font-semibold text-slate-50">
          Simple vs. compound staking
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          With simple staking, your rewards are calculated on the original amount only.
          With compound staking, rewards are regularly added to your stake so future
          rewards grow faster.
        </p>

        <h2 className="mt-6 mb-2 text-lg font-semibold text-slate-50">
          Example with 10% APY
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          If you stake <strong>$1,000</strong> at a fixed 10% APY:
        </p>
        <ul className="mb-4 list-disc pl-6 text-sm text-slate-300">
          <li>Simple staking: you earn about $100 per year</li>
          <li>
            Monthly compounding: the effective yield is higher than 10% because rewards
            also start earning
          </li>
        </ul>

        <h2 className="mt-6 mb-2 text-lg font-semibold text-slate-50">
          Use a staking calculator to model scenarios
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          A staking calculator helps you test:
        </p>
        <ul className="mb-4 list-disc pl-6 text-sm text-slate-300">
          <li>Different APYs</li>
          <li>Different staking durations</li>
          <li>Simple vs compound rewards</li>
          <li>Extra contributions over time</li>
        </ul>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          You can explore these options with the{" "}
          <Link href="/staking" className="text-indigo-300 underline underline-offset-2">
            SatsTally Staking Calculator
          </Link>{" "}
          and see how your potential rewards change over months and years.
        </p>
      </>
    ),
  },
];
