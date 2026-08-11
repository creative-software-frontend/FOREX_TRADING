interface CryptoIconProps {
  symbol: string
  color: string
  logoUrl?: string
  size?: 'sm' | 'md'
}

export function CryptoIcon({ symbol, color, logoUrl, size = 'md' }: CryptoIconProps) {
  const dimensions = size === 'sm' ? 'h-7 w-7' : 'h-8 w-8'

  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt={`${symbol} logo`}
        className={`${dimensions} shrink-0 rounded-full object-cover`}
      />
    )
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-bold text-white ${dimensions} ${size === 'sm' ? 'text-xs' : 'text-sm'}`}
      style={{ backgroundColor: color }}
      aria-hidden="true"
    >
      {symbol.slice(0, 1)}
    </div>
  )
}
