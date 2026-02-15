import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, ArrowRight } from 'lucide-react';

const examplePrompts = [
  'Position an AI-native L2 for institutional adoption.',
  'Create a category wedge for a modular protocol.',
  'What narrative risk do RWA products face right now?',
  'Turn a technical spec into a GTM story the market repeats.'
];

export default function AskMyNarrativeBrainSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="ask-my-narrative-brain" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Ask My <span className="text-accent">Narrative Brain</span>
          </h2>
        </div>

        {/* Content Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="text-2xl">Ask My Narrative Brain</CardTitle>
              <CardDescription className="text-base">
                Curious how I'd position your protocol, AI runtime, or financial layer? Ask.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-4">Example prompts:</h3>
                <ul className="space-y-3">
                  {examplePrompts.map((prompt, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <MessageSquare className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{prompt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-neon group"
                >
                  Open the assistant
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
