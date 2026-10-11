// The resume page (/cv). Edit the content here; the layout lives in src/pages/cv.astro.
// Items are plain strings; **bold** marks the few words a reader should catch first.

export const cv = {
  role: 'AI Engineer',
  email: 'zine.elabidine251@gmail.com',
  // Built from ~/Documents/CV/general/cv_laaboudi_en.tex (no phone number: this file is public).
  pdf: '/cv/Zine-Elabidine_Laaboudi_CV.pdf',
  languages: 'Arabic, French, English (TOEIC 950/990)',

  experience: [
    {
      org: 'Sekera Group',
      place: 'Casablanca',
      title: 'AI Engineer',
      dates: 'May 2025 – now',
      intro: 'A multi-tenant security-operations platform. I work on its **agent layer**, from the first version to running it in production.',
      items: [
        '**Production agents** on the Claude Agent SDK: custom MCP tools, subagents, sessions you can steer mid-turn, human approval of actions, background jobs under budget limits.',
        '**Observability**: token, cache and cost accounting per session, a live view of turns in flight, job tracing.',
        '**Multi-provider LLM gateway**: five backends behind one interface, normalized streaming, encrypted bring-your-own-key credentials.',
        '**Sandboxing and back end**: every agent session runs in a gVisor sandbox with no secrets inside; async FastAPI services on PostgreSQL, Docker, CI/CD.',
      ],
    },
    {
      org: 'SEGULA Technologies',
      place: 'Casablanca',
      title: 'AI Engineer',
      dates: 'Jun 2024 – Oct 2024',
      items: [
        'An attention-based encoder–decoder LSTM that reconstructs crash-test signals to tell sliding from bouncing impacts.',
        'A scikit-learn classifier that flags defective welding points in simulation models, replacing a manual check.',
      ],
    },
    {
      org: 'SEGULA Technologies',
      place: 'Casablanca',
      title: 'AI Research Intern',
      dates: 'Feb 2024 – Jun 2024',
      items: [
        'An attention-based reinforcement-learning solver for vehicle routing with capacities and time windows (CVRPTW).',
      ],
    },
    {
      org: 'AIOX Labs',
      place: 'Rabat',
      title: 'Data Science Intern',
      dates: 'Jun 2023 – Aug 2023',
      items: [
        'A RAG chatbot (Llama 2, FAISS, LangChain) that let staff query customer records in plain language.',
      ],
    },
  ],

  projects: [
    {
      name: 'diwan + tarjuman',
      href: 'https://github.com/Zine-Elabidine/diwan',
      what: 'An agent runtime built from the loop up, no framework: tool calling, approvals, child agents, MCP, a sandbox, and long sessions that compact without losing the log. One conversation can **switch models mid-session** (OpenAI, Anthropic, local vLLM).',
    },
    {
      name: 'nl2sql',
      href: 'https://github.com/Zine-Elabidine/nl2sql',
      what: 'An execution-accuracy harness over the full BIRD dev set (1,534 questions); 7 setups compared, best **63.7%**. Fine-tuned Qwen2.5-Coder-7B with LoRA SFT → GRPO and worked out why it did not beat the base model; voting over 8 samples added +5.4 points with no training.',
    },
    {
      name: 'telepathy',
      href: 'https://github.com/Zine-Elabidine/telepathy',
      what: 'Coding-agent memory on every machine: memory bundles chosen per project, synced through git.',
    },
    {
      name: 'research-mcp',
      href: 'https://github.com/Zine-Elabidine/research-mcp',
      what: 'An MCP research server: concurrent fan-out over 6 providers with graceful degradation, deduplication and a local corpus.',
    },
  ],

  skills: [
    { area: 'LLM systems', list: 'agents and tool calling, MCP, RAG, vector search (FAISS, pgvector), evaluation harnesses, LangGraph, Langfuse, Claude Agent SDK, Anthropic and OpenAI APIs' },
    { area: 'Training', list: 'LoRA / QLoRA, SFT, GRPO (Unsloth, TRL, PEFT), vLLM, PyTorch, scikit-learn' },
    { area: 'Back end', list: 'Python, SQL, FastAPI, asyncio, Pydantic, PostgreSQL, Docker, gVisor, Linux, GitHub Actions' },
  ],

  education: [
    {
      org: "Académie Internationale Mohammed VI de l'Aviation Civile (AIAC)",
      place: 'Casablanca',
      title: "State Engineering Degree (Master's level), Computer Science",
      dates: '2021 – 2024',
    },
    {
      org: 'CPGE Mohammed VI',
      place: 'Kénitra',
      title: 'Preparatory classes, mathematics and physics',
      dates: '2019 – 2021',
    },
  ],

  awards: [
    { what: 'Mastercard & UM6P Fintech Hackathon, 3rd place', detail: 'AI for ROSCA collective savings' },
  ],
};
