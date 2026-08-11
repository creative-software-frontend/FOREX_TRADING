import { Link } from 'react-router-dom'

const footerLinks = {
  Products: [
    { label: 'Exchange', path: '/exchange' },
    { label: 'Escrow', path: '/escrow' },
    { label: 'Marketplace', path: '/marketplace' },
    { label: 'Learning Center', path: '/learning' },
  ],
  Company: [
    { label: 'About Us', path: '/' },
    { label: 'Careers', path: '/' },
    { label: 'Press', path: '/' },
    { label: 'Blog', path: '/learning' },
  ],
  Legal: [
    { label: 'Terms of Service', path: '/' },
    { label: 'Privacy Policy', path: '/' },
    { label: 'Cookie Policy', path: '/' },
    { label: 'Compliance', path: '/' },
  ],
  Support: [
    { label: 'Help Center', path: '/learning' },
    { label: 'Contact Us', path: '/' },
    { label: 'API Docs', path: '/' },
    { label: 'Status', path: '/' },
  ],
} as const

const socialLinks = [
  { label: 'Twitter', href: '#twitter' },
  { label: 'Discord', href: '#discord' },
  { label: 'Telegram', href: '#telegram' },
  { label: 'GitHub', href: '#github' },
] as const

function FooterLogo() {
  return (
    <Link to="/" className="inline-flex items-center gap-2.5">
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
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
      <span className="text-base font-bold tracking-tight text-[var(--color-text-heading)]">
        CRYPTO EXCHANGE
      </span>
    </Link>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <FooterLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Buy, sell, and trade crypto with confidence. Secure, fast, and built for everyone.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-lg border border-[var(--color-border-light)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-border-accent)] hover:text-[var(--color-text-primary)]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold text-[var(--color-text-heading)]">{title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6 sm:flex-row">
          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; {year} Crypto Exchange. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            Cryptocurrency trading involves risk. Trade responsibly.
          </p>
        </div>
      </div>
    </footer>
  )
}
