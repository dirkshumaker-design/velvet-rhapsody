import { useEffect, useRef, useState } from 'react';
import bassDetail from '@/assets/bass-detail.jpg';

const Cameo = () => {
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

  const cameoOptions = [
    {
      title: 'Personal Message',
      price: '$30',
      description: 'A personalized video message for birthdays, anniversaries, or special occasions.',
      features: ['Up to 2 minutes', 'Personalized script', 'Digital delivery'],
    },
    {
      title: 'Commercial Message',
      price: '$300',
      description: 'A custom musical performance with a commercial message dedication.',
      features: ['Original bass performance', 'Personal dedication', 'HD video quality'],
      featured: true,
    },
    {
      title: 'Masterclass Session',
      price: 'TBA',
      description: 'A comprehensive masterclass covering bass techniques and performance tips with video lessons, exercises, and assignments.',
      features: ['30-minute live session', 'Q&A included', 'Professional Advice'],
    },
  ];

  return (
    <section id="cameo" ref={sectionRef} className="relative py-32 md:py-40 bg-card overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={bassDetail} 
          alt="Upright bass detail" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-card via-card/95 to-card" />
      </div>
      
      {/* Elegant background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-transparent via-gold/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <p className="text-gold text-sm tracking-[0.4em] uppercase mb-6">
              Personal Connection
            </p>
          </div>
          
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Book a <span className="italic text-gold/80">Cameo</span>
            </h2>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Bring the magic of live jazz into your life with a personalized experience 
              from Dirk Shumaker.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cameoOptions.map((option, index) => (
            <div
              key={option.title}
              className={`group relative p-8 md:p-10 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${option.featured ? 'bg-background border-2 border-gold/30' : 'bg-background/50 border border-border/50'}`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              {option.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-xs tracking-[0.2em] uppercase bg-gold text-background px-4 py-1">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-light tracking-wide mb-3 group-hover:text-gold transition-colors duration-500">
                  {option.title}
                </h3>
                <p className="text-4xl font-light text-gold mb-4">{option.price}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {option.description}
                </p>
              </div>
              
              <ul className="space-y-3 mb-10">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://www.cameo.com/dirkshumaker?qid=1766816055&aaQueryId=adf84721ad896d680291f3f5290c12fc" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-block w-full py-4 text-sm tracking-[0.2em] uppercase transition-all duration-500 text-center ${
                option.featured 
                  ? 'bg-gold text-background hover:bg-gold/90' 
                  : 'border border-foreground/30 text-foreground hover:bg-foreground hover:text-background'
              }`}>
                Book Now
              </a>
              
              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className={`mt-24 max-w-3xl mx-auto text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-gold/20 font-serif">"</div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cameo;