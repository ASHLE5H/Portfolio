import { projects , profile } from '../data/content'
import { thumbFor } from '../lib/thumbs'
import { ArrowUpRight } from './Glyph'
import ProjectArt from './ProjectArt'
import Reveal from './Reveal'

function ProjectCard({ project }) {
  // A real screenshot when src/thumbnails has one, the drawn mockup otherwise.
  const thumb = thumbFor(project.id)

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer noopener"
      className="bento group flex h-full flex-col transition-colors duration-500 ease-smooth hover:bg-deep/60"
    >
      {/* artwork */}
      <div className="relative overflow-hidden rounded-inner">
        <div className="transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.035]">
          {thumb ? (
            <img
              src={thumb}
              alt={`${project.title} preview`}
              loading="lazy"
              className="aspect-[320/165] w-full object-cover"
            />
          ) : (
            <ProjectArt art={project.art} accent={project.accent} />
          )}
        </div>

        {/* optional status, top right */}
        {project.status && (
          <span className="absolute right-4 top-4 rounded-pill bg-card px-3.5 py-1.5 font-sans text-[11.5px] font-semibold uppercase tracking-[0.08em] text-brown">
            {project.status}
          </span>
        )}

        {/* tags, bottom left */}
        <ul className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded-inner bg-card px-3.5 py-2 font-sans text-[11.5px] font-semibold uppercase tracking-[0.09em] text-brown"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* the orange affordance slides in on hover, bottom right */}
        <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-inner bg-orange text-bg opacity-0 transition-all duration-500 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-[18px] w-[18px]" />
        </span>
      </div>

      {/* copy */}
      <h3 className="mt-6 font-display text-cardTitle font-bold text-brown">{project.title}</h3>

      <p className="mt-3 font-sans text-[15.5px] leading-[1.62] text-body">{project.blurb}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5 pt-1 [margin-top:auto]">
        {project.stack.map((s) => (
          <li
            key={s}
            className="rounded-pill bg-bg/70 px-2.5 py-1 font-sans text-[11.5px] text-brown/80"
          >
            {s}
          </li>
        ))}
      </ul>
    </a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="shell-wide scroll-mt-28 pt-16 sm:pt-24">
      <Reveal className="mb-6 flex flex-wrap items-baseline justify-between gap-3 px-1 sm:mb-7">
        <h2 className="font-display text-sect font-bold text-brown">Featured Projects</h2>
        <a
          href={profile?.github}
          target="_blank"
          rel="noreferrer noopener"
          className="link-wipe inline-flex items-center gap-1.5 font-sans text-[13px] font-medium uppercase tracking-[0.09em] text-orange"
        >
          All repositories
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </Reveal>

      <Reveal variant="pop" amount={0.1} className="grid gap-4 sm:gap-5 lg:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </Reveal>
    </section>
  )
}
