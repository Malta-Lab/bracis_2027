/*
  BASE PATH
  The site may be served from a subdirectory (e.g. GitHub Pages: /bracis_2027/).
  Use withBase() for every internal link and asset path, e.g. withBase('/2027/attending/').
  External URLs (https:, mailto:) and in-page anchors (#...) are returned unchanged.
*/
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  if (/^([a-z][a-z0-9+.-]*:|#)/i.test(path)) return path;
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`;
}
