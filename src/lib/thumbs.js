/**
 * Project thumbnails, resolved from src/thumbnails at build time.
 *
 * Drop a file named after the project id — connectify.png, texel.jpg — into
 * src/thumbnails and the matching card picks it up. Vite hashes the file and
 * rewrites the URL, so the same code works in dev and in a deployed build;
 * a path string like "/src/thumbnails/x.png" would only work in dev.
 *
 * No file for an id is fine: Projects.jsx falls back to the generated
 * ProjectArt mockup.
 */
const files = import.meta.glob('../thumbnails/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
})

const byId = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [
    path.split('/').pop().replace(/\.\w+$/, ''),
    url,
  ]),
)

export function thumbFor(id) {
  return byId[id]
}
