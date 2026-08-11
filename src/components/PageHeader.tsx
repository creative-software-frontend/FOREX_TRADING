interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
      <div className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text-heading)] sm:text-4xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-text-secondary)]">
          {description}
        </p>
      </div>
    </div>
  )
}
