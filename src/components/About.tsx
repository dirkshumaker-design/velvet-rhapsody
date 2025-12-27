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
    <section id="about" ref={sectionRef} className="relative py-32 md:py-40 bg-card overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-gold rounded-full animate-rotate-slow" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <p className="text-gold text-sm tracking-[0.4em] uppercase mb-8">
              The Artist
            </p>
          </div>
          
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-relaxed mb-12">
              A journey through rhythm, <br className="hidden md:block" />
              <span className="italic text-gold/80">melody</span>, and soul.
            </h2>
          </div>
          
          <div className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Dirk Shumaker has spent over two decades crafting a sound that 
                bridges the gap between bebop tradition and contemporary expression, 
                establishing himself as a premier jazz bassist.
              </p>
              <p>
                His approach to the bass is both reverent and revolutionary—honoring 
                the masters while pushing boundaries into unexplored territories.
              </p>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                With performances at legendary venues like Blue Note, Village Vanguard, 
                and festivals across four continents, Dirk has established himself as one of 
                the most compelling voices in modern jazz.
              </p>
              <p>
                His compositions weave intricate harmonic tapestries with an 
                emotional depth that speaks to audiences worldwide.
              </p>
            </div>
          </div>
          
          <div className={`mt-20 pt-16 border-t border-border/50 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="grid grid-cols-3 gap-8 text-center">
              {[
                { number: '25+', label: 'Years Active' },
                { number: '12', label: 'Albums' },
                { number: '40+', label: 'Countries' },
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="group cursor-default"
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <p className="text-5xl md:text-6xl font-light mb-3 text-foreground group-hover:text-gold transition-colors duration-500">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground text-sm tracking-[0.15em] uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;