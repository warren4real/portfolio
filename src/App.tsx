import { Suspense, useEffect, useRef } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { SCROLLER_ID } from '@/hooks/useLenis'
import './styles/rolling-counter.css'

export default function App() {
  const { pathname } = useLocation()
  const rootRef = useRef<HTMLElement>(null)
  const isHome = pathname === '/'

  useEffect(() => {
    rootRef.current?.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <main
      ref={rootRef}
      id={SCROLLER_ID}
      className={`rc-root${isHome ? '' : ' rc-page rc-inner'}`}
    >
      {!isHome && (
        <>
          <a className="rc-inner-skip" href="#rc-content">
            Skip to content
          </a>

          <nav className="rc-nav rc-inner-nav" aria-label="Main navigation">
            <Link to="/" className="rc-logo" aria-label="Warren — Home">
              WM<span>®</span>
            </Link>

            <div className="rc-inner-links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/projects">Work</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Skills</NavLink>
              <NavLink to="/showcase">Showcase</NavLink>
              <NavLink to="/testimonials">Experience</NavLink>
            </div>

            <Link to="/contact" className="rc-contact">
              Let’s talk 
            </Link>
          </nav>
        </>
      )}

      <div
        id={isHome ? undefined : 'rc-content'}
        className={isHome ? undefined : 'rc-inner-content'}
        tabIndex={isHome ? undefined : -1}
      >
        <Suspense fallback={<p className="rc-loading">Loading…</p>}>
          <Outlet />
        </Suspense>
      </div>

      {!isHome && (
        <footer className="rc-inner-footer">
          <Link to="/">← Back to the counter</Link>
          <span>Warren Malawae · Portfolio</span>
        </footer>
      )}
    </main>
  )
}
