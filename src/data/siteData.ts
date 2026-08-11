export interface Feature {
  id: string
  title: string
  description: string
  icon: 'shield' | 'bolt' | 'chart' | 'lock'
}

export const features: Feature[] = [
  {
    id: 'security',
    title: 'Bank-Grade Security',
    description: 'Multi-layer encryption and cold storage protect your assets around the clock.',
    icon: 'shield',
  },
  {
    id: 'speed',
    title: 'Lightning Fast Trades',
    description: 'Execute orders in milliseconds with our high-performance matching engine.',
    icon: 'bolt',
  },
  {
    id: 'fees',
    title: 'Low Trading Fees',
    description: 'Competitive fees starting at 0.1% so you keep more of your profits.',
    icon: 'chart',
  },
  {
    id: 'escrow',
    title: 'Secure Escrow',
    description: 'Buy luxury goods safely with our trusted crypto escrow marketplace.',
    icon: 'lock',
  },
]

export const platformStats = [
  { label: 'Daily Volume', value: '$2.4B+' },
  { label: 'Active Users', value: '1.2M+' },
  { label: 'Supported Assets', value: '150+' },
  { label: 'Countries', value: '180+' },
]

export interface MarketplaceListing {
  id: string
  title: string
  category: string
  price: number
  currency: string
  seller: string
  image: string
}

export const marketplaceListings: MarketplaceListing[] = [
  {
    id: '1',
    title: '2024 McLaren 720S',
    category: 'Exotic cars',
    price: 285_000,
    currency: 'USD',
    seller: 'LuxAuto',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop',
  },
  {
    id: '2',
    title: 'Rolex Daytona Gold',
    category: 'Watches',
    price: 42_500,
    currency: 'USD',
    seller: 'TimeVault',
    image: 'https://images.unsplash.com/photo-1587836374828-707223574208?w=800&h=500&fit=crop',
  },
  {
    id: '3',
    title: 'Modern Villa — Miami',
    category: 'Real Estate',
    price: 2_450_000,
    currency: 'USD',
    seller: 'PrimeEstates',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=500&fit=crop',
  },
  {
    id: '4',
    title: 'crypto.exchange',
    category: 'Domains',
    price: 15_000,
    currency: 'USD',
    seller: 'DomainHub',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
  },
  {
    id: '5',
    title: 'Lamborghini Huracán',
    category: 'Exotic cars',
    price: 198_000,
    currency: 'USD',
    seller: 'SuperCarDeals',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop',
  },
  {
    id: '6',
    title: 'Patek Philippe Nautilus',
    category: 'Watches',
    price: 125_000,
    currency: 'USD',
    seller: 'EliteWatches',
    image: 'https://images.unsplash.com/photo-1524593368744-ae489c712385?w=800&h=500&fit=crop',
  },
]

export interface LearningArticle {
  id: string
  title: string
  description: string
  category: string
  readTime: string
  image: string
}

export const learningArticles: LearningArticle[] = [
  {
    id: '1',
    title: 'Getting Started with Crypto Trading',
    description: 'Learn the basics of buying, selling, and storing cryptocurrency safely.',
    category: 'Beginner',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1621761190629-4f7d33d04506?w=600&h=340&fit=crop',
  },
  {
    id: '2',
    title: 'Understanding Market Orders vs Limit Orders',
    description: 'Master order types to trade more effectively on the exchange.',
    category: 'Trading',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=340&fit=crop',
  },
  {
    id: '3',
    title: 'How Crypto Escrow Works',
    description: 'A complete guide to using escrow for high-value marketplace purchases.',
    category: 'Escrow',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1563013547-824ae1b704d3?w=600&h=340&fit=crop',
  },
  {
    id: '4',
    title: 'Wallet Security Best Practices',
    description: 'Protect your assets with these essential security tips.',
    category: 'Security',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=340&fit=crop',
  },
  {
    id: '5',
    title: 'Reading Candlestick Charts',
    description: 'Analyze price action and identify trends like a pro trader.',
    category: 'Trading',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=340&fit=crop',
  },
  {
    id: '6',
    title: 'DeFi vs Centralized Exchange',
    description: 'Compare decentralized and centralized platforms to find your fit.',
    category: 'Advanced',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=340&fit=crop',
  },
]
