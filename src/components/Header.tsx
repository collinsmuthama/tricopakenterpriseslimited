import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-navy/95 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            TRICOPAK
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-gold transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-gold transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-white hover:text-gold transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-gold transition-colors"
            >
              Contact
            </button>
          </div>

          <Button variant="hero" size="sm">
            Get Quote
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;