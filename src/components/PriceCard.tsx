import type { CryptoAsset } from '../data/cryptoData'
import { CryptoIcon } from './CryptoIcon'
import { Sparkline } from './Sparkline'

interface PriceCardProps {
  asset: CryptoAsset
}

function formatPrice(price: number): string {
  return price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

function formatVolume(volume: number): string {
  return volume.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function PriceCard({ asset }: PriceCardProps) {
  const isPositive = asset.change >= 0

  return (
    <article className="flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-5 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5">
      <header className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <CryptoIcon symbol={asset.symbol} color={asset.iconColor} />
          <div className="text-left">
            <p className="text-sm font-semibold text-[var(--color-text-heading)]">
              {asset.name}
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">{asset.timestamp}</p>
          </div>
        </div>
        <button
          type="button"
          className="rounded-md border border-[var(--color-border-accent)] px-3 py-1 text-xs font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-text-primary)]"
        >
          Exchange
        </button>
      </header>

      <div className="mb-3 text-left">
        <p className="text-2xl font-bold tracking-tight text-[var(--color-text-heading)]">
          {formatPrice(asset.price)}
        </p>
        <p
          className={`mt-1 text-sm font-medium ${
            isPositive ? 'text-[var(--color-success)]' : 'text-[var(--color-danger)]'
          }`}
        >
          {isPositive ? '+' : ''}
          {formatPrice(Math.abs(asset.change))} ({asset.changePercent > 0 ? '+' : ''}
          {asset.changePercent.toFixed(2)}%)
        </p>
      </div>

      <div className="mb-4">
        <Sparkline data={asset.sparkline} />
      </div>

      <footer className="mt-auto text-left">
        <p className="text-xs text-[var(--color-text-muted)]">
          24h volume:{' '}
          <span className="font-medium text-[var(--color-text-secondary)]">
            {formatVolume(asset.volume24h)}
          </span>
        </p>
      </footer>
    </article>
  )
}
