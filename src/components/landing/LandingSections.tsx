import { Link } from 'react-router-dom'
import { features } from '../../data/siteData'
import { categoryImages, pageImages } from '../../data/images'

const iconPaths = {
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  bolt: 'M13 10V3L4 14h7v7l9-11h-7z',
  chart: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
  lock: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
}

export function FeaturesSection() {
  return (
    <section id="features" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[var(--color-text-heading)] sm:text-3xl">
            Why Choose Crypto Exchange
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--color-text-secondary)]">
            Everything you need to trade, store, and purchase with crypto — all in one platform.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-6 transition-colors hover:border-[var(--color-border-accent)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-bg-hero)]">
                <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPaths[feature.icon]} />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[var(--color-text-heading)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function StatsSection() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 lg:grid-cols-4">
        {[
          { label: 'Daily Volume', value: '$2.4B+' },
          { label: 'Active Users', value: '1.2M+' },
          { label: 'Supported Assets', value: '150+' },
          { label: 'Countries', value: '180+' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-bold text-[var(--color-text-heading)] sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ExchangePreview() {
  return (
    <section id="exchange-preview" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-text-heading)] sm:text-3xl">
              Trade on Our Exchange
            </h2>
            <p className="mt-2 max-w-lg text-[var(--color-text-secondary)]">
              Access deep liquidity, real-time prices, and instant execution across 150+ crypto pairs.
            </p>
            <Link
              to="/exchange"
              className="mt-6 inline-block rounded-lg bg-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Go to Exchange
            </Link>

            <div className="mt-8 grid gap-4 sm:grid-cols-1">
              {[
                { label: 'Spot Trading', desc: 'Buy and sell at market or limit prices' },
                { label: 'Real-Time Data', desc: 'Live order books, bids, and asks' },
                { label: 'Low Fees', desc: 'Starting at 0.1% per trade' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-4"
                >
                  <h3 className="font-semibold text-[var(--color-text-heading)]">{item.label}</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <img
            src={pageImages.exchange}
            alt="Crypto trading charts"
            className="w-full rounded-xl border border-[var(--color-border)] object-cover shadow-[var(--shadow-card)]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export function EscrowPreview() {
  const previewCategories = [
    { title: 'Exotic cars', image: categoryImages.cars },
    { title: 'Watches', image: categoryImages.watches },
    { title: 'Real Estate', image: categoryImages.realEstate },
    { title: 'Domains', image: categoryImages.domains },
  ]

  return (
    <section id="escrow-preview" className="bg-[var(--color-bg-elevated)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-2xl font-bold text-[var(--color-text-heading)] sm:text-3xl">
          Crypto Escrow Marketplace
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[var(--color-text-secondary)]">
          Safely buy exotic cars, watches, real estate, and domains with escrow protection.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {previewCategories.map((cat) => (
            <Link
              key={cat.title}
              to="/marketplace"
              className="group overflow-hidden rounded-lg border border-[var(--color-border)]"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <p className="bg-[var(--color-bg-surface)] py-2 text-sm font-semibold text-[var(--color-text-heading)]">
                {cat.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/escrow"
            className="rounded-lg border border-[var(--color-border-accent)] px-6 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
          >
            Learn About Escrow
          </Link>
          <Link
            to="/marketplace"
            className="rounded-lg bg-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            Browse Marketplace
          </Link>
        </div>
      </div>
    </section>
  )
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[var(--color-text-heading)] sm:text-3xl">
            How It Works
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--color-text-secondary)]">
            Get started in three simple steps and begin your crypto journey today.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {[
            { step: 1, title: 'Create Account', desc: 'Sign up with your email and connect your wallet in seconds.' },
            { step: 2, title: 'Fund & Trade', desc: 'Deposit crypto or fiat and start trading on our exchange.' },
            { step: 3, title: 'Grow Portfolio', desc: 'Track markets, use escrow for purchases, and build wealth.' },
          ].map((item) => (
            <div key={item.step} className="relative text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-lg font-bold text-white">
                {item.step}
              </div>
              <h3 className="mt-4 text-base font-semibold text-[var(--color-text-heading)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaSection() {
  return (
    <section id="get-started" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-6 py-12 text-center sm:px-12">
        <h2 className="text-2xl font-bold text-[var(--color-text-heading)] sm:text-3xl">
          Ready to Start Trading?
        </h2>
        <p className="mt-3 text-[var(--color-text-secondary)]">
          Join over 1.2 million users on the most trusted crypto exchange platform.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/exchange"
            className="w-full rounded-lg bg-[var(--color-accent-yellow)] px-8 py-3 text-sm font-bold text-[var(--color-text-inverse)] transition-colors hover:bg-[var(--color-accent-yellow-hover)] sm:w-auto"
          >
            Start Trading
          </Link>
          <Link
            to="/learning"
            className="w-full rounded-lg border border-[var(--color-border-light)] px-8 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-border-accent)] sm:w-auto"
          >
            Visit Learning Center
          </Link>
        </div>
      </div>
    </section>
  )
}
