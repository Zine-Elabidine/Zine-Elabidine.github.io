import rss from '@astrojs/rss';
import { site } from '../data/site';
import { getPosts } from '../lib/posts';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: site.name,
    description: site.description,
    site: context.site,
    items: posts.map((p) => ({ title: p.data.title, description: p.data.summary, pubDate: p.data.date, link: `/writing/${p.id}/` })),
  });
}
