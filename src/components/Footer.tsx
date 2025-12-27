const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-12">
          <a href="#" className="text-2xl font-light tracking-[0.2em] text-foreground mb-4 hover:text-gold transition-colors duration-500">
            DIRK SHUMAKER
          </a>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm tracking-[0.1em] mb-4 md:mb-0">
            © 2024 Dirk Shumaker. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-8">
            <a 
              href="#"
              className="text-muted-foreground text-sm tracking-[0.1em] hover:text-gold transition-colors duration-300"
            >
              Privacy
            </a>
            <a 
              href="#"
              className="text-muted-foreground text-sm tracking-[0.1em] hover:text-gold transition-colors duration-300"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;