import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const capabilities = [
  {
    title: 'Category & Protocol Narrative Architecture',
    description:
      'Defining categories, wedges, and mental models so infrastructure is understood correctly before it is adopted.'
  },
  {
    title: 'Institutional & Ecosystem GTM Systems',
    description:
      'Aligning product, partnerships, developer education, and liquidity narratives into coordinated adoption engines.'
  },
  {
    title: 'Executive & Capital-Markets Positioning',
    description:
      'Structuring founder messaging and institutional communications with clarity, discipline, and repeatable storylines.'
  },
  {
    title: 'AI & Infrastructure Positioning',
    description:
      'Framing agentic systems, AI-native runtimes, and programmable financial layers for real-world adoption.'
  }
];

export default function WhatIBuildSection() {
  return (
    <section id="what-i-build" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            What I <span className="text-accent">Build</span>
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <Card key={index} className="border-accent/20">
              <CardHeader>
                <CardTitle className="text-xl">{capability.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{capability.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
