import { useEffect, useRef, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Show {
  date: string;
  venue: string;
  city: string;
  status: string;
  ticketUrl?: string;
  eventId?: string;
}

const fallbackShows: Show[] = [
  {
    date: 'Feb 20',
    venue: 'Wells Hall at The Parker',
    city: 'Ft Lauderdale, FL',
    status: 'Tickets Available',
  },
  {
    date: 'May 31',
    venue: 'Orpheum Theater',
    city: 'New Orleans, LA',
    status: 'Tickets Available',
  },
  {
    date: 'Nov 29',
    venue: 'Plaza Theatre',
    city: 'Palm Springs, CA',
    status: 'Tickets Available',
  },
];

const Shows = () => {
  const [shows, setShows] = useState<Show[]>(fallbackShows);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('ticketmaster-shows');
        
        if (error) {
          console.error('Error fetching shows:', error);
          return;
        }

        if (data?.shows && data.shows.length > 0) {
          setShows(data.shows);
        }
      } catch (error) {
        console.error('Failed to fetch shows:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

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
    <section id="shows" ref={sectionRef} className="py-32 md:py-40 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className={`max-w-4xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-8">
            Live
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
            Upcoming <span className="italic">Performances</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-pulse text-muted-foreground">Loading shows...</div>
            </div>
          ) : (
            shows.map((show, index) => (
              <div
                key={`${show.venue}-${show.date}-${index}`}
                className={`group border-t border-border last:border-b py-8 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-12 mb-6 md:mb-0">
                    <span className="text-2xl md:text-3xl font-light w-24">
                      {show.date}
                    </span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-light mb-1">
                        {show.venue}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {show.city}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <span className={`text-xs tracking-[0.1em] uppercase ${
                      show.status === 'Sold Out' || show.status === 'Cancelled'
                        ? 'text-muted-foreground' 
                        : show.status === 'Few Remaining' || show.status === 'Off Sale'
                          ? 'text-gold'
                          : 'text-foreground/70'
                    }`}>
                      {show.status}
                    </span>
                    {show.status !== 'Sold Out' && show.status !== 'Cancelled' && (
                      <a
                        href={show.ticketUrl || '#'}
                        target={show.ticketUrl ? '_blank' : undefined}
                        rel={show.ticketUrl ? 'noopener noreferrer' : undefined}
                        className="px-6 py-3 border border-foreground/30 text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-foreground hover:text-background"
                      >
                        Tickets
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Shows;
