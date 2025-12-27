import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Subtle animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-border/20 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full border border-border/10 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 text-center px-6">
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            Jazz Pianist & Composer
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.1em] mb-8">
            MARCUS
            <br />
            <span className="italic font-normal">Cole</span>
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed">
            Where tradition meets innovation. <br className="hidden md:block" />
            Experience the soul of modern jazz.
          </p>
        </div>
        
        <div className={`mt-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="#music"
            className="inline-block px-8 py-4 border border-foreground/30 text-foreground text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Listen Now
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center text-muted-foreground">
          <span className="text-xs tracking-[0.2em] uppercase mb-4">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
