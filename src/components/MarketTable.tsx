import { cryptoAssets } from '../data/cryptoData'
import { CryptoIcon } from './CryptoIcon'
import { PriceChange } from './PriceChange'

function formatNumber(value: number): string {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function MarketTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] shadow-[var(--shadow-card)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--color-bg-ticker)] text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-text-heading)]">
              <th className="px-5 py-3.5">Market</th>
              <th className="px-5 py-3.5">Last Price</th>
              <th className="px-5 py-3.5">Change</th>
              <th className="px-5 py-3.5">24Hr Volume</th>
              <th className="px-5 py-3.5">Bid</th>
              <th className="px-5 py-3.5">Ask</th>
              <th className="px-5 py-3.5 text-center">Trade</th>
            </tr>
          </thead>
          <tbody>
            {cryptoAssets.map((asset) => (
              <tr
                key={asset.id}
                className="border-t border-[var(--color-border)] transition-colors hover:bg-[var(--color-bg-elevated)]"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <CryptoIcon symbol={asset.symbol} color={asset.iconColor} logoUrl={asset.logoUrl} size="sm" />
                    <span className="font-medium text-[var(--color-text-heading)]">
                      {asset.name}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4 font-medium text-[var(--color-text-heading)]">
                  {formatNumber(asset.price)}
                </td>
                <td className="px-5 py-4">
                  <PriceChange changePercent={asset.changePercent} />
                </td>
                <td className="px-5 py-4 text-[var(--color-text-secondary)]">
                  {formatNumber(asset.volume24h)}
                </td>
                <td className="px-5 py-4 text-[var(--color-text-secondary)]">
                  {formatNumber(asset.bid)}
                </td>
                <td className="px-5 py-4 text-[var(--color-text-secondary)]">
                  {formatNumber(asset.ask)}
                </td>
                <td className="px-5 py-4 text-center">
                  <button
                    type="button"
                    className="rounded-md bg-[var(--color-primary)] px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
                  >
                    Exchange
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
