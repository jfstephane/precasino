import { useState } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logoElRancho from "@/assets/logoelrancho.webp";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/games", label: "Games" },
    { to: "/events", label: "Promotions & Events" },
    { to: "/dining", label: "Dining & Lounge" },
    { to: "/contact", label: "Contact & Location" },
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
            <Button variant="default" size="sm" className="bg-gold hover:bg-gold-dark text-background font-semibold shadow-gold hidden">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
