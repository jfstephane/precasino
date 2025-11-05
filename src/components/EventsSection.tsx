import { Button } from "./ui/button";
import { Calendar, Music, Trophy } from "lucide-react";

const events = [
  {
    icon: Music,
    title: "Live DJ Nights",
    description: "Every Friday & Saturday featuring international DJs and live performances",
    time: "10 PM - 4 AM",
  },
  {
    icon: Trophy,
    title: "Poker Tournaments",
    description: "Monthly high-stakes tournaments with premium prize pools",
    time: "Weekends",
  },
  {
    icon: Calendar,
    title: "Special Events",
    description: "Exclusive themed nights, celebrity appearances, and VIP gatherings",
    time: "Check Schedule",
  },
];

const EventsSection = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute inset-0 gradient-gold opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Nightlife & <span className="text-gold">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience unforgettable nights with world-class entertainment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={event.title}
                className="bg-background/50 backdrop-blur-sm rounded-lg p-8 border border-border hover:border-gold transition-smooth group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-fast">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">
                  {event.title}
                </h3>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <p className="text-gold font-semibold">{event.time}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold-dark text-background font-semibold shadow-gold"
          >
            View Full Calendar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
