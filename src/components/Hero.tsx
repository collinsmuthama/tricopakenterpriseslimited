import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-navy/80" />
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Premium Export Solutions
          <span className="block text-gold">From Kenya to Europe</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Leading supplier of high-quality serviettes and gum arabic (acacia gum) 
          with reliable export services across European markets
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="corporate" size="lg" onClick={scrollToContact}>
            Start Your Order
          </Button>
          <Button variant="hero" size="lg">
            View Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;