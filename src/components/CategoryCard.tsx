import type { EscrowCategory } from '../data/cryptoData'

interface CategoryCardProps {
  category: EscrowCategory
  selected?: boolean
  onSelect?: () => void
}

export function CategoryCard({ category, selected, onSelect }: CategoryCardProps) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onSelect?.()
        }
      }}
      className={`group cursor-pointer outline-none ${
        selected ? 'ring-2 ring-[var(--color-primary)] ring-offset-2 ring-offset-[var(--color-bg)]' : ''
      }`}
    >
      <div className="aspect-[4/3] overflow-hidden rounded-lg border border-[var(--color-border)] transition-transform group-hover:scale-[1.02]">
        {category.image ? (
          <img
            src={category.image}
            alt={category.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full" style={{ background: category.gradient }} />
        )}
      </div>
      <h3 className="mt-4 text-center text-base font-bold text-[var(--color-text-heading)] sm:text-lg">
        {category.title}
      </h3>
    </article>
  )
}
