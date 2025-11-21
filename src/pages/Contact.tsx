import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Navigation as NavigationIcon, ParkingCircle, Info } from "lucide-react";
import { useI18n } from "@/i18n";

const Contact = () => {
  const faqs = [
    {
      question: "What are your operating hours?",
      answer: "We're open daily from 2 PM to 3 AM. Gaming tables and slots may have varying hours."
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
    
  ];

  const { t } = useI18n();
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            {t("contact.hero.title").split(" ")[0]} <span className="text-gold">{t("contact.hero.title").split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in whitespace-nowrap">
            {t("contact.hero.tagline")}
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
              <h3 className="text-xl font-semibold mb-2">{t("contact.info.location")}</h3>
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
              <h3 className="text-xl font-semibold mb-2">{t("contact.info.phone")}</h3>
              <p className="text-muted-foreground">+509 28131053</p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 rounded-lg bg-gold/10 mb-4">
                <Mail className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("contact.info.email")}</h3>
              <p className="text-muted-foreground">info@casinoelrancho.ht</p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 rounded-lg bg-gold/10 mb-4">
                <Clock className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("contact.info.hours")}</h3>
              <p className="text-muted-foreground">{t("contact.info.hoursValue")}</p>
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
                {t("contact.page.form.title").split(" ")[0]} {t("contact.page.form.title").includes(" ") ? <span className="text-gold">{t("contact.page.form.title").split(" ").slice(1).join(" ")}</span> : null}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t("contact.page.form.desc")}
              </p>
              
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const data = new FormData(form);
                  const name = String(data.get("name") || "").trim();
                  const email = String(data.get("email") || "").trim();
                  const phone = String(data.get("phone") || "").trim();
                  const subject = String(data.get("subject") || "General Inquiry").trim();
                  const message = String(data.get("message") || "").trim();
                  const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;
                  const mailto = `mailto:info@casinoelrancho.ht?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  window.location.href = mailto;
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    name="name"
                    placeholder={t("contact.page.form.name")} 
                    className="bg-background border-border focus:border-gold"
                  />
                  <Input 
                    type="email" 
                    name="email"
                    placeholder={t("contact.page.form.email")} 
                    className="bg-background border-border focus:border-gold"
                  />
                </div>
                
                <Input 
                  type="tel"
                  name="phone"
                  placeholder={t("contact.page.form.phone")} 
                  className="bg-background border-border focus:border-gold"
                />
                
                <Input 
                  name="subject"
                  placeholder={t("contact.page.form.subject")} 
                  className="bg-background border-border focus:border-gold"
                />
                
                <Textarea 
                  name="message"
                  placeholder={t("contact.page.form.message")} 
                  rows={6}
                  className="bg-background border-border focus:border-gold resize-none"
                />
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gold hover:bg-gold-dark text-background font-semibold shadow-gold"
                >
                  {t("contact.page.form.submit")}
                </Button>
              </form>
            </div>

            {/* Map & Directions */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                {t("contact.page.find.title").split(" ")[0]} <span className="text-gold">{t("contact.page.find.title").split(" ").slice(1).join(" ")}</span>
              </h2>
              
              {/* Map Placeholder (linked to Google Maps) */}
              <div className="rounded-lg overflow-hidden border border-border mb-6">
                <iframe
                  src="https://www.google.com/maps?q=CASINO+ELRANCHO&output=embed"
                  title="Casino El Rancho Map"
                  className="w-full h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="text-center">
                <a
                  href="https://google.com/maps/place/CASINO+ELRANCHO/data=!4m2!3m1!1s0x0:0x8a9c6a6cbc784347?sa=X&ved=1t:2428&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  {t("contact.page.map.cta")}
                </a>
              </div>

              {/* Directions & Parking */}
              <div className="space-y-6">
                
                <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border">
                  <div className="flex items-start space-x-4">
                    <ParkingCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{t("contact.page.parking.title")}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t("contact.page.parking.desc")}
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
              {t("contact.page.faq.title.left")} <span className="text-gold">{t("contact.page.faq.title.right")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contact.page.faq.desc")}
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
      <section className="py-20 bg-gradient-dark relative overflow-hidden hidden">
        
        
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
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 hidden">
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
