import { Outlet } from 'react-router-dom'
import { TickerBar } from './TickerBar'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col bg-[var(--color-bg)]">
      <TickerBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
