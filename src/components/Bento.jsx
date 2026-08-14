import { useId, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { badgeText, profile, socials, toolbox } from '../data/content'
import Glyph, { ArrowUpRight } from './Glyph'
import Mark from './Mark'
import { scrollToTarget } from '../lib/smoothScroll'

/* ── shared card motion ──────────────────────────────────
   Cards pop in — scale + fade on a spring — rather than sliding up.
   Delays are deliberately uneven (see DELAY below) so the hero assembles
   itself instead of arriving as one block. */
const pop = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
}

const SPRING = { type: 'spring', stiffness: 220, damping: 20, mass: 0.8 }

/* Out of reading order on purpose: headline first, then the eye is pulled
   across to the toolbox, back to the portrait, and the small cards last. */
const DELAY = {
  headline: 0.05,
  intro: 0.30,
  portrait: 0.20,
  status: 0.46,
  sayHi: 0.38,
  toolbox: 0.12,
  socials: 0.54,
}

function Card({ children, className = '', delay = 0, ...rest }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      variants={reduce ? undefined : pop}
      initial={reduce ? undefined : 'hidden'}
      animate={reduce ? undefined : 'show'}
      transition={{ ...SPRING, delay }}
      className={`bento ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/* ── portrait, with a designed fallback if no photo is present ── */
function Portrait({ delay, className = '' }) {
  const [failed, setFailed] = useState(false)

  return (
    <Card delay={delay} className={`overflow-hidden !p-0 ${className}`}>
      {failed ? (
        <div className="flex h-full min-h-[240px] w-full flex-col items-center justify-center gap-4 bg-deep/60 p-6 text-center">
          <Mark className="h-12 w-12 text-orange" />
          <p className="font-serif text-lg italic text-brown">{profile.name}</p>
          <p className="eyebrow text-brown/50">Add /portrait.jpg</p>
        </div>
      ) : (
        <img
          src={profile.portrait}
          alt={`Portrait of ${profile.name}`}
          onError={() => setFailed(true)}
          loading="eager"
          className="h-full min-h-[240px] w-full object-cover"
        />
      )}
    </Card>
  )
}

/* ── rotating circular badge ────────────────────────────── */
function ScrollBadge() {
  const id = `badge-${useId().replace(/:/g, '')}`
  return (
    <a
      href="#projects"
      aria-label="Scroll down to my work"
      onClick={(e) => {
        e.preventDefault()
        scrollToTarget('#projects')
      }}
      className="group relative flex aspect-square w-full items-center justify-center"
    >
      {/* the spin lives on the inner <g>: rotating the <svg> itself would grow
          its bounding box and push the page into horizontal scroll */}
      <svg viewBox="0 0 100 100" className="h-full w-full text-brown">
        <defs>
          <path id={id} d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" fill="none" />
        </defs>
        <g className="animate-spinSlow" style={{ transformOrigin: '50px 50px' }}>
          <text
            className="fill-current font-sans"
            style={{ fontSize: '9.2px', letterSpacing: '0.13em', fontWeight: 500 }}
          >
            <textPath href={`#${id}`} startOffset="0">
              {badgeText}
            </textPath>
          </text>
        </g>
      </svg>

      {/* same glyph as the intro card, turning in step with the ring —
          identical animation + duration keeps the two in sync */}
      <Glyph
        name="spark"
        className="absolute h-8 w-8 animate-spinSlow text-orange transition-transform duration-500 ease-smooth group-hover:scale-110"
      />
    </a>
  )
}

export default function Bento() {
  return (
    <section id="top" className="shell pt-4 lg:pt-[25px]">
      {/*
        Nested grids, because the reference does NOT use one uniform 3-column
        grid — the left/middle split changes between rows while the right
        column stays fixed:

            row 1   headline 536 | portrait 420      right col 429
            row 2   intro    586 | say-hi   373      right col 429

        A single grid can only express the average of those, which is what made
        the headline card too wide and the portrait too narrow. On mobile every
        wrapper is `display: contents`, so all cards flatten back into one
        column and stay individually orderable.
      */}
      <div className="grid gap-4 sm:gap-5 lg:min-h-[calc(100vh-9rem)] lg:grid-cols-[982fr_429fr] lg:gap-[25px]">
        {/* ── left region ─────────────────────────────── */}
        <div className="contents lg:grid lg:grid-rows-[0.87fr_1fr] lg:gap-[25px]">
          {/* row 1 — headline + portrait, same height */}
          <div className="contents lg:grid lg:grid-cols-[536fr_420fr] lg:gap-[25px]">
            <Card
              delay={DELAY.headline}
              className="order-1 flex min-h-[260px] flex-col justify-between lg:order-none lg:min-h-0"
            >
              <Mark className="h-10 w-10 animate-float text-orange sm:h-11 sm:w-11" />
              <h1 className="mt-10 font-display text-hero font-bold text-brown">
                {profile.headline[0]}
                <br />
                {profile.headline[1]}
              </h1>
            </Card>

            <Portrait delay={DELAY.portrait} className="order-2 min-h-[240px] lg:order-none lg:min-h-0" />
          </div>

          {/* row 2 — intro + the status/Say Hi stack */}
          <div className="contents lg:grid lg:grid-cols-[586fr_373fr] lg:gap-[25px]">
            <Card
              delay={DELAY.intro}
              className="order-3 flex flex-col justify-between lg:order-none"
            >
              <Glyph name="spark" className="h-8 w-8 text-orange" />
              <p className="mt-10 font-sans text-[16px] leading-[1.55] text-body sm:text-[19px]">
                <span className="font-serif text-[18px] italic text-brown sm:text-[22px]">
                  {profile.greeting}
                </span>
                , {profile.intro}
              </p>
            </Card>

            <div className="contents lg:flex lg:flex-col lg:gap-[25px]">
              <Card delay={DELAY.status} className="order-4 flex items-start gap-3.5 !py-5 lg:order-none items-center">
                <Glyph name="terminal" className="mt-0.5 h-[22px] w-[22px] shrink-0 text-orange" />
                <p className="font-sans text-[14.5px] leading-snug text-body">{profile.now}</p>
              </Card>

              <motion.a
                href={`mailto:${profile.email}`}
                variants={pop}
                initial="hidden"
                animate="show"
                transition={{ ...SPRING, delay: DELAY.sayHi }}
                className="bento group order-5 flex min-h-[150px] flex-col justify-between bg-deep transition-colors duration-500 ease-smooth hover:bg-deep/70 lg:order-none lg:min-h-0 lg:flex-1"
              >
                <span className="font-serif text-2xl italic text-brown sm:text-[26px]">Say Hi</span>
                <span className="flex justify-end">
                  <ArrowUpRight className="h-7 w-7 text-brown transition-transform duration-500 ease-smooth group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* ── right column · toolbox, socials, badge ──── */}
        <div className="contents lg:flex lg:flex-col lg:gap-[25px]">
          <Card delay={DELAY.toolbox} className="order-6 lg:order-none lg:flex-1">
            <h2 className="font-display text-[19px] font-bold tracking-[-0.02em] text-brown">
              Toolbox
            </h2>
            <ul className="mt-2">
              {toolbox.map((t) => (
                <li
                  key={t.name}
                  className="group flex items-center gap-4 border-b border-deep py-3.5 last:border-0"
                >
                  <Glyph
                    name={t.icon}
                    className="h-[26px] w-[26px] shrink-0 text-orange transition-transform duration-500 ease-smooth group-hover:scale-110"
                  />
                  <span className="min-w-0">
                    <span className="block font-sans text-[15px] font-medium text-orange">
                      {t.name}
                    </span>
                    <span className="mt-0.5 block font-sans text-[14px] text-ink/70">{t.kind}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          <motion.div
            variants={pop}
            initial="hidden"
            animate="show"
            transition={{ ...SPRING, delay: DELAY.socials }}
            className="order-7 flex items-center gap-4 sm:gap-5 lg:order-none lg:gap-[25px]"
          >
            <ul className="grid min-w-0 flex-1 grid-cols-4 gap-4 sm:gap-5 lg:w-[174px] lg:flex-none lg:grid-cols-2 lg:gap-[25px]">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    title={s.label}
                    className="flex aspect-square w-full items-center justify-center rounded-inner bg-card text-orange transition-all duration-500 ease-smooth hover:-translate-y-1 hover:bg-deep"
                  >
                    <Glyph name={s.icon} className="h-[26px] w-[26px]" />
                  </a>
                </li>
              ))}
            </ul>

            {/* the badge sits centred in the space left over beside the
                socials, which is where the reference puts it */}
            <div className="flex flex-1 justify-end lg:justify-center">
              <div className="w-[108px] shrink-0 sm:w-[136px] lg:w-[160px]">
                <ScrollBadge />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
