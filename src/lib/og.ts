// Link-preview cards (Open Graph images, 1200×630) drawn at build time with satori → resvg.
// Colors come from the site's current palette in palettes.css, so the cards follow a palette change.
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { site } from '../data/site';

const font = (pkg: string, file: string) => readFileSync(`node_modules/@fontsource/${pkg}/files/${file}`);
const fonts = [
  { name: 'Newsreader', data: font('newsreader', 'newsreader-latin-600-normal.woff'), weight: 600 as const, style: 'normal' as const },
  { name: 'Newsreader', data: font('newsreader', 'newsreader-latin-400-normal.woff'), weight: 400 as const, style: 'normal' as const },
  { name: 'Newsreader', data: font('newsreader', 'newsreader-latin-400-italic.woff'), weight: 400 as const, style: 'italic' as const },
  { name: 'Plex Mono', data: font('ibm-plex-mono', 'ibm-plex-mono-latin-400-normal.woff'), weight: 400 as const, style: 'normal' as const },
];

/** The light-mode tokens of the site's palette, read from palettes.css. */
function palette(): Record<string, string> {
  const css = readFileSync('src/styles/palettes.css', 'utf8');
  const block = css.match(new RegExp(`\\[data-palette="${site.palette}"\\]\\s*\\{([^}]*)\\}`))?.[1] ?? '';
  return Object.fromEntries([...block.matchAll(/--([\w-]+):\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]));
}

// satori takes React-like element objects; this keeps the card readable without JSX.
const h = (type: string, style: Record<string, unknown>, ...children: unknown[]) =>
  ({ type, props: { style: { display: 'flex', ...style }, children: children.length === 1 ? children[0] : children } });

export async function card({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  const c = palette();
  const size = title.length > 60 ? 58 : title.length > 40 ? 66 : 76;
  const svg = await satori(
    h('div', { width: 1200, height: 630, display: 'flex', background: c.paper, fontFamily: 'Newsreader' },
      h('div', { width: 14, height: '100%', background: c['chart-2'] }),
      h('div', { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 80px 56px 70px',
          backgroundImage: `linear-gradient(${c.grid} 1px, transparent 1px), linear-gradient(90deg, ${c.grid} 1px, transparent 1px)`,
          backgroundSize: '30px 30px' },
        h('div', { fontFamily: 'Plex Mono', fontSize: 22, letterSpacing: 3, textTransform: 'uppercase', color: c.muted }, kicker),
        h('div', { display: 'flex', flexDirection: 'column', gap: 22 },
          h('div', { fontSize: size, fontWeight: 600, lineHeight: 1.08, letterSpacing: -1, color: c.ink }, title),
          sub ? h('div', { fontSize: 30, fontStyle: 'italic', lineHeight: 1.3, color: c.muted }, sub) : h('div', {}, '')),
        // An empty footer row keeps the title centred between the kicker and the bottom edge.
        h('div', { height: 22 }, ''))),
    { width: 1200, height: 630, fonts },
  );
  return new Resvg(svg).render().asPng();
}
