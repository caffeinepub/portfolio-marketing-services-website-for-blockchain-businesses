import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { experienceContent } from '@/content/aurientExperienceContent';
import SectionHeader from './SectionHeader';
import ImageOpenInNewTab from '../ImageOpenInNewTab';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Experience"
          subtitle="Strategic narrative and go-to-market leadership across Web3 infrastructure, AI systems, and financial protocols."
        />

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceContent.map((item, index) => (
            <Card 
              key={index} 
              className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-neon overflow-hidden"
            >
              {item.image && (
                <div className="aspect-[21/9] w-full overflow-hidden bg-muted">
                  <ImageOpenInNewTab
                    src={item.image}
                    alt={item.imageAlt || item.company}
                    className="cursor-pointer"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <CardTitle className="text-xl mb-1">{item.role}</CardTitle>
                        <p className="text-sm text-muted-foreground font-medium">{item.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.displayCategory && (
                          <Badge 
                            variant="outline" 
                            className="text-xs font-bold tracking-wider uppercase"
                          >
                            {item.displayCategory}
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-xs whitespace-nowrap">
                          {item.period}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-sm leading-relaxed mt-3">
                      {item.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="ml-16 space-y-3">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, highlightIndex) => (
                      <li 
                        key={highlightIndex} 
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
