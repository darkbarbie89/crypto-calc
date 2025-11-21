// CoinGecko API functions
export async function getCryptoPrice(coinId: string): Promise<number> {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`,
      { next: { revalidate: 60 } }
    );
    const data = await response.json();
    return data[coinId]?.usd || 0;
  } catch (error) {
    console.error('Error fetching crypto price:', error);
    return 0;
  }
}

export const cryptoOptions = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC' },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH' },
  { id: 'binancecoin', name: 'BNB', symbol: 'BNB' },
  { id: 'ripple', name: 'XRP', symbol: 'XRP' },
  { id: 'cardano', name: 'Cardano', symbol: 'ADA' },
  { id: 'solana', name: 'Solana', symbol: 'SOL' },
  { id: 'polkadot', name: 'Polkadot', symbol: 'DOT' },
  { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE' },
  { id: 'avalanche-2', name: 'Avalanche', symbol: 'AVAX' },
  { id: 'polygon', name: 'Polygon', symbol: 'MATIC' },
];