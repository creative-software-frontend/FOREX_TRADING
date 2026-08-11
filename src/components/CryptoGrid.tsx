import { useState } from 'react'
import { cryptoAssets } from '../data/cryptoData'
import { PriceCard } from './PriceCard'

export function CryptoGrid() {
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = 4
  const maxStart = Math.max(0, cryptoAssets.length - visibleCount)

  function prev() {
    setStartIndex((index) => Math.max(0, index - 1))
  }

  function next() {
    setStartIndex((index) => Math.min(maxStart, index + 1))
  }

  const visible = cryptoAssets.slice(startIndex, startIndex + visibleCount)

  return (
    <section className="relative -mt-20 px-4 pb-16 sm:-mt-24 sm:px-6 sm:pb-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            disabled={startIndex === 0}
            aria-label="Previous cards"
            className="hidden shrink-0 rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-surface)] p-2 text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-border-accent)] hover:text-[var(--color-text-primary)] disabled:cursor-not-allowed disabled:opacity-40 lg:flex"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {visible.map((asset) => (
              <PriceCard key={asset.id} asset={asset} />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            disabled={startIndex >= maxStart}
            aria-label="Next cards"
            className="hidden shrink-0 rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-surface)] p-2 text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-border-accent)] hover:text-[var(--color-text-primary)] disabled:cursor-not-allowed disabled:opacity-40 lg:flex"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
