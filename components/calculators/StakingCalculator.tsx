'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PiggyBank, TrendingUp, Calendar, Coins } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

export default function StakingCalculator() {
  const [stakingAmount, setStakingAmount] = useState('');
  const [apy, setApy] = useState('');
  const [stakingPeriod, setStakingPeriod] = useState('12');
  const [compoundFrequency, setCompoundFrequency] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('daily');

  const principal = parseFloat(stakingAmount) || 0;
  const rate = parseFloat(apy) / 100 || 0;
  const months = parseFloat(stakingPeriod) || 0;

  const compoundsPerYear = {
    daily: 365,
    weekly: 52,
    monthly: 12,
    yearly: 1,
  };

  const n = compoundsPerYear[compoundFrequency];
  const t = months / 12;

  const finalAmount = principal * Math.pow(1 + rate / n, n * t);
  const totalRewards = finalAmount - principal;

  const generateChartData = () => {
    const data = [];
    const dataPoints = Math.min(months, 24);
    
    for (let i = 0; i <= dataPoints; i++) {
      const currentMonths = (i / dataPoints) * months;
      const currentYears = currentMonths / 12;
      const currentAmount = principal * Math.pow(1 + rate / n, n * currentYears);
      const currentRewards = currentAmount - principal;
      
      data.push({
        month: currentMonths.toFixed(1),
        principal: principal,
        staking: currentAmount,
        rewards: currentRewards,
      });
    }
    
    return data;
  };

  const chartData = principal > 0 && rate > 0 ? generateChartData() : [];

  const effectiveAPY = (Math.pow(1 + rate / n, n) - 1) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>🪙 Staking Rewards Calculator</CardTitle>
        <CardDescription>
          Calculate your cryptocurrency staking earnings with compound interest
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Staking Amount (USD or Coins)"
            type="number"
            placeholder="10000"
            value={stakingAmount}
            onChange={(e) => setStakingAmount(e.target.value)}
            step="0.01"
          />

          <Input
            label="Annual Percentage Yield (APY %)"
            type="number"
            placeholder="5.5"
            value={apy}
            onChange={(e) => setApy(e.target.value)}
            step="0.1"
          />
        </div>

        <Input
          label="Staking Period (Months)"
          type="number"
          placeholder="12"
          value={stakingPeriod}
          onChange={(e) => setStakingPeriod(e.target.value)}
          step="1"
          min="1"
        />

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Compound Frequency
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {(['daily', 'weekly', 'monthly', 'yearly'] as const).map((freq) => (
              <button
                key={freq}
                onClick={() => setCompoundFrequency(freq)}
                className={`p-3 rounded-lg border transition-all capitalize ${
                  compoundFrequency === freq
                    ? 'border-green-500 bg-green-500/20 text-green-400'
                    : 'border-white/10 bg-white/5 text-gray-400 hover:border-green-500/50'
                }`}
              >
                {freq}
              </button>
            ))}
          </div>
        </div>

        {principal > 0 && rate > 0 && (
          <div className="space-y-6 pt-4 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Coins className="h-4 w-4" />
                  <span>Total Staking Rewards</span>
                </div>
                <div className="text-4xl font-bold text-green-400 mb-1">
                  ${totalRewards.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="text-sm text-gray-400">
                  From staking rewards only
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Final Portfolio Value</span>
                </div>
                <div className="text-4xl font-bold text-purple-400 mb-1">
                  ${finalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="text-sm text-gray-400">
                  Principal + Rewards
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-gray-400 mb-1">Initial Stake</div>
                <div className="text-xl font-bold text-white">
                  ${principal.toLocaleString()}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-gray-400 mb-1">Staking Period</div>
                <div className="text-xl font-bold text-white">
                  {months} {months === 1 ? 'Month' : 'Months'}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-gray-400 mb-1">Effective APY</div>
                <div className="text-xl font-bold text-green-400">
                  {effectiveAPY.toFixed(2)}%
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-gray-400 mb-1">ROI</div>
                <div className="text-xl font-bold text-cyan-400">
                  {((totalRewards / principal) * 100).toFixed(2)}%
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Portfolio Growth Over Time</h4>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="month" 
                      stroke="#9ca3af"
                      label={{ value: 'Months', position: 'insideBottom', offset: -5, fill: '#9ca3af' }}
                    />
                    <YAxis 
                      stroke="#9ca3af"
                      label={{ value: 'Value (USD)', angle: -90, position: 'insideLeft', fill: '#9ca3af' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1f2937',
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#fff'
                      }}
                      formatter={(value: number) => [`$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, '']}
                    />
                    <Area
                      type="monotone"
                      dataKey="principal"
                      stackId="1"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.6}
                      name="Principal"
                    />
                    <Area
                      type="monotone"
                      dataKey="rewards"
                      stackId="1"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.6}
                      name="Staking Rewards"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
              <h4 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                <PiggyBank className="h-4 w-4" />
                About Staking
              </h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• <span className="text-white">Compound Interest:</span> Earnings are reinvested automatically</li>
                <li>• <span className="text-white">APY vs APR:</span> APY includes compound interest effects</li>
                <li>• <span className="text-white">Lock-up Periods:</span> Some staking requires locked coins</li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}