import { Button } from "./ui/button";
import heroImage from "@/assets/hero-casino.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 animate-fade-in">
          Where Luxury <span className="text-gold">Meets</span> Excitement
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
          Experience the premier gaming and entertainment destination in Pétion-Ville
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold-dark text-background font-semibold text-lg px-8 shadow-gold hover:shadow-elegant transition-smooth"
          >
            View Games
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-background font-semibold text-lg px-8 transition-smooth"
          >
            Plan Your Night
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
