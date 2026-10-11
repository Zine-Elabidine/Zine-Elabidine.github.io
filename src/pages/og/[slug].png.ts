// /og/<post>.png for each article, and /og/site.png for every other page.
import type { APIRoute, GetStaticPaths } from 'astro';
import { card } from '../../lib/og';
import { getPosts, fmtDate } from '../../lib/posts';

export const getStaticPaths: GetStaticPaths = async () => [
  ...(await getPosts()).map((p) => ({
    params: { slug: p.id },
    props: { kicker: `Article · ${fmtDate(p.data.date)}`, title: p.data.title, sub: p.data.summary },
  })),
  { params: { slug: 'site' }, props: { kicker: 'AI/ML Engineer', title: 'Articles, projects and CV', sub: 'AI agents, context engineering, evaluation' } },
];

export const GET: APIRoute = async ({ props }) =>
  new Response(await card(props as { kicker: string; title: string; sub?: string }), { headers: { 'Content-Type': 'image/png' } });
