import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to start your export order? Contact us today for competitive pricing 
            and reliable delivery to European markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 text-gold">Head Office</h4>
                <p className="text-white/80">
                  Nairobi, Kenya<br />
                  East Africa's Export Hub
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-gold">Export Markets</h4>
                <p className="text-white/80">
                  Serving distributors and manufacturers<br />
                  across European Union countries
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-gold">Business Hours</h4>
                <p className="text-white/80">
                  Monday - Friday: 8:00 AM - 6:00 PM EAT<br />
                  Saturday: 9:00 AM - 2:00 PM EAT
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-gold">Minimum Order</h4>
                <p className="text-white/80">
                  Container loads for efficient shipping<br />
                  Contact us for flexible arrangements
                </p>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-white/10 border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-white">Request a Quote</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              
              <Input 
                placeholder="Company Name" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="Country" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Input 
                  placeholder="Phone Number" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              
              <Textarea 
                placeholder="Tell us about your requirements (product type, quantity, delivery timeline...)" 
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              
              <Button variant="hero" size="lg" className="w-full">
                Send Quote Request
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;