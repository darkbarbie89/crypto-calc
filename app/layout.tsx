import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CryptoCalcHub - Professional Crypto Calculators",
  description: "Advanced cryptocurrency calculators including Profit/Loss, DCA, Liquidation, and Staking calculators with real-time prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}