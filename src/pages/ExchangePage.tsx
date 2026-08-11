import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { MarketTable } from '../components/MarketTable'

export function ExchangePage() {
  return (
    <>
      <PageHeader
        title="Exchange"
        description="Trade crypto with real-time prices, deep liquidity, and low fees across 150+ markets."
      />
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MarketTable />
          <div className="mt-8 flex flex-wrap gap-4">
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
