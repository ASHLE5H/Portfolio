# Ashlesh D Hegde — Portfolio

Personal portfolio site. React + Vite, TailwindCSS and Framer Motion.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Add your photo

The hero has a portrait card. Drop a square-ish image at:

```
public/portrait.jpg
```

Until that file exists the card shows a designed fallback with your mark, so
nothing looks broken — but the real photo is what makes the hero land.

## Editing content

Everything you'd want to change lives in one file: **`src/data/content.js`**.

| Export | Controls |
| --- | --- |
| `profile` | Name, role, email, GitHub/LinkedIn, headline, intro, "currently" line, portrait path |
| `nav` | Header links (`to` for internal routes, `href` + `external` for the PDF) |
| `socials` | The 4 icon squares in the hero and the footer |
| `toolbox` | The icon + title + subtitle list card in the hero |
| `projects` | Project cards — year, title, blurb, tags shown over the artwork, stack pills, link |
| `aboutStatements` | The bold brown lines in the About card |
| `experience` / `education` | The right-hand About card |
| `skills` | Grouped skill pills |
| `certifications` / `achievements` | About-section cards |
| `badgeText` | Text that circles the rotating scroll badge |
| `closingHeadline` | The big closing card headline |

No component edits are needed for a content change.

### Resume PDF

`public/Ashlesh-D-Hegde-Resume.pdf` is what the **Resume** links point at. Drop a
new file at that path to update it (or change `profile.resume`).

### Project artwork

Project thumbnails are vector, generated in `src/components/ProjectArt.jsx` —
three variants (`chat`, `image`, `terminal`) picked per project via the `art`
field, tinted by that project's `accent`.

To use a real screenshot instead, put the image in `public/` and swap the
`<ProjectArt />` call in `src/components/Projects.jsx` for an `<img>`.

## Design system

The whole page is built from one primitive: the **bento card** (`.bento` in
`src/index.css`) — a rounded peach panel on a cream page. The nav, every hero
tile, every project, and the closing block are all the same card.

Tokens live in `tailwind.config.js`:

| Token | Hex | Use |
| --- | --- | --- |
| `bg` | `#FFF8F5` | Page |
| `card` | `#FFE9DE` | Card fill |
| `deep` | `#FFD2BE` | Emphasis card, pills, hover |
| `brown` | `#99470F` | **All headings and card titles** |
| `orange` | `#FF5722` | Mark, icons, links |
| `ink` | `#27140A` | Nav links |
| `body` / `mute` | `#505050` / `#7A7A7A` | Paragraphs, captions |

Type: **Satoshi** for display, **Inter** for body, **IBM Plex Serif italic** for
the accent voice (`Namaskara`, `Say Hi`, `Hello!`) — loaded from Fontshare and
Google Fonts in `index.html`.

> **Renaming a colour token?** Change it in **both** `tailwind.config.js` (drives
> the `bg-card` / `text-brown` utilities used in JSX) and the `:root` block in
> `src/index.css` (drives the hand-written CSS). They're deliberately kept
> separate — see the note below.

### Why `index.css` doesn't use `@apply` for colours

Tailwind v3 config changes don't reliably hot-reload through Vite. If
`index.css` did `@apply text-body` and you renamed that token, PostCSS would
fail the **entire stylesheet** — `The 'text-body' class does not exist` — and
keep failing until you restart the dev server, even though the code is correct.
Writing plain CSS properties against `:root` variables removes that failure mode.

**If you ever do see a "class does not exist" error after editing
`tailwind.config.js`, just restart the dev server** — the config is cached per
process.

## Routes

Two pages, via react-router. **About is its own page** — reachable only from the
nav, exactly like the reference. It is not a section on the home page.

| Route | Contents |
| --- | --- |
| `/` | Hero bento → Featured Projects → closing card |
| `/about` | Statement, experience, education, skills, achievements, certifications → closing card |

`/` and `/about` share the nav and the closing card. The About page is rendered
plain on the page ground — no bento cards — which is how the reference treats it.

## Structure

```
src/
  App.jsx                 router, scroll manager, skip link
  data/content.js         ← all copy
  pages/
    Home.jsx              bento + projects + closing
    About.jsx             the /about page
  components/
    Nav.jsx               floating card nav + mobile sheet
    Bento.jsx             hero grid: headline, portrait, intro, status,
                          Say Hi, toolbox, socials, rotating scroll badge
    Projects.jsx          project cards
    Closing.jsx           closing card — headline, rule, footer inside
    Mark.jsx              the personal mark
    Glyph.jsx             inline SVG icon set
    ProjectArt.jsx        vector project thumbnails
    Reveal.jsx            scroll-reveal helper
```

## Layout notes

**Two container widths.** Measured off the reference: the nav and hero sit in a
narrower column, while the project grid and closing card break out wider and
visibly overhang the nav card.

| Class | Card width | Used by |
| --- | --- | --- |
| `.shell` | 1436px | nav, hero, about |
| `.shell-wide` | 1672px | projects, closing |

`max-width` is border-box inclusive, so each is defined as card width + both
`--shell-x` gutters (1492px / 1728px).

**The hero uses nested grids, not one uniform grid.** The reference changes the
left/middle split between rows while the right column stays fixed:

```
row 1   headline 536 | portrait 420      right column 429
row 2   intro    586 | say-hi   373      right column 429
```

A single 3-column grid can only express the average of those, which made the
headline too wide and the portrait too narrow. So:

```
outer          lg:grid-cols-[982fr_429fr]      982 = 536 + 25 gutter + 420
  left region  lg:grid-rows-[0.87fr_1fr]
    row 1      lg:grid-cols-[536fr_420fr]
    row 2      lg:grid-cols-[586fr_373fr]
  right column lg:flex lg:flex-col            toolbox + socials/badge
```

Every card now lands within 1px of the reference. Note the outer `982fr`
**includes the inner gutter** — using `956fr` (536+420) leaves the left region
26px short.

On mobile every wrapper is `display: contents`, so all cards flatten back into
one column and stay individually orderable.

**The hero fills the viewport.** `lg:min-h-[calc(100vh-9rem)]` on the grid means
nothing of Featured Projects shows until you scroll — the reference behaves the
same way. The 9rem is nav height + surrounding padding.

**Project artwork is 320 × 165** (aspect 1.94), matching the reference's image
proportion. That aspect is what keeps the cards from growing too tall.

On mobile the three column wrappers become `display: contents` so every card is
a direct grid child and can be re-ordered — that's how the portrait moves up to
sit right under the headline.

## Scrolling and motion

Scrolling is driven by [Lenis](https://lenis.darkroom.engineering/) for the
eased, weighted feel the reference gets from Framer. The instance is a module
singleton in `src/lib/smoothScroll.js` so the router and in-page anchors share
it; it's skipped entirely under `prefers-reduced-motion`.

### Entry motion (hero, on load)

Cards **pop** — scale + fade on a spring — rather than sliding up. Delays are
deliberately uneven and out of reading order, so the hero assembles itself
instead of arriving as one block:

```js
const DELAY = {
  headline: 0.05,  toolbox: 0.12,  portrait: 0.20,
  intro:    0.30,  sayHi:   0.38,  status:   0.46,  socials: 0.54,
}
```

To retime it, edit `DELAY` in `src/components/Bento.jsx` — nothing else needs to
change.

### Scroll motion (projects, closing)

Both use `<Reveal variant="pop">`, which scales small → full as the block enters
the viewport. `Reveal` supports two variants:

| variant | motion | used for |
| --- | --- | --- |
| `rise` (default) | fade + ease up | text blocks, about-page sections |
| `pop` | fade + scale 0.9 → 1 on a spring | project grid, closing card |

**The pop is applied to the whole grid, never to individual cards.** Each project
card used to be its own `<Reveal>` with a per-index delay, which left siblings in
the same row at different transforms mid-animation — they read as different
sizes. One `<Reveal>` around the grid keeps them locked together, and cards are
`flex h-full flex-col` with the stack pills pushed down by `margin-top: auto` so
row heights are always equal.

The closing card's rule draws itself in: the line wipes out from the left, the
mark springs on, then the flourish strokes via `pathLength`.

## Accessibility & motion

- All animation is disabled under `prefers-reduced-motion`.
- The scroll badge spins on an inner `<g>`, not the `<svg>` — rotating the
  element itself would grow its bounding box and cause horizontal scroll.
- "Skip to work" is the first focusable element; focus rings use the orange
  accent and are never removed.
- Verified at 1440 / 834 / 390 with no horizontal overflow.

## Deploying

The build output is a static `dist/` folder — deploy anywhere.

Because `/about` is a client-side route, the host must serve `index.html` for
every path or a refresh on `/about` 404s. That's already configured:

- **Netlify** — `public/_redirects`
- **Vercel** — `vercel.json`

**Vercel / Netlify:** connect the repo, build command `npm run build`, publish
directory `dist`. The rewrite configs above are picked up automatically.

**GitHub Pages:** set `base: '/<repo-name>/'` in `vite.config.js`, and note that
Pages has no rewrite support — either copy `index.html` to `404.html` in the
build output, or switch `BrowserRouter` to `HashRouter` in `src/App.jsx`.
