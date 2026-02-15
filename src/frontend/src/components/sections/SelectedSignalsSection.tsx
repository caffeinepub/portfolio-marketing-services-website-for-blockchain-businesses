import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import LinkPreview from '@/components/LinkPreview';

const signals = [
  {
    title: 'AVAIL — The Nexus Effect',
    category: 'Strategic Repositioning',
    description: 'Repositioning Avail from Data Availability layer to a crosschain coordination infra layer for web3 apps.',
    link: 'https://availproject.org/nexus',
    showPreview: true
  },
  {
    title: 'NEON EVM — Network Extensions',
    category: 'Category creation',
    description: 'Pioneer Solana Network extension and category creation towards a Solana-native scaling surface.',
    link: 'https://cryptoslate.com/press-releases/neon-evm-adopts-network-extensions-to-redefine-solanas-product-categories/',
    showPreview: true
  },
  {
    title: 'AVAIL × ARCANA',
    category: 'Merger & acquisition',
    description: 'Merger & Acquisition as narrative acceleration for multichain scalability',
    link: 'https://blog.availproject.org/avail-acquires-arcana-to-accelerate-multichain-scalability/',
    showPreview: true
  },
  {
    title: 'ROLLAPPS ON SOLANA — EthCC',
    category: 'Thought Leadership',
    description: 'A thesis for application-specific rollups and modular execution on Solana.',
    link: 'https://luma.com/jl85cn4t',
    showPreview: true
  },
  {
    title: 'COINTELEGRAPH — Opinion Contributor',
    category: 'Industry takes',
    description: 'Research-driven commentary across DeFi, AI, stablecoins, tokenization, RWAs, and emerging tech.',
    link: 'https://cointelegraph.com/authors/shailey-singh',
    showPreview: true
  },
  {
    title: 'FANCY STUDIOS — Gaming Creativity',
    category: 'Blockchain gaming',
    description: 'Built the marketing function from 0→1, defining strategy, processes across content, design, PR, and community.',
    link: 'https://fancy-studios.gitbook.io/whitepaper',
    showPreview: true
  }
];

export default function SelectedSignalsSection() {
  return (
    <section id="selected-signals" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Signature <span className="text-accent">Transformative Work</span>
          </h2>
        </div>

        {/* Signals Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {signals.map((signal, index) => (
            <Card key={index} className="border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">{signal.title}</CardTitle>
                <p className="text-sm italic text-muted-foreground">{signal.category}</p>
                <CardDescription className="text-base">{signal.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Link Preview - for signals with showPreview enabled */}
                {signal.showPreview && signal.link.startsWith('https://') && (
                  <LinkPreview url={signal.link} />
                )}
                
                {/* Open Button */}
                <Button
                  variant="ghost"
                  className="text-accent hover:text-accent/80 p-0 h-auto font-medium"
                  asChild
                >
                  <a href={signal.link} target="_blank" rel="noopener noreferrer">
                    Open <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
