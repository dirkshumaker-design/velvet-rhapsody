import { useEffect, useRef, useState } from 'react';

const Contact = () => {
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
    <section id="contact" ref={sectionRef} className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-8">
              Connect
            </p>
          </div>
          
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-12">
              Let's create <span className="italic">something</span>
              <br />beautiful together
            </h2>
          </div>
          
          <div className={`space-y-8 mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div>
              <p className="text-muted-foreground text-sm tracking-[0.1em] uppercase mb-2">
                Booking & Inquiries
              </p>
              <a 
                href="mailto:booking@marcuscole.com"
                className="text-xl md:text-2xl font-light hover:text-muted-foreground transition-colors duration-300"
              >
                booking@marcuscole.com
              </a>
            </div>
            
            <div>
              <p className="text-muted-foreground text-sm tracking-[0.1em] uppercase mb-2">
                Press
              </p>
              <a 
                href="mailto:press@marcuscole.com"
                className="text-xl md:text-2xl font-light hover:text-muted-foreground transition-colors duration-300"
              >
                press@marcuscole.com
              </a>
            </div>
          </div>
          
          <div className={`flex justify-center space-x-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {['Instagram', 'Spotify', 'YouTube'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-muted-foreground text-sm tracking-[0.15em] uppercase hover:text-foreground transition-colors duration-300"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
