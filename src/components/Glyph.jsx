/**
 * Outline icon set. One stroke weight across the whole set, colour inherited
 * so the icons pick up the orange accent wherever they sit.
 */
const paths = {
  atom: (
    <>
      <circle cx="12" cy="12" r="2.3" />
      <ellipse cx="12" cy="12" rx="10" ry="4.3" />
      <ellipse cx="12" cy="12" rx="10" ry="4.3" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.3" transform="rotate(120 12 12)" />
    </>
  ),
  hex: (
    <>
      <path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7z" />
      <path d="M12 12v9.5M12 12 3.5 7M12 12l8.5-5" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4C9 4 4 9.5 4 15.5c0 2 .6 3.6 1.4 4.5" />
      <path d="M20 4c1.6 8-3.4 15-14.6 16" />
    </>
  ),
  db: (
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  py: (
    <>
      <path d="M9.5 3.5h5a3 3 0 0 1 3 3V11a2 2 0 0 1-2 2H8.5a3 3 0 0 0-3 3v1.5" />
      <path d="M14.5 20.5h-5a3 3 0 0 1-3-3V13a2 2 0 0 1 2-2h7a3 3 0 0 0 3-3V6.5" />
    </>
  ),
  wave: (
    <>
      <path d="M2.5 9c2-3.2 4-4.8 6-4.8 3 0 3.6 3.6 6.5 3.6 1.8 0 3.2-1 4.4-2.9" />
      <path d="M2.5 16.5c2-3.2 4-4.8 6-4.8 3 0 3.6 3.6 6.5 3.6 1.8 0 3.2-1 4.4-2.9" />
    </>
  ),
  box: (
    <>
      <path d="M3 8.5 12 4l9 4.5v7L12 20l-9-4.5z" />
      <path d="M3 8.5 12 13l9-4.5M12 13v7" />
    </>
  ),
  branch: (
    <>
      <circle cx="7" cy="5" r="2.2" />
      <circle cx="7" cy="19" r="2.2" />
      <circle cx="17" cy="9.5" r="2.2" />
      <path d="M7 7.2v9.6M17 11.7c0 3.4-3.4 3.6-6.2 4.6" />
    </>
  ),
  bars: <path d="M4 20V11M10 20V4.5M16 20v-6M22 20V8" />,
  chart: (
    <>
      <path d="M3.5 3.5v17h17" />
      <path d="M7 16l3.6-5 3.2 2.6L20 6.5" />
    </>
  ),
  send: <path d="M21 3.5 10.5 14M21 3.5l-6.8 17-3.7-6.5L4 10.3z" />,
  arrows: <path d="M3 8h13l-3.5-3.5M21 16H8l3.5 3.5" />,

  // ── contextual ────────────────────────────────────────
  terminal: (
    <>
      <rect x="2.5" y="4" width="19" height="16" rx="3" />
      <path d="M7 9.5l3 2.5-3 2.5M12.5 15h4.5" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
      <circle cx="12" cy="12" r="2.6" />
    </>
  ),
  cap: (
    <>
      <path d="M2.5 8.5 12 4l9.5 4.5L12 13z" />
      <path d="M6.5 10.6V16c0 1.6 2.5 3 5.5 3s5.5-1.4 5.5-3v-5.4M20.5 9v5.5" />
    </>
  ),
  medal: (
    <>
      <circle cx="12" cy="15" r="5.2" />
      <path d="M9 10.2 6.5 3h11L15 10.2M12 13.2l.9 1.8 2 .3-1.45 1.4.35 2L12 17.75l-1.8.95.35-2L9.1 15.3l2-.3z" />
    </>
  ),
  badge: (
    <>
      <path d="M8.5 3.5h7a2 2 0 0 1 2 2v13.2a1 1 0 0 1-1.5.87L12 17.2l-4 2.37a1 1 0 0 1-1.5-.87V5.5a2 2 0 0 1 2-2z" />
      <path d="M9.5 8.5h5M9.5 11.5h3" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="2.5" width="6" height="11" rx="3" />
      <path d="M5 11.5a7 7 0 0 0 14 0M12 18.5v3M9 21.5h6" />
    </>
  ),
  doc: (
    <>
      <path d="M14 2.5H7a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7.5z" />
      <path d="M14 2.5v5h5M8.5 12.5h7M8.5 16h4.5" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </>
  ),
  github: (
    <path
      d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.8c-2.7.6-3.3-1.3-3.3-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.5 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2z"
      fill="currentColor"
      stroke="none"
    />
  ),
  linkedin: (
    <>
      <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="3" />
      <path d="M7 10.2v7M7 6.9v.1M11 17.2v-4a2.2 2.2 0 0 1 4.4 0v4" />
    </>
  ),
}

export default function Glyph({ name, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name] ?? paths.hex}
    </svg>
  )
}

export function ArrowRight({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  )
}

export function ArrowUpRight({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M7 17 17 7M8.5 7H17v8.5" />
    </svg>
  )
}
