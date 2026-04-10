import { Outlet } from 'react-router-dom'
import { useScrollToHash } from '../hooks/useScrollToHash'
import { Footer } from './Footer'
import { Header } from './Header'
import { ShowcaseNotice } from './ShowcaseNotice'

export function Layout() {
  useScrollToHash()

  return (
    <>
      <Header />
      <ShowcaseNotice />
      <Outlet />
      <Footer />
    </>
  )
}
