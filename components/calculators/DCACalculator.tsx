'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Calendar, DollarSign, TrendingUp, Coins } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

export default function DCACalculator() {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [frequency, setFrequency] = useState<'daily' | 'weekly' | 'monthly'>('weekly');
  const [duration, setDuration] = useState('');
  const [startPrice, setStartPrice] = useState('');
  const [endPrice, setEndPrice] = useState('');

  const amount = parseFloat(investmentAmount) || 0;
  const durationMonths = parseFloat(duration) || 0;
  const priceStart = parseFloat(startPrice) || 0;
  const priceEnd = parseFloat(endPrice) || 0;

  const purchasesPerMonth = frequency === 'daily' ? 30 : frequency === 'weekly' ? 4 : 1;
  const totalPurchases = Math.floor(durationMonths * purchasesPerMonth);
  const totalInvested = amount * totalPurchases;

  const generatePriceData = () => {
    const data = [];
    let cumulativeCoins = 0;
    let cumulativeInvested = 0;
    
    for (let i = 0; i <= totalPurchases; i++) {
      const progress = i / totalPurchases;
      const basePrice = priceStart + (priceEnd - priceStart) * progress;
      const volatility = basePrice * 0.15 * Math.sin(i * 0.5) * Math.random();
      const currentPrice = basePrice + volatility;
      
      if (i > 0) {
        const coinsThisPurchase = amount / currentPrice;
        cumulativeCoins += coinsThisPurchase;
        cumulativeInvested += amount;
      }
      
      data.push({
        purchase: i,
        price: currentPrice,
        totalCoins: cumulativeCoins,
        totalInvested: cumulativeInvested,
        portfolioValue: cumulativeCoins * currentPrice,
        averagePrice: cumulativeInvested > 0 ? cumulativeInvested / cumulativeCoins : 0,
      });
    }
    return data;
  };

  const chartData = totalPurchases > 0 && priceStart > 0 && priceEnd > 0 ? generatePriceData() : [];
  const finalData = chartData[chartData.length - 1];
  
  const totalCoins = finalData?.totalCoins || 0;
  const averagePrice = finalData?.averagePrice || 0;
  const currentValue = totalCoins * priceEnd;
  const profit = currentValue - totalInvested;
  const roi = totalInvested > 0 ? (profit / totalInvested) * 100 : 0;

  const frequencyText = {
    daily: 'Daily',
    weekly: 'Weekly',
    monthly: 'Monthly',
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>📊 DCA Calculator</CardTitle>
        <CardDescription>
          Calculate your Dollar Cost Averaging strategy returns
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Investment Amount per Purchase (USD)"
            type="number"
            placeholder="100"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(e.target.value)}
            step="1"
          />

          <Input
            label="Duration (Months)"
            type="number"
            placeholder="12"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            step="1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Purchase Frequency
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['daily', 'weekly', 'monthly'] as const).map((freq) => (
              <button
                key={freq}
                onClick={() => setFrequency(freq)}
                className={`p-3 rounded-lg border transition-all capitalize ${
                  frequency === freq
                    ? 'border-purple-500 bg-purple-500/20 text-purple-400'
                    : 'border-white/10 bg-white/5 text-gray-400 hover:border-purple-500/50'
                }`}
              >
                {freq}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Starting Price (USD)"
            type="number"
            placeholder="30000"
            value={startPrice}
            onChange={(e) => setStartPrice(e.target.value)}
            step="0.01"
          />

          <Input
            label="Ending Price (USD)"
            type="number"
            placeholder="45000"
            value={endPrice}
            onChange={(e) => setEndPrice(e.target.value)}
            step="0.01"
          />
        </div>

        {totalInvested > 0 && totalCoins > 0 && (
          <div className="space-y-6 pt-4 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                  <Calendar className="h-4 w-4" />
                  <span>Total Purchases</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {totalPurchases}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                  <DollarSign className="h-4 w-4" />
                  <span>Total Invested</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  ${totalInvested.toLocaleString()}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                  <Coins className="h-4 w-4" />
                  <span>Total Coins</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {totalCoins.toFixed(4)}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                  <TrendingUp className="h-4 w-4" />
                  <span>Avg Price</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  ${averagePrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                <div className="text-sm text-gray-400 mb-1">Current Portfolio Value</div>
                <div className="text-3xl font-bold text-white mb-2">
                  ${currentValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                <div className="text-sm text-gray-400 mb-1">Total Profit/Loss</div>
                <div className={`text-3xl font-bold mb-2 ${profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {profit >= 0 ? '+' : ''}${profit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className={`text-sm ${roi >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {roi >= 0 ? '+' : ''}{roi.toFixed(2)}% ROI
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}