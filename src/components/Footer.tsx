const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm tracking-[0.1em] mb-4 md:mb-0">
            © 2024 Marcus Cole. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-8">
            <a 
              href="#"
              className="text-muted-foreground text-sm tracking-[0.1em] hover:text-foreground transition-colors duration-300"
            >
              Privacy
            </a>
            <a 
              href="#"
              className="text-muted-foreground text-sm tracking-[0.1em] hover:text-foreground transition-colors duration-300"
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
