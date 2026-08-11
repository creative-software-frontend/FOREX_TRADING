export function TickerBar() {
  return (
    <div className="bg-[var(--color-bg-ticker)] border-b border-[var(--color-border)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-1 font-medium text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-text-secondary)]"
          >
            BTC / USD
            <svg className="h-3.5 w-3.5 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <span className="font-semibold text-[var(--color-text-heading)]">64,169.10</span>
          <span className="font-medium text-[var(--color-danger)]">-1.28%</span>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
        >
          Currency: USD
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
