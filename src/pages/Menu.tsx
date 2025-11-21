import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import cocktailsImage from "@/assets/cocktails.jpg";
import vipImage from "@/assets/vip-lounge.jpg";
import { useI18n } from "@/i18n";

type MenuItem = { name: string; price: string | number };
type MenuSection = { title: string; items: MenuItem[] };

const drinksSections: MenuSection[] = [
  {
    title: "Café",
    items: [
      { name: "Verre de Lait", price: 30 },
      { name: "Café au Lait", price: 35 },
      { name: "Café Cappuccino", price: 40 },
      { name: "Café Glass Latte", price: 50 },
      { name: "Café Glass Mocha", price: 50 },
      { name: "Mocha Frappe", price: 120 },
      { name: "Caramel Frappe", price: 120 },
      { name: "Funky Monkey", price: 150 },
    ],
  },
  {
    title: "Smoothies",
    items: [
      { name: "Caramel", price: 120 },
      { name: "Chocolate", price: 120 },
      { name: "Strawberry", price: 120 },
      { name: "Citwon", price: 120 },
      { name: "Mix Double Flavor", price: 140 },
      { name: "Mix Triple Flavor", price: 150 },
    ],
  },
  {
    title: "Softdrinks",
    items: [
      { name: "Coca Cola", price: 30 },
      { name: "7 UP", price: 30 },
      { name: "Cola Courrone", price: 25 },
      { name: "Limonade", price: 25 },
      { name: "Fanta", price: 25 },
      { name: "Canada Dry Ginger Ale", price: 60 },
      { name: "Canada Dry Tonic", price: 60 },
      { name: "Canada Dry Club Soda", price: 60 },
    ],
  },
  {
    title: "Juice Natural",
    items: [
      { name: "Jus Concombre", price: 70 },
      { name: "Jus Citwon", price: 70 },
      { name: "Jus Ceries", price: 80 },
      { name: "Jus Grenadia", price: 80 },
      { name: "Jus Papaye Simple", price: 70 },
      { name: "Jus Papaye au Lait", price: 100 },
      { name: "Jus Mango Simple", price: 70 },
      { name: "Jus Mango au Lait", price: 100 },
      { name: "Jus Natural (Mix)", price: 100 },
    ],
  },
  {
    title: "Juice",
    items: [
      { name: "Aloe Vera Juice", price: 100 },
      { name: "Gatorade", price: 70 },
      { name: "Jumex Juice in Can", price: 60 },
      { name: "Petit Juice in Can", price: 60 },
      { name: "Energy Drink Alo Ginseng", price: 70 },
      { name: "Mistic", price: 90 },
    ],
  },
  {
    title: "Cocktails",
    items: [
      { name: "Rhum Punch", price: 180 },
      { name: "Rhum Sour 3*", price: 170 },
      { name: "Rhum Sour 5*", price: 160 },
      { name: "Amaretto Sour", price: 160 },
      { name: "Whisky Sour", price: 160 },
      { name: "Cocktail de Maison", price: 150 },
    ],
  },
  {
    title: "Beer",
    items: [
      { name: "Prestige", price: 60 },
      { name: "Guiness", price: 70 },
      { name: "Heineken", price: 85 },
      { name: "Kinam", price: 35 },
      { name: "Malta HGB - Big", price: 35 },
      { name: "Malta HGB - Small", price: 30 },
      { name: "Malta - Plastic", price: 45 },
      { name: "Benedicta", price: 60 },
      { name: "Cyclon", price: 75 },
    ],
  },
  {
    title: "Alcohol",
    items: [
      { name: "Amaretto di Amore", price: 170 },
      { name: "Baileys", price: 170 },
      { name: "Cointreau", price: 180 },
      { name: "Grand Marnier", price: 180 },
      { name: "Henessy", price: 230 },
      { name: "Remy Martin", price: 200 },
      { name: "Chivas Regal", price: 280 },
      { name: "Rhum Barbancourt 3*", price: 145 },
      { name: "Rhum Barbancourt 5*", price: 135 },
      { name: "Rhum Barbancourt Blanc", price: 145 },
      { name: "Whisky - Jack Daniel", price: 200 },
      { name: "Whisky - Black Label", price: 250 },
      { name: "Whisky - Double Black Label", price: 260 },
      { name: "Whisky - Red Label", price: 200 },
      { name: "Whisky - Something Special", price: 145 },
      { name: "Vodka - Stolichnaya", price: 135 },
      { name: "Vodka - Raiska", price: 135 },
      { name: "Vodka - Absolut", price: 145 },
      { name: "Vin Rouge", price: 135 },
      { name: "Vin Rosé", price: 135 },
      { name: "Vin Blanc", price: 135 },
    ],
  },
  {
    title: "Others",
    items: [
      { name: "Comme il Faut (Small)", price: 40 },
      { name: "Comme il Faut (Big)", price: 80 },
      { name: "Mineral Water", price: 15 },
      { name: "Perrier", price: 80 },
    ],
  },
];

const foodSections: MenuSection[] = [
  {
    title: "Appetizers",
    items: [
      { name: "Acra", price: 85 },
      { name: "Banan Pese", price: 75 },
      { name: "Pomme de Terre", price: 80 },
      { name: "Hotdog", price: 120 },
      { name: "Chicken Wings (4-6)", price: 120 },
      { name: "Chicken Wings (10-12)", price: 200 },
      { name: "Pistache", price: 20 },
      { name: "Egg Roll", price: 75 },
      { name: "Calzon", price: 120 },
      { name: "Kibby (3)", price: 75 },
    ],
  },
  {
    title: "Burger",
    items: [
      { name: "Egg Simple", price: 120 },
      { name: "Egg et Jambon Fromage", price: 140 },
      { name: "Poulet Simple", price: 160 },
      { name: "Poulet et Jambon Fromage", price: 180 },
      { name: "Beef et Jambon Fromage", price: 180 },
      { name: "Beef Egg et Jambon Fromage", price: 200 },
    ],
  },
  {
    title: "Hot Plates",
    items: [
      { name: "Spaghetti", price: 120 },
      { name: "Stir Fry Noodles", price: 200 },
      { name: "Plat Chicken Wings avec Pomme de Terre", price: 180 },
      { name: "Plat Chicken Wings avec Banan", price: 200 },
      { name: "Plat Chicken Wings avec Acra", price: 200 },
      { name: "Plat Chicken Nuggets avec Pomme de Terre", price: 200 },
      { name: "Plat Chicken Nuggets avec Banan", price: 200 },
      { name: "Plat Chicken Fillet avec Pomme de Terre", price: 210 },
      { name: "Plat Poulet Frit avec Banan", price: 200 },
      { name: "Plat Poulet Frit avec Pomme de Terre", price: 210 },
      { name: "Plat Poulet Panne Pomme de Terre", price: 210 },
      { name: "Plat Poulet Panne Banan", price: 210 },
      { name: "Plat Poulet Bouilli Pomme de Terre", price: 210 },
      { name: "Plat Poulet Bouilli Banan", price: 210 },
      { name: "Plat Griot Pomme de Terre", price: 230 },
      { name: "Plat Griot Banan", price: 240 },
      { name: "Plat Tassot Pomme de Terre", price: 250 },
      { name: "Plat Tassot Banan", price: 260 },
      { name: "Plat du Jour", price: 180 },
      { name: "Plat Spare Ribs avec Banan/Pomme de Terre", price: 250 },
    ],
  },
  {
    title: "Burritos Wrap",
    items: [
      { name: "Jambon Fromage", price: 120 },
      { name: "Chicken Simple", price: 130 },
      { name: "Chicken et Jambon Fromage (Mix)", price: 150 },
    ],
  },
  {
    title: "Soup",
    items: [
      { name: "Ramen Soup with Egg / Tassot", price: 120 },
      { name: "Bouillon", price: 200 },
    ],
  },
  {
    title: "Salad",
    items: [
      { name: "Plat Salad Poulet", price: 240 },
      { name: "Plat Salad Jambon Fromage", price: 210 },
      { name: "Fruit Salad", price: 150 },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Donut", price: 35 },
      { name: "Chocolate Sliced Cake", price: 70 },
    ],
  },
  {
    title: "Sandwich",
    items: [
      { name: "Pain Grillé (4)", price: 35 },
      { name: "Pain Chauff/Fraiche", price: 35 },
      { name: "Pain Grillé Mamba", price: 40 },
      { name: "Cubano Sandwich Poulet", price: 120 },
      { name: "Cubano Sandwich Jambon et Fromage", price: 145 },
      { name: "Pain Tranche Sandwich Poulet", price: 150 },
      { name: "Pain Tranche Sandwich Jambon et Fromage", price: 140 },
    ],
  },
];

const Menu = () => {
  const { t } = useI18n();
  const mid = Math.ceil(foodSections.length / 2);
  const leftSections = foodSections.slice(0, mid);
  const rightSections = foodSections.slice(mid);
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={cocktailsImage} alt="Menu" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold">{t("menu.hero.title")}</h1>
          <p className="text-muted-foreground mt-3">{t("menu.hero.tagline")}</p>
        </div>
      </section>

      {/* Drinks */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10">{t("menu.drinks.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drinksSections.map((sec, i) => (
              <div key={sec.title} className="relative overflow-hidden bg-card rounded-lg border border-border p-6">
                <img
                  src={cocktailsImage}
                  alt={`${sec.title} background`}
                  className="absolute inset-0 w-full h-full object-cover opacity-10"
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4">{t(`menu.drinks.section.${i + 1}.title`)}</h3>
                  <ul className="space-y-2">
                    {sec.items.map((item) => (
                      <li key={item.name} className="flex justify-between text-sm">
                        <span>{item.name}</span>
                        <span className="text-gold font-semibold">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10">{t("menu.food.title")}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-8">
              {leftSections.map((sec) => (
                <div key={sec.title} className="relative overflow-hidden bg-background rounded-lg border border-border p-6">
                  <img
                    src={vipImage}
                    alt={`${sec.title} background`}
                    className="absolute inset-0 w-full h-full object-cover opacity-10"
                  />
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-4">{t(`menu.food.section.${foodSections.indexOf(sec) + 1}.title`)}</h3>
                    <ul className="space-y-2">
                      {sec.items
                        .slice()
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((item) => (
                          <li key={item.name} className="flex justify-between text-sm">
                            <span>{item.name}</span>
                            <span className="text-gold font-semibold">{item.price}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {rightSections.map((sec) => (
                <div key={sec.title} className="relative overflow-hidden bg-background rounded-lg border border-border p-6">
                  <img
                    src={vipImage}
                    alt={`${sec.title} background`}
                    className="absolute inset-0 w-full h-full object-cover opacity-10"
                  />
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-4">{t(`menu.food.section.${foodSections.indexOf(sec) + 1}.title`)}</h3>
                    <ul className="space-y-2">
                      {sec.items
                        .slice()
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((item) => (
                          <li key={item.name} className="flex justify-between text-sm">
                            <span>{item.name}</span>
                            <span className="text-gold font-semibold">{item.price}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;