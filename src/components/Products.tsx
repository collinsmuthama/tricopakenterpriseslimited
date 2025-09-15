import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import serviettesImage from "@/assets/serviettes.jpg";
import gumArabicImage from "@/assets/gum-arabic.jpg";

const Products = () => {
  const products = [
    {
      title: "Premium Serviettes",
      description: "High-quality napkins and paper towels manufactured to European standards. Available in various sizes and packaging options to meet your market needs.",
      image: serviettesImage,
      features: [
        "Multiple ply options",
        "Custom packaging available",
        "Bulk export quantities",
        "European quality standards"
      ]
    },
    {
      title: "Gum Arabic (Acacia Gum)",
      description: "Pure, high-grade gum arabic sourced from sustainable acacia trees. Ideal for food industry, pharmaceuticals, and industrial applications.",
      image: gumArabicImage,
      features: [
        "99% purity grade",
        "Food industry certified",
        "Pharmaceutical grade available",
        "Sustainable sourcing"
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in two main product categories, both meeting the highest 
            international standards for European markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-elegant transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-4">{product.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-navy mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-navy rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="corporate" className="w-full">
                  Request Quote
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;