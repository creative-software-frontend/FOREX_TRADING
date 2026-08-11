import { categoryImages, cryptoLogos } from './images'

export interface CryptoAsset {
  id: string
  name: string
  symbol: string
  price: number
  change: number
  changePercent: number
  volume24h: number
  bid: number
  ask: number
  timestamp: string
  sparkline: number[]
  iconColor: string
  logoUrl?: string
}

export const cryptoAssets: CryptoAsset[] = [
  {
    id: 'bnb',
    name: 'BNB',
    symbol: 'BNB',
    price: 577.79,
    change: 2.29,
    changePercent: 0.38,
    volume24h: 1_951_527_712.56,
    bid: 577.5,
    ask: 578.08,
    timestamp: 'Aug 11, 2026 4:24 PM',
    sparkline: [560, 565, 562, 570, 568, 575, 572, 578, 576, 577],
    iconColor: '#f3ba2f',
    logoUrl: cryptoLogos.BNB,
  },
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 64_169.1,
    change: -828.87,
    changePercent: -1.28,
    volume24h: 45_234_891_023.45,
    bid: 64_150.0,
    ask: 64_188.2,
    timestamp: 'Aug 11, 2026 4:24 PM',
    sparkline: [65200, 64800, 64500, 64300, 64100, 63900, 64200, 64000, 64150, 64169],
    iconColor: '#f7931a',
    logoUrl: cryptoLogos.BTC,
  },
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3_421.55,
    change: 45.32,
    changePercent: 1.34,
    volume24h: 18_765_432_109.87,
    bid: 3_419.8,
    ask: 3_423.3,
    timestamp: 'Aug 11, 2026 4:24 PM',
    sparkline: [3350, 3360, 3375, 3380, 3390, 3400, 3410, 3415, 3420, 3421],
    iconColor: '#627eea',
    logoUrl: cryptoLogos.ETH,
  },
  {
    id: 'ltc',
    name: 'Litecoin',
    symbol: 'LTC',
    price: 84.32,
    change: -1.15,
    changePercent: -1.35,
    volume24h: 892_345_678.9,
    bid: 84.18,
    ask: 84.46,
    timestamp: 'Aug 11, 2026 4:24 PM',
    sparkline: [86, 85.5, 85, 84.8, 84.5, 84.2, 84.4, 84.1, 84.3, 84.32],
    iconColor: '#345d9d',
    logoUrl: cryptoLogos.LTC,
  },
  {
    id: 'sol',
    name: 'Solana',
    symbol: 'SOL',
    price: 142.67,
    change: 3.21,
    changePercent: 2.3,
    volume24h: 3_456_789_012.34,
    bid: 142.45,
    ask: 142.89,
    timestamp: 'Aug 11, 2026 4:24 PM',
    sparkline: [135, 137, 138, 139, 140, 141, 142, 141.5, 142.2, 142.67],
    iconColor: '#9945ff',
    logoUrl: cryptoLogos.SOL,
  },
  {
    id: 'ton',
    name: 'TON',
    symbol: 'TON',
    price: 5.82,
    change: -0.08,
    changePercent: -1.36,
    volume24h: 234_567_890.12,
    bid: 5.8,
    ask: 5.84,
    timestamp: 'Aug 11, 2026 4:24 PM',
    sparkline: [6.0, 5.95, 5.9, 5.88, 5.85, 5.83, 5.84, 5.81, 5.83, 5.82],
    iconColor: '#0098ea',
    logoUrl: cryptoLogos.TON,
  },
  {
    id: 'trump',
    name: 'TRUMP',
    symbol: 'TRUMP',
    price: 8.45,
    change: 0.52,
    changePercent: 6.56,
    volume24h: 567_890_123.45,
    bid: 8.4,
    ask: 8.5,
    timestamp: 'Aug 11, 2026 4:24 PM',
    sparkline: [7.5, 7.8, 8.0, 7.9, 8.1, 8.2, 8.3, 8.35, 8.4, 8.45],
    iconColor: '#c41e3a',
    logoUrl: cryptoLogos.TRUMP,
  },
]

export interface EscrowCategory {
  id: string
  title: string
  gradient: string
  image?: string
}

export const escrowCategories: EscrowCategory[] = [
  {
    id: 'cars',
    title: 'Exotic cars',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #a855f7 100%)',
    image: categoryImages.cars,
  },
  {
    id: 'watches',
    title: 'Watches',
    gradient: 'linear-gradient(135deg, #78350f 0%, #b45309 50%, #d97706 100%)',
    image: categoryImages.watches,
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #38bdf8 100%)',
    image: categoryImages.realEstate,
  },
  {
    id: 'domains',
    title: 'Domains',
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #60a5fa 100%)',
    image: categoryImages.domains,
  },
]
