const About = () => {
  const { t } = useI18n();
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gold">
            {t("home.about.title")}
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t("home.about.p1")}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t("home.about.p2")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
import { useI18n } from "@/i18n";
