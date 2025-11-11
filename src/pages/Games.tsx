import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Dices, Sparkles, Zap, Clock, DollarSign, Users } from "lucide-react";
import rouletteImage from "@/assets/roulette.jpg";
import pokerImage from "@/assets/poker.jpg";
import heroCasinoImage from "@/assets/hero-casino.jpg";

const Games = () => {
  const gameDetails = [
    {
      title: "Blackjack",
      icon: Heart,
      image: rouletteImage,
      description: "Experience the thrill of 21 at our premium blackjack tables. Our professional dealers ensure fair play and an exciting atmosphere.",
      features: [
        "Multiple table limits from $10 to $1,000",
        "Professional dealers available 7 days a week",
        "Classic and modern variants including Spanish 21",
        "Private VIP tables for high rollers"
      ],
      hours: "6 PM - 4 AM Daily",
      minBet: "$10"
    },
    {
      title: "Roulette",
      icon: Dices,
      image: heroCasinoImage,
      description: "Spin the wheel of fortune with both European and American roulette variants. Feel the anticipation as the ball finds its destiny.",
      features: [
        "European and American wheels available",
        "Electronic betting displays at every seat",
        "Progressive side bets with major jackpots",
        "Comfortable seating with premium service"
      ],
      hours: "6 PM - 3 AM Daily",
      minBet: "1$"
    },
    {
      title: "Poker Lounge",
      icon: Sparkles,
      image: pokerImage,
      description: "Join the action in our exclusive poker room featuring Texas Hold'em, Omaha, and regular tournaments with substantial prize pools.",
      features: [
        "10 premium poker tables with plush seating",
        "Daily tournaments with buy-ins from $50-$500",
        "Cash games running around the clock",
        "Private tournament hosting available"
      ],
      hours: "Open 24/7",
      minBet: "$25 cash games"
    },
    {
      title: "Slots & Electronic Gaming",
      icon: Zap,
      image: heroCasinoImage,
      description: "Try your luck with our state-of-the-art slot machines featuring progressive jackpots, themed games, and the latest titles.",
      features: [
        "Over 100 modern slot machines",
        "Progressive jackpots starting at $50,000",
        "Video poker and electronic table games",
        "Loyalty rewards on every play"
      ],
      hours: "Open 24/7",
      minBet: "$0.25"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={rouletteImage} 
            alt="Casino Gaming Floor" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            Premium <span className="text-gold">Gaming</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            Choose from our diverse selection of classic and modern casino games
          </p>
        </div>
      </section>

      {/* Game Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {gameDetails.map((game, index) => {
              const Icon = game.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={game.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={isEven ? 'order-1' : 'order-2'}>
                    <div className="relative rounded-lg overflow-hidden shadow-elegant group">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-[400px] object-cover group-hover:scale-105 transition-smooth"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                  </div>

                  <div className={isEven ? 'order-2' : 'order-1'}>
                    <div className="inline-flex p-4 rounded-lg bg-gold/10 mb-6">
                      <Icon className="w-10 h-10 text-gold" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                      {game.title}
                    </h2>
                    
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {game.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {game.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground">{feature}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gold" />
                        <div>
                          <p className="text-sm text-muted-foreground">Hours</p>
                          <p className="font-semibold">{game.hours}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <DollarSign className="w-5 h-5 text-gold" />
                        <div>
                          <p className="text-sm text-muted-foreground">Minimum Bet</p>
                          <p className="font-semibold">{game.minBet}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gaming Etiquette */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Gaming <span className="text-gold">Etiquette</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Help us maintain a premium experience for all guests
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border">
                <Users className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-xl font-semibold mb-3">Respect Others</h3>
                <p className="text-muted-foreground">
                  Be courteous to dealers and fellow players. Keep conversations friendly and avoid disruptive behavior.
                </p>
              </div>

              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border">
                <Clock className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-xl font-semibold mb-3">Play at Pace</h3>
                <p className="text-muted-foreground">
                  Make decisions promptly to keep the game flowing. Ask dealers if you need clarification on rules.
                </p>
              </div>

              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border">
                <Heart className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-xl font-semibold mb-3">Dress Code</h3>
                <p className="text-muted-foreground">
                  Smart casual attire required. No beachwear, athletic wear, or overly casual clothing after 8 PM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 gradient-gold opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to <span className="text-gold">Play?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable gaming experience at Haiti's premier casino destination
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-background font-semibold shadow-gold">
              Plan Your Visit
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

export default Games;
