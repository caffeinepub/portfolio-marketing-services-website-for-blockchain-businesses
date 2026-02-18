import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-30 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/95 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-accent neon-text">Shailey Singh</span>
          </h1>

          {/* Subheadline - Two Lines */}
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground/90">
            <span className="block">
              <span className="font-semibold">Marketing</span>
              <span className="font-normal"> I </span>
              <span className="font-semibold">Strategic GTM</span>
              <span className="font-normal"> I </span>
              <span className="font-semibold">Narrative Positioning</span>
            </span>
            <span className="block mt-2 font-normal text-xl sm:text-2xl md:text-3xl">Blockchain, AI, Digital Assets & Financial Infrastructure</span>
          </h2>

          {/* Body Copy */}
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Strategic marketing leader driving global GTM, positioning, marketing and growth for digital asset infrastructure, tokenized finance, AI and emerging technology companies. Proven ability to align product, sales and executive narratives to accelerate adoption in markets.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('#selected-signals')}
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-neon text-lg px-8 py-6 group"
            >
              View Strategic Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#ask-my-narrative-brain')}
              className="text-lg px-8 py-6 border-accent/30 hover:border-accent hover:bg-accent/10"
            >
              Ask My Narrative Brain
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
}
