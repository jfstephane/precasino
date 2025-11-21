import cocktailsImage from "@/assets/cocktails.jpg";
import { Wine, Coffee, Utensils } from "lucide-react";

const DiningSection = () => {
  const { t } = useI18n();
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
              {t("home.dining.title.left")} & <span className="text-gold">{t("home.dining.title.right")}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t("home.dining.tagline")}
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gold/10">
                  <Wine className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t("home.dining.item1.title")}</h3>
                  <p className="text-muted-foreground">
                    {t("home.dining.item1.desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gold/10">
                  <Coffee className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t("home.dining.item2.title")}</h3>
                  <p className="text-muted-foreground">
                    {t("home.dining.item2.desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gold/10">
                  <Utensils className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t("home.dining.item3.title")}</h3>
                  <p className="text-muted-foreground">
                    {t("home.dining.item3.desc")}
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
import { useI18n } from "@/i18n";
