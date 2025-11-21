'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { AlertTriangle, TrendingDown, Shield } from 'lucide-react';

export default function LiquidationCalculator() {
  const [entryPrice, setEntryPrice] = useState('');
  const [leverage, setLeverage] = useState('10');
  const [positionType, setPositionType] = useState<'long' | 'short'>('long');
  const [maintenanceMargin, setMaintenanceMargin] = useState('0.4');
  const [positionSize, setPositionSize] = useState('');

  const entry = parseFloat(entryPrice) || 0;
  const lev = parseFloat(leverage) || 1;
  const maintenance = parseFloat(maintenanceMargin) / 100 || 0.004;
  const size = parseFloat(positionSize) || 0;

  let liquidationPrice = 0;
  let distanceToLiquidation = 0;

  if (entry > 0 && lev > 0) {
    if (positionType === 'long') {
      liquidationPrice = entry * (1 - (1 / lev) + maintenance);
      distanceToLiquidation = ((entry - liquidationPrice) / entry) * 100;
    } else {
      liquidationPrice = entry * (1 + (1 / lev) - maintenance);
      distanceToLiquidation = ((liquidationPrice - entry) / entry) * 100;
    }
  }

  const initialMargin = size / lev;
  const positionValue = size;
  const maxLoss = initialMargin;

  const getRiskLevel = () => {
    if (lev <= 5) return { text: 'Low Risk', color: 'green', bgColor: 'from-green-500/20 to-emerald-500/20', borderColor: 'border-green-500/30' };
    if (lev <= 10) return { text: 'Medium Risk', color: 'yellow', bgColor: 'from-yellow-500/20 to-orange-500/20', borderColor: 'border-yellow-500/30' };
    if (lev <= 20) return { text: 'High Risk', color: 'orange', bgColor: 'from-orange-500/20 to-red-500/20', borderColor: 'border-orange-500/30' };
    return { text: 'Extreme Risk', color: 'red', bgColor: 'from-red-500/20 to-red-600/20', borderColor: 'border-red-500/30' };
  };

  const riskLevel = getRiskLevel();

  const getRiskGaugeAngle = () => {
    const maxLeverage = 50;
    const normalizedLev = Math.min(lev, maxLeverage);
    return (normalizedLev / maxLeverage) * 180;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>⚠️ Liquidation Calculator</CardTitle>
        <CardDescription>
          Calculate your liquidation price for leverage trading positions
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Position Type
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setPositionType('long')}
              className={`p-3 rounded-lg border transition-all ${
                positionType === 'long'
                  ? 'border-green-500 bg-green-500/20 text-green-400'
                  : 'border-white/10 bg-white/5 text-gray-400 hover:border-green-500/50'
              }`}
            >
              <div className="font-bold">Long (Buy)</div>
              <div className="text-xs opacity-70">Profit when price rises</div>
            </button>
            <button
              onClick={() => setPositionType('short')}
              className={`p-3 rounded-lg border transition-all ${
                positionType === 'short'
                  ? 'border-red-500 bg-red-500/20 text-red-400'
                  : 'border-white/10 bg-white/5 text-gray-400 hover:border-red-500/50'
              }`}
            >
              <div className="font-bold">Short (Sell)</div>
              <div className="text-xs opacity-70">Profit when price falls</div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Entry Price (USD)"
            type="number"
            placeholder="50000"
            value={entryPrice}
            onChange={(e) => setEntryPrice(e.target.value)}
            step="0.01"
          />

          <Input
            label="Position Size (USD)"
            type="number"
            placeholder="10000"
            value={positionSize}
            onChange={(e) => setPositionSize(e.target.value)}
            step="1"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              label={`Leverage (${lev}x)`}
              type="range"
              min="1"
              max="50"
              value={leverage}
              onChange={(e) => setLeverage(e.target.value)}
              step="1"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1x</span>
              <span>25x</span>
              <span>50x</span>
            </div>
          </div>

          <Input
            label="Maintenance Margin (%)"
            type="number"
            placeholder="0.4"
            value={maintenanceMargin}
            onChange={(e) => setMaintenanceMargin(e.target.value)}
            step="0.1"
          />
        </div>

        {entry > 0 && liquidationPrice > 0 && (
          <div className="space-y-6 pt-4 border-t border-white/10">
            <div className={`p-4 rounded-xl bg-gradient-to-br ${riskLevel.bgColor} border ${riskLevel.borderColor}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AlertTriangle className={`h-6 w-6 text-${riskLevel.color}-400`} />
                  <div>
                    <div className={`text-lg font-bold text-${riskLevel.color}-400`}>
                      {riskLevel.text}
                    </div>
                    <div className="text-sm text-gray-400">
                      {lev}x Leverage
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold text-${riskLevel.color}-400`}>
                    {distanceToLiquidation.toFixed(2)}%
                  </div>
                  <div className="text-xs text-gray-400">to liquidation</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30">
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <TrendingDown className="h-4 w-4" />
                <span>Liquidation Price</span>
              </div>
              <div className="text-4xl font-bold text-red-400 mb-2">
                ${liquidationPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <div className="text-sm text-gray-400">
                Your position will be liquidated if price {positionType === 'long' ? 'falls' : 'rises'} to this level
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-gray-400 mb-1">Entry Price</div>
                <div className="text-xl font-bold text-white">
                  ${entry.toLocaleString()}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-gray-400 mb-1">Position Value</div>
                <div className="text-xl font-bold text-white">
                  ${positionValue.toLocaleString()}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-gray-400 mb-1">Initial Margin</div>
                <div className="text-xl font-bold text-white">
                  ${initialMargin.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
              <h4 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Safety Tips
              </h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Use stop-loss orders to limit potential losses</li>
                <li>• Never risk more than you can afford to lose</li>
                <li>• Lower leverage = safer trading with more room for error</li>
                <li>• Monitor your position regularly, especially in volatile markets</li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}