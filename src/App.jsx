import { Analytics } from '@vercel/analytics/react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AccountDetailPage } from './pages/AccountDetailPage'
import { HomePage } from './pages/HomePage'
import './App.css'

function App() {
  return (
    <>
      <Analytics />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/account/:accountId" element={<AccountDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
