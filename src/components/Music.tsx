import { useEffect, useRef, useState } from 'react';

const albums = [
  {
    title: 'Still In The Mood',
    year: '2012',
    description: 'A nocturnal journey through contemplative landscapes',
  },
  {
    title: 'You\'re A Mean One Mr. Grinch',
    year: '2013',
    description: 'The sounds of city life translated into jazz',
  },
  {
    title: 'You & Me & The Bottle Makes 3 Tonight Live Recording',
    year: '2004',
    description: 'Dawn compositions capturing new beginnings',
  },
  {
    title: 'Still In Love With You',
    year: '1999',
    description: 'Reimagining timeless classics',
  },
];

const Music = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="music" ref={sectionRef} className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className={`max-w-4xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-8">
            Discography
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
            Selected <span className="italic">Works</span>
          </h2>
        </div>
        
        <div className="space-y-0">
          {albums.map((album, index) => (
            <div
              key={album.title}
              className={`group border-t border-border last:border-b transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-all duration-500 hover:bg-card hover:px-6">
                <div className="flex items-baseline space-x-4 md:space-x-8 mb-4 md:mb-0">
                  <span className="text-muted-foreground text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-light group-hover:tracking-wider transition-all duration-500">
                    {album.title}
                  </h3>
                </div>
                
                <div className="flex items-center space-x-8 md:space-x-16">
                  <p className="text-muted-foreground text-sm md:text-base max-w-xs hidden lg:block">
                    {album.description}
                  </p>
                  <span className="text-muted-foreground text-sm tracking-wider">
                    {album.year}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <a
            href="#"
            className="inline-flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span className="text-sm tracking-[0.2em] uppercase">View Full Discography</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Music;
