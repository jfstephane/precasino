import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Music, Trophy, Clock, MapPin, Ticket } from "lucide-react";
import heroCasinoImage from "@/assets/hero-casino.jpg";

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
            Events & <span className="text-gold">Promotions</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            Experience world-class entertainment and exclusive offers at Haiti's premier casino
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Upcoming <span className="text-gold">Events</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't miss out on our exciting lineup of entertainment and special events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-card rounded-lg border border-border p-8 hover:border-gold transition-smooth group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-gold" />
                    <span className="text-sm font-semibold text-gold">{event.date}</span>
                  </div>
                  <span className="text-sm px-3 py-1 bg-gold/10 text-gold rounded-full">
                    {event.price}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-gold transition-fast">
                  {event.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-gold" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-gold text-gold hover:bg-gold/10"
                >
                  Reserve Your Spot
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Promotions */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 gradient-gold opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Special <span className="text-gold">Promotions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take advantage of our exclusive offers and maximize your gaming experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialPromotions.map((promo, index) => {
              const Icon = promo.icon;
              return (
                <div
                  key={index}
                  className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-gold transition-smooth"
                >
                  <div className="inline-flex p-3 rounded-lg bg-gold/10 mb-4">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">{promo.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {promo.description}
                  </p>
                  <p className="text-xs text-gold font-semibold">
                    Valid: {promo.validUntil}
                  </p>
                </div>
              );
            })}
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
                Never Miss an Event
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to our newsletter and get exclusive invitations to VIP events, early bird promotions, and special announcements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-gold focus:outline-none"
                />
                <Button className="bg-gold hover:bg-gold-dark text-background font-semibold shadow-gold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Event <span className="text-gold">Highlights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our memorable past events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative rounded-lg overflow-hidden shadow-elegant mb-4">
                  <img
                    src={heroCasinoImage}
                    alt="Past Event"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm text-gold font-semibold mb-1">December 2024</p>
                    <h3 className="text-xl font-serif font-bold">New Year's Eve Gala</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
