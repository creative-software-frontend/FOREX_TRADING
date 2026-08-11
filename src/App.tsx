import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { ExchangePage } from './pages/ExchangePage'
import { EscrowPage } from './pages/EscrowPage'
import { MarketplacePage } from './pages/MarketplacePage'
import { LearningPage } from './pages/LearningPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="exchange" element={<ExchangePage />} />
          <Route path="escrow" element={<EscrowPage />} />
          <Route path="marketplace" element={<MarketplacePage />} />
          <Route path="learning" element={<LearningPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
