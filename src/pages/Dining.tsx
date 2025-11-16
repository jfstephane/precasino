import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wine, Coffee, Utensils, ChefHat, Clock, Star, Music } from "lucide-react";
import cocktailsImage from "@/assets/cocktails.jpg";
import vipImage from "@/assets/vip-lounge.jpg";

const Dining = () => {
  const menuHighlights = [
    {
      category: "Cocktails",
      icon: Wine,
      items: [
        { name: "Rhum Punch", description: "House blend of island rum and tropical juices", price: "180" },
        { name: "Whisky Sour", description: "Whisky, citrus, simple syrup", price: "160" },
        { name: "Cocktail de Maison", description: "Signature mix crafted by our bartenders", price: "150" }
      ]
    },
    {
      category: "Beer",
      icon: Wine,
      items: [
        { name: "Prestige", description: "Haitian lager, crisp and refreshing", price: "60" },
        { name: "Guiness", description: "Classic stout", price: "70" },
        { name: "Heineken", description: "International pale lager", price: "85" }
      ]
    },
    {
      category: "Café",
      icon: Coffee,
      items: [
        { name: "Café Cappuccino", description: "Espresso with steamed milk foam", price: "40" },
        { name: "Café Glass Latte", description: "Smooth espresso and milk", price: "50" },
        { name: "Mocha Frappe", description: "Iced mocha blended", price: "120" }
      ]
    },
    {
      category: "Juices",
      icon: Wine,
      items: [
        { name: "Jus Mango au Lait", description: "Fresh mango blended with milk", price: "100" },
        { name: "Jus Concombre", description: "Refreshing cucumber juice", price: "70" },
        { name: "Jus Grenadia", description: "Passion fruit juice", price: "80" }
      ]
    },
    {
      category: "Appetizers",
      icon: Utensils,
      items: [
        { name: "Acra", description: "Traditional fritters", price: "85" },
        { name: "Banan Pese", description: "Crispy fried plantain", price: "75" },
        { name: "Chicken Wings (4-6)", description: "Classic wings, perfect with drinks", price: "120" }
      ]
    }
  ];

  const loungeFeatures = [
    {
      icon: ChefHat,
      title: "Expert Mixologists",
      description: "Award-winning bartenders crafting innovative cocktails and classic favorites"
    },
    {
      icon: Music,
      title: "Live Entertainment",
      description: "Enjoy live jazz, soul, and contemporary music throughout the week"
    },
    {
      icon: Star,
      title: "VIP Bottle Service",
      description: "Private tables with dedicated servers and premium bottle selections"
    },
    {
      icon: Coffee,
      title: "Late Night Dining",
      description: "Full menu available until 3 AM to satisfy any craving"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={cocktailsImage} 
            alt="Premium Cocktails" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            Dining & <span className="text-gold">Lounge</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            Indulge in artisan cocktails, premium spirits, and gourmet cuisine
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Elevate Your <span className="text-gold">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Our premium bar and lounge offers more than just exceptional drinks. It's an experience 
              crafted by expert mixologists using the finest ingredients, presented in an atmosphere of 
              sophisticated luxury. Whether you're celebrating a win or enjoying an evening out, our 
              culinary team ensures every moment is memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loungeFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-lg border border-border p-6 text-center hover:border-gold transition-smooth"
                >
                  <div className="inline-flex p-4 rounded-lg bg-gold/10 mb-4">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Menu <span className="text-gold">Highlights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated selection of our finest offerings
            </p>
          </div>

          <div className="space-y-16">
            {menuHighlights.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index}>
                  <div className="flex items-center justify-center space-x-3 mb-8">
                    <Icon className="w-8 h-8 text-gold" />
                    <h3 className="text-3xl font-serif font-bold">{section.category}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {section.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-gold transition-smooth"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-xl font-semibold">{item.name}</h4>
                          <span className="text-gold font-bold text-lg">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
            <div className="text-center">
              <Link to="/menu">
                <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10">
                  View Full Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lounge Ambiance */}
      <section className="py-20 bg-gradient-dark hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Luxurious <span className="text-gold">Atmosphere</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Step into a world of refined elegance where every detail has been carefully curated 
                to create the perfect ambiance. Plush seating, ambient lighting, and sophisticated 
                décor set the stage for an unforgettable evening.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our lounge features intimate seating areas perfect for conversations, as well as 
                premium bar seating where you can watch our master mixologists at work. Live music 
                adds to the atmosphere Thursday through Sunday.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-gold flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Lounge Hours</p>
                    <p className="text-muted-foreground">Mon-Thu: 6 PM - 2 AM | Fri-Sun: 6 PM - 4 AM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Star className="w-6 h-6 text-gold flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Dress Code</p>
                    <p className="text-muted-foreground">Smart casual required after 8 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-elegant group">
              <img
                src={vipImage}
                alt="Lounge Interior"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Reservations CTA */}
      <section className="py-20 bg-background relative overflow-hidden hidden">
        
        
        <div className="container mx-auto px-4 relative z-10 text-center hidden">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Reserve Your <span className="text-gold">Table</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a premium table with bottle service or reserve a spot at our exclusive bar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-background font-semibold shadow-gold">
              Make a Reservation
            </Button>
            <Link to="/menu">
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dining;
