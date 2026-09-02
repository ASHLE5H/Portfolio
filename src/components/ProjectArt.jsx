import { useId } from 'react'

/**
 * Stylised UI mockups used as project thumbnails. Vector-only so they stay
 * crisp at any size and carry the site's warm palette.
 *
 * The 320 × 165 viewBox is deliberate — it matches the ~1.94 image aspect the
 * reference uses on its project cards, which is what keeps the card from
 * growing too tall.
 *
 * Swap any of these for a real screenshot by dropping the image in /public and
 * rendering an <img> in place of <ProjectArt /> inside Projects.jsx.
 */

const W = 320
const H = 165

function Frame({ children, accent }) {
  // Unique per instance — duplicate gradient ids across SVGs would collide.
  const gid = `art-bg-${useId().replace(/:/g, '')}`
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF8F5" />
          <stop offset="100%" stopColor="#FFE9DE" />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#${gid})`} />
      {/* window chrome */}
      <circle cx="16" cy="13" r="3" fill={accent} opacity="0.75" />
      <circle cx="26" cy="13" r="3" fill={accent} opacity="0.35" />
      <circle cx="36" cy="13" r="3" fill={accent} opacity="0.18" />
      <line x1="0" y1="26" x2={W} y2="26" stroke={accent} strokeOpacity="0.14" />
      {children}
    </svg>
  )
}

function ChatArt({ accent }) {
  return (
    <Frame accent={accent}>
      {/* sidebar */}
      <rect x="0" y="26" width="84" height={H - 26} fill={accent} opacity="0.06" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(11, ${36 + i * 26})`}>
          <circle cx="8" cy="8" r="8" fill={accent} opacity={i === 0 ? 0.5 : 0.2} />
          <rect x="21" y="3.5" width="44" height="3.6" rx="1.8" fill={accent} opacity="0.32" />
          <rect x="21" y="10.5" width="28" height="3.2" rx="1.6" fill={accent} opacity="0.16" />
        </g>
      ))}

      {/* incoming bubbles */}
      <rect x="98" y="38" width="106" height="22" rx="11" fill="#fff" opacity="0.95" />
      <rect x="109" y="46" width="68" height="4.4" rx="2.2" fill={accent} opacity="0.35" />
      <rect x="98" y="66" width="76" height="19" rx="9.5" fill="#fff" opacity="0.95" />
      <rect x="109" y="73" width="44" height="4.2" rx="2.1" fill={accent} opacity="0.28" />

      {/* outgoing bubble */}
      <rect x="150" y="92" width="154" height="22" rx="11" fill={accent} opacity="0.85" />
      <rect x="164" y="100" width="108" height="4.4" rx="2.2" fill="#FFF8F5" opacity="0.8" />

      {/* video tile */}
      <rect
        x="228"
        y="34"
        width="76"
        height="50"
        rx="8"
        fill={accent}
        opacity="0.14"
        stroke={accent}
        strokeOpacity="0.3"
      />
      <circle cx="266" cy="54" r="10" fill={accent} opacity="0.4" />
      <path
        d="M258 72c1.6-5 12.4-5 14.4 0"
        stroke={accent}
        strokeOpacity="0.4"
        strokeWidth="2.2"
        fill="none"
      />

      {/* composer */}
      <rect
        x="98"
        y="130"
        width="206"
        height="22"
        rx="11"
        fill="#fff"
        opacity="0.9"
        stroke={accent}
        strokeOpacity="0.2"
      />
      <rect x="109" y="138" width="56" height="4.4" rx="2.2" fill={accent} opacity="0.2" />
      <circle cx="291" cy="141" r="7" fill={accent} opacity="0.8" />
    </Frame>
  )
}

function ImageArt({ accent }) {
  return (
    <Frame accent={accent}>
      {/* prompt bar */}
      <rect
        x="14"
        y="36"
        width="212"
        height="23"
        rx="11.5"
        fill="#fff"
        opacity="0.92"
        stroke={accent}
        strokeOpacity="0.22"
      />
      <rect x="25" y="45" width="126" height="4.4" rx="2.2" fill={accent} opacity="0.3" />
      <rect x="234" y="36" width="58" height="23" rx="11.5" fill={accent} opacity="0.88" />
      <rect x="247" y="45" width="32" height="4.4" rx="2.2" fill="#FFF8F5" opacity="0.85" />

      {/* generated grid */}
      {[0, 1, 2, 3].map((i) => {
        const x = 14 + (i % 2) * 72
        const y = 70 + Math.floor(i / 2) * 45
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width="62"
              height="38"
              rx="6"
              fill={accent}
              opacity={0.1 + i * 0.06}
              stroke={accent}
              strokeOpacity="0.22"
            />
            <circle cx={x + 17} cy={y + 13} r="5.5" fill={accent} opacity="0.35" />
            <path
              d={`M${x + 5} ${y + 32} l13 -12 l10 8 l11 -13 l12 17 z`}
              fill={accent}
              opacity="0.28"
            />
          </g>
        )
      })}

      {/* large canvas */}
      <rect
        x="168"
        y="70"
        width="138"
        height="83"
        rx="8"
        fill={accent}
        opacity="0.16"
        stroke={accent}
        strokeOpacity="0.3"
      />
      <circle cx="200" cy="95" r="10" fill={accent} opacity="0.42" />
      <path d="M176 146l34-31 22 18 21-25 33 38z" fill={accent} opacity="0.36" />

      {/* credits pill */}
      <rect x="240" y="6" width="66" height="15" rx="7.5" fill={accent} opacity="0.14" />
      <rect x="250" y="11.5" width="38" height="4.2" rx="2.1" fill={accent} opacity="0.45" />
    </Frame>
  )
}

function TerminalArt({ accent }) {
  const lines = [
    { w: 122, o: 0.5, prompt: true },
    { w: 92, o: 0.22 },
    { w: 148, o: 0.22 },
    { w: 112, o: 0.5, prompt: true },
    { w: 70, o: 0.22 },
    { w: 134, o: 0.22 },
  ]
  return (
    <Frame accent={accent}>
      <rect x="0" y="26" width={W} height={H - 26} fill={accent} opacity="0.05" />
      {lines.map((l, i) => (
        <g key={i} transform={`translate(18, ${38 + i * 17})`}>
          {l.prompt && (
            <path
              d="M0 0l5 4.5-5 4.5"
              stroke={accent}
              strokeOpacity="0.7"
              strokeWidth="1.9"
              fill="none"
              strokeLinecap="round"
            />
          )}
          <rect x="13" y="2.4" width={l.w} height="4.4" rx="2.2" fill={accent} opacity={l.o} />
        </g>
      ))}

      {/* cursor */}
      <rect x="31" y="145" width="8" height="10" fill={accent} opacity="0.8" />

      {/* natural-language → git badge */}
      <g transform="translate(198, 42)">
        <rect
          width="102"
          height="62"
          rx="9"
          fill="#fff"
          opacity="0.92"
          stroke={accent}
          strokeOpacity="0.25"
        />
        <rect x="12" y="12" width="60" height="4.4" rx="2.2" fill={accent} opacity="0.3" />
        <rect x="12" y="22" width="42" height="4.4" rx="2.2" fill={accent} opacity="0.18" />
        <path
          d="M12 38h62l-6.5-5.5M74 48H24l6.5 5.5"
          stroke={accent}
          strokeOpacity="0.6"
          strokeWidth="1.7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* branch graph */}
      <g transform="translate(212, 116)" stroke={accent} strokeOpacity="0.5" strokeWidth="1.9" fill="none">
        <circle cx="5" cy="5" r="4.4" />
        <circle cx="5" cy="36" r="4.4" />
        <circle cx="50" cy="20" r="4.4" />
        <path d="M5 9.4v22.2M50 24.4c0 9-27 6-36 11" strokeLinecap="round" />
      </g>
    </Frame>
  )
}

export default function ProjectArt({ art, accent = '#99470F' }) {
  if (art === 'chat') return <ChatArt accent={accent} />
  if (art === 'image') return <ImageArt accent={accent} />
  if (art === 'terminal') return <TerminalArt accent={accent} />
  return <ImageArt accent={accent} />
}
