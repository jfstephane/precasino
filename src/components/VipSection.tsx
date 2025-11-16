import { Button } from "./ui/button";
import vipImage from "@/assets/vip-lounge.jpg";
import { Crown, Star, Gift, Users } from "lucide-react";

const benefits = [
  {
    icon: Crown,
    title: "Priority Access",
    description: "Skip lines and enjoy exclusive entry to all events",
  },
  {
    icon: Star,
    title: "Private Tables",
    description: "Reserved gaming tables and VIP lounge areas",
  },
  {
    icon: Gift,
    title: "Special Rewards",
    description: "Exclusive bonuses, cashback, and birthday surprises",
  },
  {
    icon: Users,
    title: "Personal Service",
    description: "Dedicated hosts and personalized experiences",
  },
];

const VipSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center hidden">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              VIP & <span className="text-gold">Membership</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Elevate your experience with exclusive membership benefits. Join our VIP program 
              and unlock a world of privileges, rewards, and unforgettable moments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="flex items-start space-x-3"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-2 rounded-lg bg-gold/10 flex-shrink-0">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold-dark text-background font-semibold shadow-gold"
            >
              Join VIP Club
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative rounded-lg overflow-hidden shadow-elegant group">
            <img
              src={vipImage}
              alt="VIP Lounge"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-smooth"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent mix-blend-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VipSection;
