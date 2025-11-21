import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const { t } = useI18n();
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            {t("home.contact.title.left")} <span className="text-gold">{t("home.contact.title.right")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("home.contact.tagline")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-8">{t("home.contact.info.title")}</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gold/10 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t("home.contact.info.location")}</h4>
                  <p className="text-muted-foreground">
                    Pétion-Ville, Port-au-Prince<br />
                    Haiti
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gold/10 flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t("home.contact.info.phone")}</h4>
                  <p className="text-muted-foreground">+509 28131053</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gold/10 flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t("home.contact.info.email")}</h4>
                  <p className="text-muted-foreground">info@casinoelrancho.ht</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gold/10 flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t("home.contact.info.hours")}</h4>
                  <p className="text-muted-foreground">2 PM - 3 AM Daily</p>
                </div>
              </div>
            </div>

            
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-8">{t("home.contact.form.title")}</h3>
            
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const name = String(data.get("name") || "").trim();
                const email = String(data.get("email") || "").trim();
                const subject = String(data.get("subject") || "General Inquiry").trim();
                const message = String(data.get("message") || "").trim();
                const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
                const mailto = `mailto:info@casinoelrancho.ht?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.location.href = mailto;
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  name="name"
                  placeholder={t("home.contact.form.name")} 
                  className="bg-background border-border focus:border-gold"
                />
                <Input 
                  type="email" 
                  name="email"
                  placeholder={t("home.contact.form.email")} 
                  className="bg-background border-border focus:border-gold"
                />
              </div>
              
              <Input 
                name="subject"
                placeholder={t("home.contact.form.subject")} 
                className="bg-background border-border focus:border-gold"
              />
              
              <Textarea 
                name="message"
                placeholder={t("home.contact.form.message")} 
                rows={6}
                className="bg-background border-border focus:border-gold resize-none"
              />
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gold hover:bg-gold-dark text-background font-semibold shadow-gold"
              >
                {t("home.contact.form.submit")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { useI18n } from "@/i18n";
