import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Music from '@/components/Music';
import Shows from '@/components/Shows';
import Cameo from '@/components/Cameo';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-serif">
      <Navigation />
      <Hero />
      <About />
      <Music />
      <Shows />
      <Cameo />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
