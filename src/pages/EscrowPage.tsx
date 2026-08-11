import { Link } from 'react-router-dom'
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

          <div className="mt-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-8 text-center">
            <h2 className="text-xl font-bold text-[var(--color-text-heading)]">
              Ready to buy with escrow?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-[var(--color-text-secondary)]">
              Browse luxury listings in our marketplace and purchase with full protection.
            </p>
            <Link
              to="/marketplace"
              className="mt-6 inline-block rounded-lg bg-[var(--color-primary)] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Browse Marketplace
            </Link>
          </div>
        </div>
      </section>

      <FloatingChatButton />
    </>
  )
}
