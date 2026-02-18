import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { selectsContent } from '@/content/aurientSelectsContent';
import SectionHeader from './SectionHeader';
import ImageOpenInNewTab from '../ImageOpenInNewTab';

export default function SelectsSection() {
  return (
    <section id="selects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Selects"
          subtitle="Featured work spanning narrative architecture, institutional GTM, and strategic positioning for Web3, AI, and financial infrastructure."
        />

        {/* Selects Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectsContent.map((item, index) => (
            <Card 
              key={index} 
              className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-neon group overflow-hidden"
            >
              {item.image && (
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <ImageOpenInNewTab
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    className="cursor-pointer"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge 
                    variant="outline" 
                    className="text-xs font-bold tracking-wider uppercase"
                  >
                    {item.displayCategory}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{item.year}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-accent hover:underline"
                  >
                    View Project <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
