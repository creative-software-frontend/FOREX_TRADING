import { Link } from 'react-router-dom'
import { learningArticles } from '../data/siteData'
import { PageHeader } from '../components/PageHeader'

const categories = ['All', 'Beginner', 'Trading', 'Escrow', 'Security', 'Advanced'] as const

export function LearningPage() {
  return (
    <>
      <PageHeader
        title="Learning Center"
        description="Guides, tutorials, and resources to help you trade crypto safely and confidently."
      />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <button
                key={cat}
                type="button"
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  index === 0
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'border border-[var(--color-border-light)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-accent)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {learningArticles.map((article) => (
              <article
                key={article.id}
                className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] transition-colors hover:border-[var(--color-border-accent)]"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <span className="rounded-full bg-[var(--color-bg-hero)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-primary)]">
                    {article.category}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-[var(--color-text-heading)]">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {article.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-[var(--color-text-muted)]">{article.readTime}</span>
                    <button
                      type="button"
                      className="text-xs font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
                    >
                      Read more →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-8 text-center">
            <h2 className="text-lg font-bold text-[var(--color-text-heading)]">New to crypto?</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-[var(--color-text-secondary)]">
              Start with our beginner guide and learn the fundamentals before you trade.
            </p>
            <Link
              to="/exchange"
              className="mt-6 inline-block rounded-lg bg-[var(--color-accent-blue)] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-blue-hover)]"
            >
              Start Trading
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
