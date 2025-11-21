import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Music, Trophy, Clock, MapPin, Ticket } from "lucide-react";
import heroCasinoImage from "@/assets/hero-casino.jpg";
import { useI18n } from "@/i18n";

const Events = () => {
  const upcomingEvents = [
    {
      date: "Every Friday & Saturday",
      title: "Live DJ Nights",
      description: "Dance the night away with international DJs spinning the hottest tracks. Premium bottle service available.",
      time: "10 PM - 4 AM",
      location: "Main Floor & VIP Lounge",
      price: "Free Entry"
    },
    {
      date: "First Saturday Monthly",
      title: "High Stakes Poker Tournament",
      description: "$500 buy-in tournament with $25,000 guaranteed prize pool. Pre-registration required.",
      time: "8 PM - Late",
      location: "Poker Lounge",
      price: "$500 Buy-in"
    },
    {
      date: "Every Wednesday",
      title: "Ladies Night",
      description: "Complimentary cocktails for ladies until midnight. Live music and special gaming promotions.",
      time: "8 PM - 2 AM",
      location: "Premium Bar & Lounge",
      price: "Free Entry"
    },
    {
      date: "Last Friday Monthly",
      title: "VIP Exclusive Gala",
      description: "Members-only evening featuring celebrity guests, gourmet dining, and exclusive gaming tables.",
      time: "9 PM - 3 AM",
      location: "VIP Lounge",
      price: "Members Only"
    }
  ];

  const specialPromotions = [
    {
      icon: Trophy,
      title: "Weekend Jackpot Rush",
      description: "Double loyalty points on all slot play every Saturday and Sunday",
      validUntil: "Ongoing"
    },
    {
      icon: Ticket,
      title: "New Member Welcome",
      description: "Join our loyalty program and receive $50 free play plus exclusive VIP trial",
      validUntil: "Limited Time"
    },
    {
      icon: Music,
      title: "Happy Hour Special",
      description: "2-for-1 cocktails and 50% off appetizers Monday-Thursday 6-8 PM",
      validUntil: "Weekly"
    }
  ];

  // Images added by you in public/ to showcase promotions visually
  const promoImages = [
    "/nw1-1024x513.webp",
    "/nw2.webp",
    "/nw3.webp",
    "/nw4.webp",
    "/nw5-1024x513.webp",
  ];

  const { t } = useI18n();
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroCasinoImage} 
            alt="Casino Events" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            {t("events.hero.title").split(" & ")[0]} & <span className="text-gold">{t("events.hero.title").split(" & ")[1]}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            {t("events.hero.tagline")}
          </p>
        </div>
      </section>

      {/* No Events Notice */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-lg border border-border p-8 text-center">
            <Clock className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-bold mb-2">{t("events.none.title")}</h2>
            <p className="text-muted-foreground">
              {t("events.none.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events section removed per request; promotions remain */}

      {/* Special Promotions */}
      <section className="py-20 bg-card relative overflow-hidden">
        
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {t("events.promos.title.left")} <span className="text-gold">{t("events.promos.title.right")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("events.promos.tagline")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promoImages.map((src, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative rounded-lg overflow-hidden shadow-elegant border border-border hover:border-gold transition-smooth">
                  <img
                    src={src}
                    alt="Promotion"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar CTA */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-gold/30 p-12 text-center">
              <Calendar className="w-16 h-16 text-gold mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                {t("events.news.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t("events.news.desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t("events.news.placeholder")}
                  className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-gold focus:outline-none"
                />
                <Button className="bg-gold hover:bg-gold-dark text-background font-semibold shadow-gold">
                  {t("events.news.cta")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Highlights removed per request */}

      <Footer />
    </div>
  );
};

export default Events;
