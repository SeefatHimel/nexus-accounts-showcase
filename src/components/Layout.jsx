import { Outlet, useLocation } from 'react-router-dom'
import { useScrollToHash } from '../hooks/useScrollToHash'
import { Footer } from './Footer'
import { Header } from './Header'
import { ShowcaseNotice } from './ShowcaseNotice'

export function Layout() {
  useScrollToHash()
  const { pathname } = useLocation()

  return (
    <>
      <Header />
      <ShowcaseNotice />
      <div className="page-main" key={pathname}>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
