import { useState } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logoElRancho from "@/assets/logoelrancho.webp";
import { useI18n } from "@/i18n";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { lang, setLang, t } = useI18n();
  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/games", label: t("nav.games") },
    { to: "/events", label: t("nav.events") },
    { to: "/dining", label: t("nav.dining") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logoElRancho}
              alt="Casino El Rancho"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <span className="sr-only">Casino El Rancho</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-muted-foreground hover:text-gold transition-fast relative group"
                activeClassName="text-gold"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-smooth" />
              </NavLink>
            ))}
            <div className="flex items-center gap-2">
              <Button variant="default" size="sm" className="bg-gold hover:bg-gold-dark text-background font-semibold shadow-gold hidden">
                Book Now
              </Button>
              <div className="flex items-center gap-1 border border-border rounded-md p-1">
                <button
                  aria-label="English"
                  className={`px-2 py-1 rounded ${lang === "en" ? "bg-gold text-background" : "text-muted-foreground"}`}
                  onClick={() => setLang("en")}
                >
                  EN
                </button>
                <button
                  aria-label="Français"
                  className={`px-2 py-1 rounded ${lang === "fr" ? "bg-gold text-background" : "text-muted-foreground"}`}
                  onClick={() => setLang("fr")}
                >
                  FR
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Actions: Language + Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center gap-1 border border-border rounded-md p-1">
              <button
                aria-label="English"
                className={`px-2 py-1 rounded ${lang === "en" ? "bg-gold text-background" : "text-muted-foreground"}`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <button
                aria-label="Français"
                className={`px-2 py-1 rounded ${lang === "fr" ? "bg-gold text-background" : "text-muted-foreground"}`}
                onClick={() => setLang("fr")}
              >
                FR
              </button>
            </div>
            <button
              className="text-foreground p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="block text-base font-medium text-muted-foreground hover:text-gold transition-fast py-2"
                activeClassName="text-gold"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Button variant="default" size="sm" className="w-full bg-gold hover:bg-gold-dark text-background font-semibold shadow-gold hidden">
              Book Now
            </Button>
            <div className="flex items-center gap-2">
              <button
                aria-label="English"
                className={`px-2 py-1 rounded ${lang === "en" ? "bg-gold text-background" : "text-muted-foreground"}`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <button
                aria-label="Français"
                className={`px-2 py-1 rounded ${lang === "fr" ? "bg-gold text-background" : "text-muted-foreground"}`}
                onClick={() => setLang("fr")}
              >
                FR
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
