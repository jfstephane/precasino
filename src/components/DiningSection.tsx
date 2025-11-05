import cocktailsImage from "@/assets/cocktails.jpg";
import { Wine, Coffee, Utensils } from "lucide-react";

const DiningSection = () => {
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden shadow-elegant group">
            <img
              src={cocktailsImage}
              alt="Premium Cocktails"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-smooth"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Dining & <span className="text-gold">Lounge</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Indulge in our premium bar and lounge experience. From artisan cocktails 
              crafted by expert mixologists to a curated selection of fine wines and spirits, 
              every detail is designed to elevate your evening.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gold/10">
                  <Wine className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Premium Bar</h3>
                  <p className="text-muted-foreground">
                    Signature cocktails, rare spirits, and vintage wines
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gold/10">
                  <Coffee className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lounge Atmosphere</h3>
                  <p className="text-muted-foreground">
                    Luxurious seating with ambient lighting and live music
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gold/10">
                  <Utensils className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Gourmet Bites</h3>
                  <p className="text-muted-foreground">
                    Premium snacks and culinary delights to complement your drinks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
