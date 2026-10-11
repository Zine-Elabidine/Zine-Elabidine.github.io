// Everything personal on the site lives here, so edits don't mean touching layouts.
export const site = {
  name: 'Zine-Elabidine Laaboudi',
  title: 'Zine-Elabidine Laaboudi',
  tagline: 'AI/ML Engineer.',
  // Homepage "About": a draft in plain words, his to rewrite.
  about: [
    "I'm an AI/ML engineer. I build AI agents and the tools around them, and I fine-tune and evaluate models. My open-source work is on the projects page.",
    "I follow AI research closely, mostly interpretability and alignment, and I care about AI staying open and accessible to everyone. Here I write about the experiments I run.",
  ],
  description: 'Articles and projects on AI agents, context engineering and evaluation.',
  // Palette names come from src/styles/palettes.css.
  palette: 'navy',
  links: [
    { label: 'github', href: 'https://github.com/Zine-Elabidine' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/zine-elabidine-laaboudi' },
    { label: 'rss', href: '/rss.xml' },
  ],
};

// Projects page and homepage. `featured` ones also show on the homepage.
export const projects = [
  {
    name: 'diwan',
    href: 'https://github.com/Zine-Elabidine/diwan',
    what: 'Agent runtime built from the loop up: tool calling, approvals, an append-only tree log of every session, model switching mid-conversation.',
    tags: ['agents', 'python'],
    featured: true,
  },
  {
    name: 'tarjuman',
    href: 'https://github.com/Zine-Elabidine/tarjuman',
    what: 'One neutral message format for OpenAI and Anthropic APIs: switch models mid-conversation without losing tool calls or reasoning.',
    tags: ['llm apis', 'python'],
    featured: true,
  },
  {
    name: 'nl2sql',
    href: 'https://github.com/Zine-Elabidine/nl2sql',
    what: 'Text-to-SQL on BIRD: SFT → GRPO fine-tuning vs. self-consistency, 63.7% execution accuracy. Voting beat fine-tuning.',
    tags: ['fine-tuning', 'evals'],
    featured: true,
  },
  {
    name: 'telepathy',
    href: 'https://github.com/Zine-Elabidine/telepathy',
    what: 'Coding-agent memory on every machine: memory bundles chosen per project, synced through git.',
    tags: ['agents', 'cli'],
  },
  {
    name: 'research-mcp',
    href: 'https://github.com/Zine-Elabidine/research-mcp',
    what: 'MCP server that federates web, community and demand search for agents.',
    tags: ['mcp'],
  },
];

// Older and study projects: a plain list under the main ones.
export const moreProjects = [
  { name: 'CVRPTW with RL', href: 'https://github.com/Zine-Elabidine/CVRPTW-with-Reinforcement-learning-Dynamic-Attention-Mechanisms' },
  { name: 'Transformer from scratch', href: 'https://github.com/Zine-Elabidine/Transformer-from-scratch' },
  { name: 'Positional encodings', href: 'https://github.com/Zine-Elabidine/Positional-Encodings-Overview' },
  { name: 'PEFT methods', href: 'https://github.com/Zine-Elabidine/PEFT-Methods' },
  { name: 'Seq2seq translation', href: 'https://github.com/Zine-Elabidine/Seq2Seq-machine-Translation-Models' },
  { name: 'RAG with Llama 2', href: 'https://github.com/Zine-Elabidine/RAG-with-Llama-v2' },
  { name: 'Fast style transfer', href: 'https://github.com/Zine-Elabidine/Fast-Style-Transfer' },
];
