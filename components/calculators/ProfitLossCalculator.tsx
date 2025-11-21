'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getCryptoPrice, cryptoOptions } from '@/lib/api';

export default function ProfitLossCalculator() {
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0]);
  const [buyPrice, setBuyPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCurrentPrice = async () => {
    setLoading(true);
    const price = await getCryptoPrice(selectedCrypto.id);
    setSellPrice(price.toString());
    setLoading(false);
  };

  const buy = parseFloat(buyPrice) || 0;
  const sell = parseFloat(sellPrice) || 0;
  const qty = parseFloat(amount) || 0;

  const invested = buy * qty;
  const currentValue = sell * qty;
  const profitLoss = currentValue - invested;
  const profitLossPercent = invested > 0 ? (profitLoss / invested) * 100 : 0;

  const chartData = [
    { name: 'Invested', value: invested },
    { name: 'Current', value: currentValue },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>💰 Profit/Loss Calculator</CardTitle>
        <CardDescription>
          Calculate your crypto trading profits with real-time prices
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Crypto Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Select Cryptocurrency
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {cryptoOptions.map((crypto) => (
              <button
                key={crypto.id}
                onClick={() => setSelectedCrypto(crypto)}
                className={`p-3 rounded-lg border transition-all ${
                  selectedCrypto.id === crypto.id
                    ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                    : 'border-white/10 bg-white/5 text-gray-400 hover:border-blue-500/50'
                }`}
              >
                <div className="font-bold">{crypto.symbol}</div>
                <div className="text-xs">{crypto.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            label="Buy Price (USD)"
            type="number"
            placeholder="30000"
            value={buyPrice}
            onChange={(e) => setBuyPrice(e.target.value)}
            step="0.01"
          />

          <div>
            <Input
              label="Sell Price (USD)"
              type="number"
              placeholder="45000"
              value={sellPrice}
              onChange={(e) => setSellPrice(e.target.value)}
              step="0.01"
            />
            <Button
              onClick={fetchCurrentPrice}
              disabled={loading}
              className="mt-2 w-full"
              size="sm"
              variant="outline"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Use Current Price
            </Button>
          </div>

          <Input
            label="Amount"
            type="number"
            placeholder="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            step="0.01"
          />
        </div>

        {/* Results */}
        {invested > 0 && (
          <div className="space-y-6 pt-4 border-t border-white/10">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <div className="text-sm text-gray-400 mb-1">Total Invested</div>
                <div className="text-2xl font-bold text-white">
                  ${invested.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
                <div className="text-sm text-gray-400 mb-1">Current Value</div>
                <div className="text-2xl font-bold text-white">
                  ${currentValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>

              <div className={`p-4 rounded-xl ${profitLoss >= 0 ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'} border`}>
                <div className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                  {profitLoss >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  Profit/Loss
                </div>
                <div className={`text-2xl font-bold ${profitLoss >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {profitLoss >= 0 ? '+' : ''}${profitLoss.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className={`text-sm ${profitLoss >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {profitLoss >= 0 ? '+' : ''}{profitLossPercent.toFixed(2)}%
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                  />
                  <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}