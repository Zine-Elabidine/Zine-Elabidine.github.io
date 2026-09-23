// Everything personal on the site lives here, so edits don't mean touching layouts.
export const site = {
  name: 'Zine-Elabidine Laaboudi',
  title: 'Zine-Elabidine Laaboudi',
  tagline: 'AI engineer. I build agent runtimes, the sandboxes they run in, and the evals that keep them honest.',
  description: 'Writing and projects on LLM agents, reinforcement learning and evaluation.',
  location: 'Kénitra, Morocco',
  // Palette names come from src/styles/palettes.css.
  palette: 'graphite',
  links: [
    { label: 'github', href: 'https://github.com/Zine-Elabidine' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/zine-elabidine-laaboudi' },
    { label: 'rss', href: '/rss.xml' },
  ],
  now: {
    updated: 'Sep 2026',
    items: ['Studying RL from scratch: REINFORCE → PPO → GRPO', 'Writing up the nl2sql results'],
  },
};

export const projects = [
  {
    name: 'nl2sql',
    href: 'https://github.com/Zine-Elabidine/nl2sql',
    what: 'Text-to-SQL on BIRD: fine-tuning vs. self-consistency',
    result: '63.7 EX',
  },
  {
    name: 'research-mcp',
    href: 'https://github.com/Zine-Elabidine/research-mcp',
    what: 'Federated research tools for agents over MCP',
    result: 'MCP',
  },
];
