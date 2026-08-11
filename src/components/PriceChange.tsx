interface PriceChangeProps {
  changePercent: number
}

export function PriceChange({ changePercent }: PriceChangeProps) {
  const isPositive = changePercent >= 0

  return (
    <span
      className={`inline-flex items-center gap-1 font-medium ${
        isPositive ? 'text-[var(--color-success)]' : 'text-[var(--color-danger)]'
      }`}
    >
      <svg
        className={`h-3.5 w-3.5 ${isPositive ? '' : 'rotate-180'}`}
        viewBox="0 0 12 12"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M6 2L10 8H2L6 2Z" />
      </svg>
      {isPositive ? '+' : ''}
      {changePercent.toFixed(2)}%
    </span>
  )
}
