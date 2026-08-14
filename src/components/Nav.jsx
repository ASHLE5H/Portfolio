import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { nav, profile } from '../data/content'
import Glyph from './Glyph'

function NavLabel({ item, showIcon }) {
  if (!showIcon) return item.label
  return (
    <span className="relative inline-flex items-center">
      <Glyph
        name={item.icon}
        className="pointer-events-none absolute -left-[22px] h-[15px] w-[15px] -translate-x-1 text-orange opacity-0 transition-all duration-300 ease-smooth group-hover/nav:translate-x-0 group-hover/nav:opacity-100"
      />
      {item.label}
    </span>
  )
}

function NavLink({ item, className, onClick, showIcon = false }) {
  const content = <NavLabel item={item} showIcon={showIcon} />

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer noopener"
        className={className}
        onClick={onClick}
      >
        {content}
      </a>
    )
  }
  return (
    <Link to={item.to} className={className} onClick={onClick}>
      {content}
    </Link>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* The nav is a bento card in its own right — it floats over the page */}
      <header className="sticky top-0 z-50 pt-3 sm:pt-6">
        <div className="shell">
          <nav className="flex items-center justify-between gap-4 rounded-card bg-card/95 px-6 py-4 shadow-[0_12px_34px_-20px_rgba(153,71,15,0.55)] backdrop-blur-md sm:px-8 sm:py-5">
            <Link
              to="/"
              className="font-display text-[17px] font-bold tracking-[-0.02em] text-brown sm:text-[19px]"
            >
              {profile.name}
            </Link>

            <ul className="hidden items-center gap-9 md:flex lg:gap-14">
              {nav.map((item) => (
                <li key={item.label} className="group/nav">
                  <NavLink
                    item={item}
                    showIcon
                    className="font-sans text-[13px] font-medium uppercase tracking-[0.09em] text-ink transition-colors duration-300 hover:text-orange"
                  />
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="relative z-50 flex h-9 w-9 items-center justify-center rounded-full text-brown transition-colors duration-300 hover:bg-deep md:hidden"
            >
              <span className="flex h-[11px] w-[18px] flex-col justify-between">
                <motion.span
                  animate={open ? { rotate: 45, y: 4.75 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="block h-[1.8px] w-full origin-center rounded bg-current"
                />
                <motion.span
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="block h-[1.8px] w-full rounded bg-current"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -4.75 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="block h-[1.8px] w-full origin-center rounded bg-current"
                />
              </span>
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-40 bg-bg px-[var(--shell-x)] pt-28 md:hidden"
          >
            <div className="rounded-card bg-card p-6">
              {nav.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-brown/12 last:border-0"
                >
                  <NavLink
                    item={item}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-4 font-display text-2xl font-bold tracking-[-0.02em] text-brown"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
