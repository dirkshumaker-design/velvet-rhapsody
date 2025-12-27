import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Music', href: '#music' },
    { label: 'Shows', href: '#shows' },
    { label: 'Cameo', href: '#cameo' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md border-b border-border/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <a 
              href="#" 
              className="group text-xl md:text-2xl font-light tracking-[0.2em] text-foreground transition-all duration-500"
            >
              <span className="group-hover:text-gold transition-colors duration-500">DIRK</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-500 ml-2">SHUMAKER</span>
            </a>
            
            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link text-sm tracking-[0.15em] uppercase"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button 
              className="md:hidden text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 w-full h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 top-2 w-full h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 w-full h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-background transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl font-light tracking-[0.2em] uppercase text-foreground hover:text-gold transition-all duration-300 ${isMobileMenuOpen ? 'animate-reveal' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;