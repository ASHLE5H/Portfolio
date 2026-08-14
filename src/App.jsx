import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import { initSmoothScroll, scrollToTarget, scrollToTop } from './lib/smoothScroll'

/**
 * Routing side effects: jump to the top on a route change, or ease to the
 * anchored section when a hash is present (e.g. /#projects from the nav).
 */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // the target may mount a tick after the route change
      const id = requestAnimationFrame(() => {
        if (!scrollToTarget(hash)) scrollToTop()
      })
      return () => cancelAnimationFrame(id)
    }
    scrollToTop()
  }, [pathname, hash])

  return null
}

export default function App() {
  useEffect(() => initSmoothScroll(), [])

  return (
    <BrowserRouter>
      <ScrollManager />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-pill focus:bg-brown focus:px-5 focus:py-3 focus:font-display focus:text-sm focus:font-bold focus:text-bg"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
