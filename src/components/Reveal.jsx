import { motion, useReducedMotion } from 'framer-motion'

/**
 * Scroll-triggered reveal.
 *
 *  variant="rise"  — eases up and fades in (default, for text blocks)
 *  variant="pop"   — scales from small to full as it enters, for cards
 *
 * The pop is applied to a whole grid rather than to each card, so siblings
 * always scale in lockstep and never read as different sizes mid-animation.
 */
const VARIANTS = {
  rise: {
    hidden: (y) => ({ opacity: 0, y }),
    show: { opacity: 1, y: 0 },
  },
  pop: {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  },
}

const SPRING = { type: 'spring', stiffness: 190, damping: 22, mass: 0.9 }

export default function Reveal({
  children,
  as = 'div',
  variant = 'rise',
  delay = 0,
  y = 20,
  duration = 0.75,
  className = '',
  once = true,
  amount = 0.15,
  ...rest
}) {
  const reduce = useReducedMotion()
  const Tag = motion[as] ?? motion.div

  if (reduce) {
    const Plain = as
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    )
  }

  const v = VARIANTS[variant] ?? VARIANTS.rise
  const hidden = typeof v.hidden === 'function' ? v.hidden(y) : v.hidden

  return (
    <Tag
      className={className}
      initial={hidden}
      whileInView={v.show}
      viewport={{ once, amount }}
      transition={
        variant === 'pop'
          ? { ...SPRING, delay }
          : { duration, delay, ease: [0.22, 1, 0.36, 1] }
      }
      {...rest}
    >
      {children}
    </Tag>
  )
}
