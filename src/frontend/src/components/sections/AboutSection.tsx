import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-accent">About</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Content */}
          <Card className="border-accent/20">
            <CardContent className="p-8 md:p-12 space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a marketing and growth leader with 10+ years across fintech and Web3, spanning modular infrastructure, crosschain systems, DeFi, tokenization, and institutional-grade crypto products.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I work closely with product, engineering, research, and BD to translate complex systems into clear narratives that drive adoption, ecosystem growth, and market trust.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I also write and contribute commentary across industry media, including Cointelegraph.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-neon"
                  asChild
                >
                  <a href="#">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent/30 hover:border-accent hover:bg-accent/10"
                  asChild
                >
                  <a href="#">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Portfolio
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
