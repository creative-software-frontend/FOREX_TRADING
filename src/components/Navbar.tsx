import { NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Exchange', path: '/exchange' },
  { label: 'Escrow', path: '/escrow' },
  { label: 'Marketplace', path: '/marketplace' },
  { label: 'Learning Center', path: '/learning' },
] as const

function Logo() {
  return (
    <NavLink to="/" className="flex shrink-0 items-center gap-2.5">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="18" cy="18" r="16" stroke="var(--color-border-light)" strokeWidth="1.5" />
        <path
          d="M24 14 C20 10, 14 12, 12 18 C10 24, 16 26, 22 22"
          stroke="var(--color-logo-green)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M12 22 C16 26, 22 24, 24 18 C26 12, 20 10, 14 14"
          stroke="var(--color-logo-blue)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <polygon points="22,12 26,14 22,16" fill="var(--color-logo-green)" />
        <polygon points="14,24 10,22 14,20" fill="var(--color-logo-blue)" />
      </svg>
      <span className="text-base font-bold tracking-tight text-[var(--color-text-heading)] sm:text-lg">
        CRYPTO EXCHANGE
      </span>
    </NavLink>
  )
}

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-bg-navbar)] shadow-[var(--shadow-navbar)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[var(--color-text-primary)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            className="hidden items-center gap-1.5 rounded-full bg-[var(--color-accent-orange)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-orange-hover)] sm:flex"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Ask Chatoshi
          </button>

          <a
            href="#login"
            className="hidden text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] sm:block"
          >
            Login
          </a>

          <button
            type="button"
            className="rounded-lg bg-[var(--color-accent-blue)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-blue-hover)]"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  )
}
