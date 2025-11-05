import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Navigation as NavigationIcon, ParkingCircle, Info } from "lucide-react";

const Contact = () => {
  const faqs = [
    {
      question: "What are your operating hours?",
      answer: "We're open Monday-Thursday 6 PM - 2 AM, and Friday-Sunday 6 PM - 4 AM. Gaming tables and slots have varying hours."
    },
    {
      question: "Is there a dress code?",
      answer: "Smart casual attire is required after 8 PM. No beachwear, athletic wear, or overly casual clothing. Tank tops and flip-flops are not permitted."
    },
    {
      question: "Do I need to be a member to visit?",
      answer: "No, we welcome all guests. However, membership provides exclusive benefits and rewards. You can sign up for free at our VIP desk."
    },
    {
      question: "What is the minimum age requirement?",
      answer: "You must be 18 years or older to enter the casino and participate in gaming activities. Valid ID is required."
    },
    {
      question: "Do you offer valet parking?",
      answer: "Yes, complimentary valet parking is available for all guests. Platinum and Diamond members receive priority valet service."
    },
    {
      question: "Can I host a private event?",
      answer: "Absolutely! We have private spaces available for corporate events, birthdays, and special celebrations. Contact our events team for details."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            Visit <span className="text-gold">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Located in the heart of Pétion-Ville, Haiti's premier entertainment destination
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-lg bg-gold/10 mb-4">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">
                Pétion-Ville<br />
                Port-au-Prince<br />
                Haiti
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 rounded-lg bg-gold/10 mb-4">
                <Phone className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">
                +509 1234 5678<br />
                VIP Line: +509 8765 4321
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 rounded-lg bg-gold/10 mb-4">
                <Mail className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">
                info@casinoelrancho.ht<br />
                vip@casinoelrancho.ht
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 rounded-lg bg-gold/10 mb-4">
                <Clock className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-muted-foreground">
                Mon-Thu: 6 PM - 2 AM<br />
                Fri-Sun: 6 PM - 4 AM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Send Us a <span className="text-gold">Message</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Have a question or want to make a reservation? Fill out the form below and our team will get back to you within 24 hours.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your Name" 
                    className="bg-background border-border focus:border-gold"
                  />
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-background border-border focus:border-gold"
                  />
                </div>
                
                <Input 
                  type="tel"
                  placeholder="Phone Number (Optional)" 
                  className="bg-background border-border focus:border-gold"
                />
                
                <Input 
                  placeholder="Subject" 
                  className="bg-background border-border focus:border-gold"
                />
                
                <Textarea 
                  placeholder="Your Message" 
                  rows={6}
                  className="bg-background border-border focus:border-gold resize-none"
                />
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gold hover:bg-gold-dark text-background font-semibold shadow-gold"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Directions */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Find <span className="text-gold">Us</span>
              </h2>
              
              {/* Map Placeholder */}
              <div className="w-full h-80 bg-secondary rounded-lg border border-border flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gold mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">Pétion-Ville, Port-au-Prince</p>
                </div>
              </div>

              {/* Directions & Parking */}
              <div className="space-y-6">
                <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border">
                  <div className="flex items-start space-x-4">
                    <NavigationIcon className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Directions</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Located in the heart of Pétion-Ville, easily accessible from Route de Delmas. 
                        Look for our illuminated gold Casino El Rancho sign. GPS coordinates available upon request.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border">
                  <div className="flex items-start space-x-4">
                    <ParkingCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Parking</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Complimentary valet parking for all guests. Secure parking garage with 24/7 security. 
                        VIP members receive priority valet service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about visiting Casino El Rancho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-lg border border-border p-6 hover:border-gold transition-smooth"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <Info className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 gradient-gold opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Plan Your <span className="text-gold">Visit</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the luxury and excitement of Haiti's premier casino destination
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-background font-semibold shadow-gold">
              Make a Reservation
            </Button>
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10">
              View VIP Benefits
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
