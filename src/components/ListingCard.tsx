import type { MarketplaceListing } from '../data/siteData'

interface ListingCardProps {
  listing: MarketplaceListing
}

function formatPrice(price: number): string {
  return price.toLocaleString('en-US')
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] transition-transform hover:-translate-y-0.5">
      <img
        src={listing.image}
        alt={listing.title}
        className="aspect-[16/10] w-full object-cover"
        loading="lazy"
      />
      <div className="p-5">
        <span className="text-xs font-medium text-[var(--color-primary)]">{listing.category}</span>
        <h3 className="mt-1 font-semibold text-[var(--color-text-heading)]">{listing.title}</h3>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">Seller: {listing.seller}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-lg font-bold text-[var(--color-text-heading)]">
            ${formatPrice(listing.price)}
          </p>
          <button
            type="button"
            className="shrink-0 rounded-md bg-[var(--color-primary)] px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            Buy with Escrow
          </button>
        </div>
      </div>
    </article>
  )
}
