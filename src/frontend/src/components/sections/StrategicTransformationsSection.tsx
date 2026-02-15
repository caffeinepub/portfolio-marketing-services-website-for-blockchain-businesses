import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const transformations = [
  {
    title: 'Avail Nexus',
    description:
      'Led narrative transition from a single DA layer to a crosschain coordination and liquidity layer—anchored around clear market framing, ecosystem alignment, and institutional-grade communications.'
  },
  {
    title: 'Neon EVM',
    description:
      'Reframed Neon from "EVM on Solana" into a Network Extension category, shaping positioning that connects Ethereum developer expectations with Solana-native scaling reality.'
  },
  {
    title: 'Launch & Partner Systems',
    description:
      'Built repeatable launch and partner communication systems across 25+ ecosystem integrations—messaging frameworks, press angles, partner narratives, and multi-channel rollouts.'
  },
  {
    title: 'Narrative as Acceleration (M&A)',
    description:
      'Positioned M&A announcements as capability unlocks and strategic direction—not internal news—so they accelerate GTM.'
  }
];

export default function StrategicTransformationsSection() {
  return (
    <section id="strategic-transformations" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Strategic <span className="text-accent">Transformations</span>
          </h2>
        </div>

        {/* Transformations Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {transformations.map((transformation, index) => (
            <Card key={index} className="border-accent/20">
              <CardHeader>
                <CardTitle className="text-xl">{transformation.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{transformation.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
