# zine-elabidine.github.io

Personal site and writing. Built with [Astro](https://astro.build) and MDX, deployed to GitHub Pages on every push to `main`.

## Write

```sh
npm install
npm run new -- "Post title"   # creates src/content/writing/<slug>.mdx as a draft
npm run dev                   # http://localhost:4321, drafts included
```

Set `draft: false` in the front matter to publish. Drafts never reach the production build.

### Blocks for posts

Import from `src/components/blocks/`:

| Component | Use |
| --- | --- |
| `<Sidenote>` | Numbered margin note (inline on narrow screens) |
| `<Callout label="Caveat">` | Highlighted aside |
| `<Fold summary="…">` | Collapsible details or code |
| `<Flow steps={[…]} />` | Pipeline diagram; prefix a step with `*` to highlight it |
| `<BarChart rows={[…]} highlight={[…]} filters={[…]} />` | Bar chart with optional row filters |
| `<VoteSim />` | Interactive majority-vote simulation |

Math works with `$…$` and `$$…$$` (rendered to MathML, no extra CSS).
A `feature` block in the front matter puts a small chart next to the post when it's featured on the homepage.

## Configure

- Name, tagline, links, "Now" box and projects: `src/data/site.ts`
- Palette: `palette` in `src/data/site.ts`. All palettes live in `src/styles/palettes.css`.
