import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/sections/HeroSection';
import SelectedSignalsSection from './components/sections/SelectedSignalsSection';
import SelectsSection from './components/sections/SelectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import MarketNotesSection from './components/sections/MarketNotesSection';
import AskMyNarrativeBrainSection from './components/sections/AskMyNarrativeBrainSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';

function App() {
  useEffect(() => {
    // Smooth scroll polyfill for older browsers
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <SelectedSignalsSection />
          <SelectsSection />
          <ExperienceSection />
          <MarketNotesSection />
          <AskMyNarrativeBrainSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
