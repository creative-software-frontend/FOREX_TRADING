import { Link } from 'react-router-dom'
import { pageImages } from '../data/images'
import { PageHeader } from '../components/PageHeader'
import { MarketTable } from '../components/MarketTable'

export function ExchangePage() {
  return (
    <>
      <PageHeader
        title="Exchange"
        description="Trade crypto with real-time prices, deep liquidity, and low fees across 150+ markets."
      />
      <div className="relative h-48 overflow-hidden sm:h-56">
        <img
          src={pageImages.exchange}
          alt="Trading dashboard"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
      </div>
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MarketTable />
          <div className="mt-8">
            <Link
              to="/"
              className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
