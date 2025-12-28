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
              The Big Bass Voodoo Daddy
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
                I was born and raised in Southern California and grew up listening to a variety of music. 
                In elementary school, I learned to play and read music on the trombone and participated in 
                the school orchestra. While in middle school, I learned to play the acoustic guitar and 
                gradually began to play the electric bass guitar. This is where I had music classes with 
                the incredible band instructor, Isaac Jenkins. I enjoyed three years of music instruction 
                from this talented gentleman and carried my musical education though High School. 
                At Santa Barbara High School I had the once in a lifetime opportunity to participate in the choral program 
                under the direction of Dr. Phyllis Zimmerman. Her instruction advanced my musical appreciation 
                well beyond what I could imagine. 
              </p>
              <p>
                In 1992, I came across a 1961 Kay M-1 upright bass on consignment at Cowboy Star Guitars in Santa Barbara CA. 
                Once I started telling people I had an upright bass, I began to get a lot of calls for gigs. It was both a blessing 
                and curse because I had a lot to learn about playing an upright! 
              </p>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
          
              <p>
                In February 1993, I got a call from a drummer in Ventura CA named Kurt Sodergren. He said that he was friends with a guitar 
                player named Scotty Morris and they wanted to put together a band that would play swing music. They knew a trumpet player and 
                a saxophone player, and if I would be interested? I remember meeting the guys for the first time and we all hit it off right away. 
                We kept practicing and soon enough we made our public debut, playing a backyard party for a mutual friend’s birthday. It's been 
                over 30 years since that first public performance together, and Big Bad Voodoo Daddy are still going strong. Boy, I sure am grateful 
                I bought that old upright bass when I did!  
              </p>
            </div>
          </div>
          
          <div className={`mt-20 pt-16 border-t border-border/50 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="grid grid-cols-3 gap-8 text-center">
              {[
                { number: '25+', label: 'Years Active' },
                { number: '9', label: 'Albums' },
                { number: '10+', label: 'Countries' }
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