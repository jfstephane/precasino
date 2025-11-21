import { Facebook, Instagram } from "lucide-react";
import { NavLink } from "./NavLink";
import logoElRancho from "@/assets/logoelrancho.webp";
import { useI18n } from "@/i18n";

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <NavLink to="/" className="inline-block mb-4">
              <img
                src={logoElRancho}
                alt="Casino El Rancho"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </NavLink>
            <p className="text-muted-foreground mb-4">
              {t("footer.brand.tagline")}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/p/El-Rancho-Casino-100066340551816/" 
                className="p-2 rounded-lg bg-secondary hover:bg-gold/10 text-muted-foreground hover:text-gold transition-fast"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/casinoelrancho/" 
                className="p-2 rounded-lg bg-secondary hover:bg-gold/10 text-muted-foreground hover:text-gold transition-fast"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              {[
                { name: t("nav.games"), to: "/games" },
                { name: t("nav.events"), to: "/events" },
                { name: t("nav.dining"), to: "/dining" },
                { name: t("nav.contact"), to: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink to={link.to} className="text-muted-foreground hover:text-gold transition-fast">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/legal/terms" className="text-muted-foreground hover:text-gold transition-fast">{t("footer.terms")}</NavLink>
              </li>
              <li>
                <NavLink to="/legal/privacy" className="text-muted-foreground hover:text-gold transition-fast">{t("footer.privacy")}</NavLink>
              </li>
              <li>
                <NavLink to="/legal/responsible-gaming" className="text-muted-foreground hover:text-gold transition-fast">{t("footer.responsible")}</NavLink>
              </li>
              <li>
                <NavLink to="/legal/age-verification" className="text-muted-foreground hover:text-gold transition-fast">{t("footer.age")}</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} {t("footer.copyright")}</p>
          <p className="mt-2">{t("footer.disclaimer")}</p>
          <p className="mt-2">
            {t("footer.builtBy.prefix")} {" "}
            <a
              href="https://414creativetech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              414 Creative Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
