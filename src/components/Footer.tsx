const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">TRICOPAK</h3>
            <p className="text-white/70 leading-relaxed">
              Kenya's premier exporter of quality serviettes and gum arabic to European markets.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gold">Products</h4>
            <ul className="space-y-2 text-white/70">
              <li>Premium Serviettes</li>
              <li>Gum Arabic</li>
              <li>Custom Packaging</li>
              <li>Bulk Orders</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gold">Markets</h4>
            <ul className="space-y-2 text-white/70">
              <li>Germany</li>
              <li>France</li>
              <li>Netherlands</li>
              <li>Italy</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gold">Quality</h4>
            <ul className="space-y-2 text-white/70">
              <li>ISO Certified</li>
              <li>EU Standards</li>
              <li>Quality Assurance</li>
              <li>Sustainable Sourcing</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/70">
          <p>&copy; 2024 Tricopak. All rights reserved. | Exports from Kenya to Europe</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;