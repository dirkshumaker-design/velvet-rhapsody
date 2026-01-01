import { useEffect, useState } from 'react';
import heroBass from '@/assets/b&w.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBass} 
          alt="Dirk Shumaker performing on bass" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="absolute inset-0 bg-background/40" />
      </div>
      
      {/* Elegant floating circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full border border-border/10 animate-breathe"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full border border-border/5 animate-breathe"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full border border-gold/10 animate-breathe"
          style={{ animationDelay: '4s' }}
        />
        
        {/* Decorative lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
          <line 
            x1="10%" y1="0" x2="30%" y2="100%" 
            stroke="hsl(var(--border))" 
            strokeWidth="0.5"
            className="animate-draw-line"
            style={{ animationDelay: '1s' }}
          />
          <line 
            x1="70%" y1="0" x2="90%" y2="100%" 
            stroke="hsl(var(--border))" 
            strokeWidth="0.5"
            className="animate-draw-line"
            style={{ animationDelay: '1.5s' }}
          />
        </svg>
      </div>
      
      <div className="relative z-10 text-center px-6">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground text-sm md:text-base tracking-[0.4em] uppercase mb-8 animate-shimmer">
            Bassist & Vocalist
          </p>
        </div>
        
        <div className={`transition-all duration-1200 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.15em] mb-4">
            <span className="inline-block hover:text-gold transition-colors duration-500">DIRK</span>
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.08em] mb-8">
            <span className="italic font-normal text-foreground/90">Shumaker</span>
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="text-muted-foreground text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed">
             Experience the soul of modern Swing, <br className="hidden md:block" />
            with the renowned basist from Big Bad Voodoo Daddy
          </p>
        </div>
        
        <div className={`mt-14 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://open.spotify.com/artist/6ROyXB8NDG0fA78S46JdTB"
            className="group relative inline-block px-10 py-5 border border-foreground/30 text-foreground text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:border-gold"
          >
            <span className="relative z-10 group-hover:text-background transition-colors duration-500">Listen Now</span>
            <div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
          <a
            href="https://www.cameo.com/dirkshumaker?qid=1766816055&aaQueryId=adf84721ad896d680291f3f5290c12fc"
            className="group relative inline-block px-10 py-5 border border-gold/50 text-gold text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:border-gold"
          >
            <span className="relative z-10 group-hover:text-background transition-colors duration-500">Book a Cameo</span>
            <div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
          </a>
        </div>
      </div>
      
      {/* Elegant scroll indicator */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center text-muted-foreground">
          <span className="text-xs tracking-[0.3em] uppercase mb-4">Scroll</span>
          <div className="relative w-6 h-10 border border-muted-foreground/30 rounded-full">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-gold rounded-full animate-scroll-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
