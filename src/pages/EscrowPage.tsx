import { Link } from 'react-router-dom'
import { pageImages } from '../data/images'
import { PageHeader } from '../components/PageHeader'
import { FloatingChatButton } from '../components/FloatingChatButton'

const escrowSteps = [
  {
    step: 1,
    title: 'Agree on Terms',
    description: 'Buyer and seller agree on price and conditions for the item.',
  },
  {
    step: 2,
    title: 'Fund Escrow',
    description: 'Buyer deposits crypto into a secure escrow smart contract.',
  },
  {
    step: 3,
    title: 'Verify Delivery',
    description: 'Seller delivers the item. Buyer inspects and confirms receipt.',
  },
  {
    step: 4,
    title: 'Release Funds',
    description: 'Once confirmed, funds are released to the seller automatically.',
  },
]

export function EscrowPage() {
  return (
    <>
      <PageHeader
        title="Crypto Escrow Service"
        description="Buy high-value items safely. Our escrow holds funds until both parties are satisfied."
      />

      <div className="relative h-48 overflow-hidden sm:h-56">
        <img
          src={pageImages.escrow}
          alt="Secure escrow protection"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
      </div>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-xl font-bold text-[var(--color-text-heading)]">How Escrow Works</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {escrowSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-3 font-semibold text-[var(--color-text-heading)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border border-[var(--color-border)]">
            <div className="grid lg:grid-cols-2">
              <img
                src={pageImages.escrow}
                alt="Escrow marketplace"
                className="h-full min-h-[220px] w-full object-cover"
                loading="lazy"
              />
              <div className="flex flex-col justify-center bg-[var(--color-bg-elevated)] p-8 text-center lg:text-left">
                <h2 className="text-xl font-bold text-[var(--color-text-heading)]">
                  Ready to buy with escrow?
                </h2>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                  Browse luxury listings in our marketplace and purchase with full protection.
                </p>
                <Link
                  to="/marketplace"
                  className="mt-6 inline-block rounded-lg bg-[var(--color-primary)] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)] lg:self-start"
                >
                  Browse Marketplace
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloatingChatButton />
    </>
  )
}
