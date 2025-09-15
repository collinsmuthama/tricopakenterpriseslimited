const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            About Tricopak
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Established in Kenya, Tricopak has become a trusted name in the export industry, 
            specializing in premium quality serviettes and gum arabic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6">Our Heritage</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Based in the heart of Kenya, we leverage our country's rich natural resources 
                and strategic location to serve the European market with exceptional products.
              </p>
              <p>
                Our commitment to quality and reliability has established long-term partnerships 
                with distributors and manufacturers across Europe, making us their preferred 
                supplier for serviettes and gum arabic.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-navy text-white p-6 rounded-lg">
              <h4 className="text-3xl font-bold mb-2">5+</h4>
              <p className="text-sm">Years of Excellence</p>
            </div>
            <div className="bg-navy-light text-white p-6 rounded-lg">
              <h4 className="text-3xl font-bold mb-2">15+</h4>
              <p className="text-sm">European Partners</p>
            </div>
            <div className="bg-accent text-white p-6 rounded-lg">
              <h4 className="text-3xl font-bold mb-2">100%</h4>
              <p className="text-sm">Quality Assured</p>
            </div>
            <div className="bg-navy-dark text-white p-6 rounded-lg">
              <h4 className="text-3xl font-bold mb-2">24/7</h4>
              <p className="text-sm">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;