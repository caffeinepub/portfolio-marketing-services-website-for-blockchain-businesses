export interface SelectItem {
  title: string;
  category: string;
  displayCategory: 'AI' | 'ART' | 'TECH' | 'CRYPTO' | 'CULTURE';
  description: string;
  tags: string[];
  link?: string;
  year: string;
  image?: string;
  imageAlt?: string;
}

export const selectsContent: SelectItem[] = [
  {
    title: "AI Infrastructure Narrative",
    category: "Protocol Positioning",
    displayCategory: "AI",
    description: "Architected category-defining narrative for next-generation AI infrastructure, positioning the protocol as the foundational layer for agentic systems and autonomous compute.",
    tags: ["AI", "Infrastructure", "Category Design"],
    year: "2025",
    image: "/assets/aurient/selects/ai-infrastructure.png",
    imageAlt: "AI Infrastructure visualization"
  },
  {
    title: "Institutional GTM Framework",
    category: "Go-to-Market",
    displayCategory: "CRYPTO",
    description: "Designed and executed institutional go-to-market system spanning product positioning, partnership narratives, and capital markets communications for Web3 infrastructure.",
    tags: ["GTM", "Institutional", "Strategy"],
    year: "2025",
    image: "/assets/aurient/selects/institutional-gtm.png",
    imageAlt: "Institutional GTM Framework"
  },
  {
    title: "Cross-Chain Liquidity Positioning",
    category: "Ecosystem Strategy",
    displayCategory: "CRYPTO",
    description: "Led narrative transition from single-layer infrastructure to cross-chain coordination platform, aligning ecosystem messaging with institutional adoption requirements.",
    tags: ["DeFi", "Liquidity", "Positioning"],
    year: "2024",
    image: "/assets/aurient/selects/cross-chain-liquidity.png",
    imageAlt: "Cross-Chain Liquidity"
  },
  {
    title: "Developer Ecosystem Launch",
    category: "Community & Education",
    displayCategory: "TECH",
    description: "Built repeatable launch system for 25+ ecosystem integrations, including messaging frameworks, technical documentation, and multi-channel rollout strategies.",
    tags: ["Developer Relations", "Ecosystem", "Launch"],
    year: "2024",
    image: "/assets/aurient/selects/developer-ecosystem.png",
    imageAlt: "Developer Ecosystem"
  },
  {
    title: "Executive Thought Leadership",
    category: "Capital Markets",
    displayCategory: "CULTURE",
    description: "Structured founder messaging and institutional communications with disciplined storylines for capital markets, conferences, and strategic partnerships.",
    tags: ["Executive Positioning", "Thought Leadership"],
    year: "2024",
    image: "/assets/aurient/selects/executive-thought-leadership.png",
    imageAlt: "Executive Thought Leadership"
  },
  {
    title: "M&A Strategic Communications",
    category: "Corporate Strategy",
    displayCategory: "CRYPTO",
    description: "Positioned M&A announcements as capability unlocks and strategic direction signals, transforming internal news into GTM acceleration opportunities.",
    tags: ["M&A", "Strategic Comms", "Positioning"],
    year: "2024",
    image: "/assets/aurient/selects/ma-strategic-comms.png",
    imageAlt: "M&A Strategic Communications"
  }
];
