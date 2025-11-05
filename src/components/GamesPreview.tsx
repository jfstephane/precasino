import rouletteImage from "@/assets/roulette.jpg";
import pokerImage from "@/assets/poker.jpg";
import { Dices, Heart, Sparkles, Zap } from "lucide-react";

const games = [
  {
    title: "Blackjack",
    description: "Master the art of 21 at our premium tables with professional dealers",
    icon: Heart,
    image: rouletteImage,
  },
  {
    title: "Roulette",
    description: "Experience the classic thrill with European and American variants",
    icon: Dices,
    image: rouletteImage,
  },
  {
    title: "Poker Lounge",
    description: "Join high-stakes tournaments in our exclusive poker room",
    icon: Sparkles,
    image: pokerImage,
  },
  {
    title: "Slots",
    description: "Modern gaming machines with progressive jackpots and themed games",
    icon: Zap,
    image: pokerImage,
  },
];

const GamesPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Gaming <span className="text-gold">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our diverse selection of premium gaming experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => {
            const Icon = game.icon;
            return (
              <div
                key={game.title}
                className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-gold transition-smooth cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="mb-3 inline-flex">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">
                    {game.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {game.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GamesPreview;
