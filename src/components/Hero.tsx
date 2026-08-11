import { useState, type FormEvent } from 'react'
import { signupSchema } from '../schemas/signupSchema'

export function Hero() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setSuccess(false)

    const result = signupSchema.safeParse({ email })

    if (!result.success) {
      setError(result.error.issues[0]?.message ?? 'Invalid email')
      return
    }

    setSuccess(true)
    setEmail('')
  }

  return (
    <section className="relative bg-[var(--color-bg-hero)] pb-28 pt-16 sm:pb-36 sm:pt-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, var(--color-primary) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--color-text-heading)] sm:text-5xl lg:text-6xl">
          Buy, Sell, Trade Crypto.
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 max-w-xl"
          noValidate
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:rounded-full sm:bg-[var(--color-input-bg)] sm:p-1.5 sm:shadow-lg">
            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setError(null)
                setSuccess(false)
              }}
              placeholder="Email address"
              aria-label="Email address"
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'email-error' : success ? 'email-success' : undefined}
              className={`flex-1 rounded-full border bg-[var(--color-input-bg)] px-5 py-3.5 text-[var(--color-input-text)] placeholder:text-[var(--color-input-placeholder)] outline-none transition-shadow focus:ring-2 focus:ring-[var(--color-primary)] sm:border-0 ${
                error ? 'border-[var(--color-input-error)]' : 'border-[var(--color-border-light)]'
              }`}
            />
            <button
              type="submit"
              className="rounded-full bg-[var(--color-accent-yellow)] px-8 py-3.5 text-sm font-bold text-[var(--color-text-inverse)] transition-colors hover:bg-[var(--color-accent-yellow-hover)] sm:shrink-0"
            >
              Sign Up
            </button>
          </div>

          {error && (
            <p id="email-error" role="alert" className="mt-2 text-left text-sm text-[var(--color-input-error)] sm:pl-5">
              {error}
            </p>
          )}

          {success && (
            <p id="email-success" className="mt-2 text-left text-sm text-[var(--color-success)] sm:pl-5">
              You&apos;re signed up! Check your inbox.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
