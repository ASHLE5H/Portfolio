import {
  aboutStatements,
  achievements,
  certifications,
  education,
  experience,
  facts,
  profile,
  skills,
} from '../data/content'
import Glyph, { ArrowUpRight } from '../components/Glyph'
import Mark from '../components/Mark'
import Reveal from '../components/Reveal'
import Closing from '../components/Closing'

/** A titled block in the right-hand record column. */
function Block({ title, children, delay = 0 }) {
  return (
    <Reveal delay={delay} className="border-t border-deep pt-7">
      <h2 className="mb-5 font-display text-[19px] font-bold tracking-[-0.02em] text-brown">
        {title}
      </h2>
      {children}
    </Reveal>
  )
}

export default function About() {
  return (
    <>
      {/* Plain on the page ground — no bento cards — mirroring the reference's
          dedicated /about route. */}
      <section className="shell pb-12 pt-12 sm:pt-16 lg:pt-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* ── statement · sticky so the column never empties out ── */}
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-4">
              <Mark className="h-11 w-11 shrink-0 text-orange" />
              <p className="font-serif text-2xl italic text-brown sm:text-[30px]">
                Hello! {profile.greeting}!
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {aboutStatements.map((s) => (
                <p
                  key={s}
                  className="font-display text-xl font-bold leading-[1.4] tracking-[-0.02em] text-brown sm:text-[27px]"
                >
                  {s}
                </p>
              ))}
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7">
              {facts.map((f) => (
                <div key={f.k} className="border-t border-deep pt-3.5">
                  <dt className="eyebrow text-brown/50">{f.k}</dt>
                  <dd className="mt-2 font-sans text-[15px] font-medium text-brown">{f.v}</dd>
                </div>
              ))}
            </dl>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="group mt-12 inline-flex items-center gap-2.5 rounded-pill bg-brown px-7 py-3.5 font-display text-[14px] font-bold tracking-[-0.01em] text-bg transition-all duration-500 ease-smooth hover:-translate-y-0.5 hover:bg-orange"
            >
              View Resume
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>

          {/* ── the record ────────────────────────────── */}
          <div className="space-y-12 lg:col-span-6 lg:col-start-7">
            <Block title="Experience">
              {experience.map((job) => (
                <div key={job.org}>
                  <p className="font-sans text-[15.5px] leading-[1.6] text-body">
                    <span className="font-medium text-orange">{job.org}</span> — {job.role},{' '}
                    {job.period}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 font-sans text-[15px] leading-[1.62] text-body"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-orange"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Block>

            <Block title="Education" delay={0.03}>
              <ul className="space-y-4">
                {education.map((e) => (
                  <li key={e.school}>
                    <p className="font-sans text-[15.5px] font-medium text-orange">{e.school}</p>
                    <p className="mt-1 font-sans text-[14.5px] leading-[1.55] text-body">
                      {e.detail}
                    </p>
                    <p className="mt-1 font-sans text-[13.5px] text-mute">
                      {e.place} · {e.period}
                    </p>
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Skills" delay={0.05}>
              <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                {skills.map((s) => (
                  <div key={s.group}>
                    <p className="eyebrow text-brown/50">{s.group}</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-pill bg-card px-3 py-1.5 font-sans text-[12.5px] text-brown transition-colors duration-300 hover:bg-deep"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Block>

            <Block title="Achievements" delay={0.07}>
              <ul className="space-y-5">
                {achievements.map((a) => (
                  <li key={a.title} className="flex gap-4">
                    <Glyph name={a.icon} className="mt-0.5 h-[22px] w-[22px] shrink-0 text-orange" />
                    <span>
                      <span className="block font-sans text-[15px] font-medium text-brown">
                        {a.title}
                      </span>
                      <span className="mt-1.5 block font-sans text-[14px] leading-[1.55] text-mute">
                        {a.detail}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Certifications" delay={0.09}>
              <ul className="space-y-3.5">
                {certifications.map((c) => (
                  <li
                    key={c.title}
                    className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1"
                  >
                    <span className="font-sans text-[15px] text-brown">{c.title}</span>
                    <span className="font-sans text-[13px] text-mute">{c.issuer}</span>
                  </li>
                ))}
              </ul>
            </Block>
          </div>
        </div>
      </section>

      <Closing />
    </>
  )
}
