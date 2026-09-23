// Usage: npm run new -- "Post title"
import { writeFileSync, existsSync } from 'node:fs';

const title = process.argv.slice(2).join(' ').trim();
if (!title) { console.error('Usage: npm run new -- "Post title"'); process.exit(1); }
const slug = title.toLowerCase().normalize('NFKD').replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-').slice(0, 60);
const path = `src/content/writing/${slug}.mdx`;
if (existsSync(path)) { console.error(`${path} already exists`); process.exit(1); }
const today = new Date().toISOString().slice(0, 10);
writeFileSync(path, `---
title: ${JSON.stringify(title)}
summary: ""
date: ${today}
tags: []
draft: true
---
import Sidenote from '../../components/blocks/Sidenote.astro';
import Callout from '../../components/blocks/Callout.astro';

## First section

`);
console.log(`Created ${path} (draft). Set draft: false to publish.`);
