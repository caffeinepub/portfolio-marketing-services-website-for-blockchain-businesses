import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Bell } from 'lucide-react';

export default function MarketNotesSection() {
  return (
    <section id="market-notes" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Market <span className="text-accent">Notes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Market notes at the intersection of infrastructure, adoption, and narrative.
          </p>
        </div>

        {/* Content Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="text-2xl">Topics I write about include:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stablecoin settlement rails • Crosschain coordination • Modular execution • Institutional adoption • AI-native financial systems
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-neon"
                  asChild
                >
                  <a href="#">
                    <FileText className="mr-2 h-5 w-5" />
                    Browse Market Notes
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-accent/30 hover:border-accent hover:bg-accent/10" asChild>
                  <a href="#">
                    <Bell className="mr-2 h-5 w-5" />
                    Subscribe (optional)
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
