import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Crown, Star, Gift, Users, Zap, Shield, Diamond, TrendingUp } from "lucide-react";
import vipImage from "@/assets/vip-lounge.jpg";

const Vip = () => {
  const membershipTiers = [
    {
      tier: "Gold",
      icon: Star,
      price: "Free to Join",
      color: "from-yellow-600 to-yellow-400",
      benefits: [
        "Earn 1 point per $10 wagered",
        "10% discount on dining",
        "Birthday bonus of $50 free play",
        "Access to member-only promotions",
        "Priority customer service"
      ]
    },
    {
      tier: "Platinum",
      icon: Diamond,
      price: "$1,000+ Monthly Play",
      color: "from-slate-400 to-slate-200",
      benefits: [
        "Earn 1.5 points per $10 wagered",
        "20% discount on dining & lounge",
        "Complimentary valet parking",
        "Invitation to exclusive events",
        "Dedicated VIP host",
        "Enhanced birthday bonus of $150"
      ]
    },
    {
      tier: "Diamond Elite",
      icon: Crown,
      price: "By Invitation Only",
      color: "from-purple-600 to-pink-500",
      benefits: [
        "Earn 2 points per $10 wagered",
        "30% discount on all services",
        "Priority table reservations",
        "Annual luxury gift package",
        "Access to private VIP lounge",
        "Concierge services",
        "Complimentary suite upgrades",
        "Birthday bonus of $500"
      ]
    }
  ];

  const vipExperiences = [
    {
      icon: Crown,
      title: "Private Gaming Salons",
      description: "Access to exclusive high-limit gaming areas with personalized service and premium amenities"
    },
    {
      icon: Gift,
      title: "Luxury Rewards",
      description: "Redeem points for resort credits, fine dining, spa services, or luxury merchandise"
    },
    {
      icon: Users,
      title: "VIP Events",
      description: "Invitations to members-only galas, tournaments, and celebrity meet-and-greets"
    },
    {
      icon: Shield,
      title: "Priority Service",
      description: "Dedicated hosts available 24/7 to cater to your every need and request"
    },
    {
      icon: Zap,
      title: "Fast Track Benefits",
      description: "Skip lines, instant reservations, and expedited withdrawals for your convenience"
    },
    {
      icon: TrendingUp,
      title: "Enhanced Comps",
      description: "Higher comp rates, increased credit lines, and special loss rebates"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={vipImage} 
            alt="VIP Lounge" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex p-4 rounded-full bg-gold/10 mb-6">
            <Crown className="w-12 h-12 text-gold" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            VIP & <span className="text-gold">Membership</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            Elevate your casino experience with exclusive privileges and premium rewards
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Experience <span className="text-gold">Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join the elite circle of Casino El Rancho's VIP members and discover a world of 
              unparalleled luxury, exclusive privileges, and personalized service. Our tiered 
              membership program is designed to reward your loyalty with exceptional benefits 
              that enhance every visit.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Membership <span className="text-gold">Tiers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the level that matches your play style and unlock exclusive benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <div
                  key={index}
                  className="bg-background rounded-lg border-2 border-border hover:border-gold transition-smooth overflow-hidden group"
                >
                  <div className={`bg-gradient-to-br ${tier.color} p-8 text-center text-background`}>
                    <Icon className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-3xl font-serif font-bold mb-2">{tier.tier}</h3>
                    <p className="text-sm font-semibold opacity-90">{tier.price}</p>
                  </div>

                  <div className="p-8">
                    <ul className="space-y-4">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className="w-full mt-8 bg-gold hover:bg-gold-dark text-background font-semibold shadow-gold"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIP Experiences */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              VIP <span className="text-gold">Experiences</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exclusive privileges designed for discerning players
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vipExperiences.map((experience, index) => {
              const Icon = experience.icon;
              return (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border hover:border-gold transition-smooth"
                >
                  <div className="inline-flex p-4 rounded-lg bg-gold/10 mb-4">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">{experience.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                How to <span className="text-gold">Join</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Becoming a VIP member is easy and instant
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit the VIP Desk</h3>
                <p className="text-muted-foreground">
                  Stop by our VIP services desk on the main floor during your visit
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Register</h3>
                <p className="text-muted-foreground">
                  Provide valid ID and complete a simple registration form
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Start Earning</h3>
                <p className="text-muted-foreground">
                  Receive your membership card instantly and begin earning rewards
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-background font-semibold shadow-gold">
                Apply for VIP Membership
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 gradient-gold opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Member <span className="text-gold">Testimonials</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear what our VIP members have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Michel Laurent",
                tier: "Diamond Elite Member",
                quote: "The VIP treatment at Casino El Rancho is unmatched. From the private gaming salons to the exceptional concierge service, every visit feels special."
              },
              {
                name: "Sophie Beaumont",
                tier: "Platinum Member",
                quote: "Being a platinum member has completely transformed my casino experience. The benefits are incredible and the staff always goes above and beyond."
              },
              {
                name: "Jean-Pierre Dubois",
                tier: "Gold Member",
                quote: "Even at the gold level, the perks are fantastic. The birthday bonus and member events make me feel truly valued as a guest."
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-background/50 backdrop-blur-sm rounded-lg p-8 border border-border"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gold">{testimonial.tier}</p>
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

export default Vip;
