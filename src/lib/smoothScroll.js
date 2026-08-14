import Lenis from 'lenis'

/**
 * Lenis-backed smooth scrolling, the same easing feel the reference gets from
 * Framer. Kept as a module singleton so the router's scroll manager and the
 * in-page anchors can drive the same instance.
 *
 * Disabled entirely under prefers-reduced-motion — the page then falls back to
 * the browser's native scrolling.
 */
let lenis = null

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function initSmoothScroll() {
  if (prefersReducedMotion()) return () => {}

  lenis = new Lenis({
    duration: 1.15,
    // expo-out: fast start, long settle
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.8,
  })

  let frame
  const raf = (time) => {
    lenis?.raf(time)
    frame = requestAnimationFrame(raf)
  }
  frame = requestAnimationFrame(raf)

  return () => {
    cancelAnimationFrame(frame)
    lenis?.destroy()
    lenis = null
  }
}

/** Scroll to an element or selector, accounting for the sticky nav. */
export function scrollToTarget(target, offset = -104) {
  const el = typeof target === 'string' ? document.querySelector(target) : target
  if (!el) return false

  if (lenis) {
    lenis.scrollTo(el, { offset })
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
  return true
}

export function scrollToTop() {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true })
  } else {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
}
