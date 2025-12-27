import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 md:py-40 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-8">
              The Artist
            </p>
          </div>
          
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed mb-12">
              A journey through rhythm, <br className="hidden md:block" />
              <span className="italic">melody</span>, and soul.
            </h2>
          </div>
          
          <div className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Born in New Orleans and raised on the classics, Marcus Cole has spent 
                over two decades crafting a sound that bridges the gap between bebop 
                tradition and contemporary expression.
              </p>
              <p>
                His approach to the piano is both reverent and revolutionary—honoring 
                the masters while pushing boundaries into unexplored territories.
              </p>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                With performances at Blue Note, Village Vanguard, and festivals 
                across four continents, Marcus has established himself as one of 
                the most compelling voices in modern jazz.
              </p>
              <p>
                His compositions weave intricate harmonic tapestries with an 
                emotional depth that speaks to audiences worldwide.
              </p>
            </div>
          </div>
          
          <div className={`mt-16 pt-16 border-t border-border transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-light mb-2">25+</p>
                <p className="text-muted-foreground text-sm tracking-[0.1em] uppercase">Years Active</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-light mb-2">12</p>
                <p className="text-muted-foreground text-sm tracking-[0.1em] uppercase">Albums</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-light mb-2">40+</p>
                <p className="text-muted-foreground text-sm tracking-[0.1em] uppercase">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
