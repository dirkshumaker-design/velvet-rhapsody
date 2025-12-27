import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const socialLinks = {
    Instagram: 'https://www.instagram.com/dirk_shumaker/',
    Spotify: 'https://open.spotify.com/album/214ytOPWdfW4uJviw0FV06',
    Facebook: 'https://www.facebook.com/dirk.shumaker.2025/',
  };

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
              For more information about Dirk Shumaker
              <br />and Big Bad Voodoo Daddy
            </h2>
          </div>
          
          <div className={`space-y-8 mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div>
              <p className="text-muted-foreground text-sm tracking-[0.1em] uppercase mb-2">
                Booking & Inquiries
              </p>
              <a 
                href="mailto:"
                className="text-xl md:text-2xl font-light hover:text-muted-foreground transition-colors duration-300"
              >
                scott@artisanagency.net
              </a>
            </div>
            
            <div>
              <p className="text-muted-foreground text-sm tracking-[0.1em] uppercase mb-2">
                Management
              </p>
              <a 
                href="mailto:management@bbvd.com"
                className="text-xl md:text-2xl font-light hover:text-muted-foreground transition-colors duration-300"
              >
                management@bbvd.com
              </a>
            </div>
          </div>
          
          <div className={`flex justify-center space-x-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {Object.entries(socialLinks).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
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
