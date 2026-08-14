import { motion } from 'framer-motion'
import { closingHeadline, profile, socials } from '../data/content'
import Glyph, { ArrowRight } from './Glyph'
import Mark from './Mark'
import Reveal from './Reveal'

const year = new Date().getFullYear()

export default function Closing() {
  return (
    <section id="contact" className="shell-wide pb-4 pt-16 sm:pb-5 sm:pt-24">
      {/* the closing block is one generously padded card — the reference gives
          it far more inner space than any other card on the page */}
      <Reveal variant="pop" amount={0.15} className="bento !px-7 !pb-8 !pt-12 sm:!px-12 sm:!pb-10 sm:!pt-16 lg:!px-20 lg:!pb-8 lg:!pt-20 xl:!px-24">
        <h2 className="font-display text-closing font-bold text-brown">
          {closingHeadline[0]}
          <br />
          {closingHeadline[1]}
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="group mt-7 inline-flex items-center gap-3.5 font-serif text-[26px] italic text-brown sm:mt-9 sm:text-[30px]"
        >
          Say Hi
          <ArrowRight className="h-6 w-6 transition-transform duration-500 ease-smooth group-hover:translate-x-2" />
        </a>

        {/* A single clean rule: the line wipes in from the left, then the mark
            springs up and comes to rest sitting on top of it. */}
        <div aria-hidden="true" className="relative mt-6 h-14 sm:mt-8 sm:h-16">
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 bottom-0 h-[2.5px] origin-left bg-brown"
          />

          <motion.span
            initial={{ scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: 'spring', stiffness: 240, damping: 15, delay: 0.35 }}
            className="absolute -bottom-1.5 left-0 origin-bottom"
          >
            <Mark className="h-12 w-12 text-orange sm:h-14 sm:w-14" />
          </motion.span>
        </div>

        {/* footer lives inside the closing card */}
        <div className="mt-9 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-[19px] font-bold tracking-[-0.02em] text-orange">
              {profile.name}
            </p>
            <p className="mt-1.5 font-sans text-[15px] text-mute">{profile.role}</p>
          </div>

          <ul className="flex items-center gap-4">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  title={s.label}
                  className="flex h-12 w-12 items-center justify-center rounded-inner border-[1.8px] border-ink text-ink transition-all duration-500 ease-smooth hover:-translate-y-1 hover:border-orange hover:text-orange"
                >
                  <Glyph name={s.icon} className="h-[22px] w-[22px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-9 text-center font-sans text-[14px] text-mute">
          © {year} — {profile.name}
        </p>
      </Reveal>
    </section>
  )
}
