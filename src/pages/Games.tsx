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
      title: "Ultimate Texas Hold’em",
      icon: Sparkles,
      image: pokerImage,
      description:
        "Our tables are NO LIMIT poker with a minimum buy-in of 1000 HT (≈$120 US). Blinds at 25/50 HTD (≈3/6 US).",
      features: [
        "No limit Texas Hold’em tables",
        "Minimum buy-in 1000 HT",
        "Blinds 25/50 HTD (≈3/6 US)",
        "Friendly dealers and tracked results"
      ],
      hours: "Open 24/7",
      minBet: "Buy-in 1000 HT"
    },
    {
      title: "Slot Machines",
      icon: Zap,
      image: "/slots.jpeg",
      description:
        "Modern slot machines with progressive jackpots and classic 3‑reel IGT titles.",
      features: [
        "3 Reel IGT games",
        "Pot‑of‑Gold, Lucky Numbers, Bonus Poker",
        "Progressive jackpots",
        "Video poker & electronic tables"
      ],
      hours: "Open 24/7",
      minBet: "$1"
    },
    {
      title: "Black Jack Triple Action",
      icon: Heart,
      image: rouletteImage,
      description:
        "Blackjack with extra side bets — 3 games in 1 for more action and excitement.",
      features: [
        "Triple Action side bets",
        "Multiple table limits",
        "Professional dealers",
        "VIP tables available"
      ],
      hours: "6 PM – 4 AM Daily",
      minBet: "$10"
    },
    {
      title: "Roulette",
      icon: Dices,
      image: heroCasinoImage,
      description:
        "Traditional American Roulette with result display system; USD and Haitian currency tables available.",
      features: [
        "American roulette",
        "Result display tracking",
        "USD & Haitian currency tables",
        "Comfortable seating"
      ],
      hours: "6 PM – 3 AM Daily",
      minBet: "1$"
    },
    {
      title: "3 Cards Poker",
      icon: Heart,
      image: pokerImage,
      description:
        "Make a 3‑card poker hand and compete against the dealer — fast, fun, and simple to learn.",
      features: [
        "Easy rules, quick rounds",
        "Compete against the dealer",
        "Great for beginners",
        "Friendly staff assistance"
      ],
      hours: "6 PM – 3 AM Daily",
      minBet: "$10"
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
      <section className="py-20 bg-gradient-dark relative overflow-hidden hidden">
        
        
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

export default Games;
