import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * When the route is home (`/`) and the URL has a hash, scroll that section into view.
 * Fixes nav links like `/#contact` under React Router (same-route hash updates included).
 */
export function useScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') return
    const raw = location.hash
    if (!raw || raw === '#') return

    const id = decodeURIComponent(raw.slice(1))
    const el = document.getElementById(id)

    const run = () => {
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const t = window.setTimeout(run, 80)
    return () => window.clearTimeout(t)
  }, [location.pathname, location.hash])
}
