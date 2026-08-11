import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { escrowCategories } from '../data/cryptoData'
import { marketplaceListings } from '../data/siteData'
import { CategoryCard } from '../components/CategoryCard'
import { ListingCard } from '../components/ListingCard'
import { FloatingChatButton } from '../components/FloatingChatButton'

export function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const listingsRef = useRef<HTMLDivElement>(null)

  const filteredListings = activeCategory
    ? marketplaceListings.filter(
        (listing) =>
          escrowCategories.find((c) => c.id === activeCategory)?.title === listing.category,
      )
    : marketplaceListings

  function scrollToListings(categoryId?: string) {
    if (categoryId) setActiveCategory(categoryId)
    listingsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text-heading)] sm:text-4xl lg:text-[2.5rem]">
            First Ever Crypto Escrow Marketplace
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-text-secondary)] sm:text-lg">
            Use Crypto Exchange&apos;s Escrow service to safely purchase in our marketplace.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {escrowCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                selected={activeCategory === category.id}
                onSelect={() => scrollToListings(category.id)}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToListings()}
            className="mt-12 rounded-lg bg-[var(--color-primary)] px-10 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            Start buying now
          </button>
        </div>
      </section>

      <section
        ref={listingsRef}
        className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold text-[var(--color-text-heading)]">
                {activeCategory
                  ? escrowCategories.find((c) => c.id === activeCategory)?.title
                  : 'All Listings'}
              </h2>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                {filteredListings.length} item{filteredListings.length !== 1 ? 's' : ''} available
              </p>
            </div>

            {activeCategory && (
              <button
                type="button"
                onClick={() => setActiveCategory(null)}
                className="text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
              >
                Show all categories
              </button>
            )}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/escrow"
              className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              Learn how escrow protects your purchase &rarr;
            </Link>
          </div>
        </div>
      </section>

      <FloatingChatButton />
    </>
  )
}
