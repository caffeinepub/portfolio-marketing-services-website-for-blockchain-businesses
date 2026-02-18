export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  displayCategory?: 'AI' | 'ART' | 'TECH' | 'CRYPTO' | 'CULTURE';
  image?: string;
  imageAlt?: string;
}

export const experienceContent: ExperienceItem[] = [
  {
    role: "Strategic GTM & Narrative Lead",
    company: "Web3 Infrastructure Protocols",
    period: "2023 - Present",
    description: "Leading narrative architecture and institutional go-to-market for next-generation blockchain infrastructure, AI systems, and financial protocols.",
    highlights: [
      "Architected category-defining narratives for AI infrastructure and cross-chain coordination",
      "Built institutional GTM systems spanning product, partnerships, and capital markets",
      "Executed 25+ ecosystem launches with coordinated messaging and technical positioning",
      "Positioned executive thought leadership for conferences, investors, and strategic partners"
    ],
    displayCategory: "TECH",
    image: "/assets/aurient/experience/web3-infra.png",
    imageAlt: "Web3 Infrastructure"
  },
  {
    role: "Head of Strategic Communications",
    company: "Avail (formerly Polygon Avail)",
    period: "2022 - 2023",
    description: "Led narrative transition from data availability layer to cross-chain coordination and liquidity platform, aligning ecosystem and institutional messaging.",
    highlights: [
      "Reframed protocol positioning from single DA layer to Nexus coordination layer",
      "Designed institutional communications framework for capital markets and partnerships",
      "Built repeatable launch systems for ecosystem integrations and partner announcements",
      "Structured M&A communications as strategic capability unlocks"
    ],
    displayCategory: "CRYPTO",
    image: "/assets/aurient/experience/avail.png",
    imageAlt: "Avail Project"
  },
  {
    role: "GTM & Positioning Lead",
    company: "Neon EVM",
    period: "2021 - 2022",
    description: "Reframed Neon from 'EVM on Solana' into Network Extension category, connecting Ethereum developer expectations with Solana-native scaling reality.",
    highlights: [
      "Created Network Extension category positioning for EVM compatibility layer",
      "Aligned developer education with institutional adoption narratives",
      "Built launch and partner communication systems for ecosystem integrations",
      "Positioned technical architecture for developer and institutional audiences"
    ],
    displayCategory: "TECH",
    image: "/assets/aurient/experience/neon.png",
    imageAlt: "Neon EVM"
  },
  {
    role: "Strategic Marketing & Narrative",
    company: "Early-Stage Web3 Protocols",
    period: "2020 - 2021",
    description: "Developed narrative frameworks and go-to-market strategies for emerging blockchain infrastructure and DeFi protocols during market formation phase.",
    highlights: [
      "Architected positioning for novel protocol categories and market wedges",
      "Built messaging frameworks connecting technical innovation to market adoption",
      "Designed launch strategies for developer tools and infrastructure platforms",
      "Structured communications for fundraising and partnership announcements"
    ],
    displayCategory: "CRYPTO",
    image: "/assets/aurient/experience/early-stage.png",
    imageAlt: "Early-Stage Web3"
  }
];
