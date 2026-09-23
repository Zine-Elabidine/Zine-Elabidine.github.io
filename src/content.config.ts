import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // Drafts render in `npm run dev` and are left out of the production build.
    draft: z.boolean().default(false),
    // Optional headline figure shown on the homepage when this post is featured.
    feature: z
      .object({
        caption: z.string(),
        highlight: z.string().optional(),
        rows: z.array(z.object({ label: z.string(), value: z.number() })),
      })
      .optional(),
  }),
});

export const collections = { writing };
