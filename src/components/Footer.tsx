import { Facebook, Instagram, Twitter } from "lucide-react";
import { NavLink } from "./NavLink";
import logoElRancho from "@/assets/logoelrancho.webp";

const Footer = () => {
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
              Pétion-Ville's premier destination for luxury gaming and entertainment.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-secondary hover:bg-gold/10 text-muted-foreground hover:text-gold transition-fast"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-secondary hover:bg-gold/10 text-muted-foreground hover:text-gold transition-fast"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-secondary hover:bg-gold/10 text-muted-foreground hover:text-gold transition-fast"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Games", "Events", "Dining", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-gold transition-fast"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/legal/terms" className="text-muted-foreground hover:text-gold transition-fast">Terms & Conditions</NavLink>
              </li>
              <li>
                <NavLink to="/legal/privacy" className="text-muted-foreground hover:text-gold transition-fast">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="/legal/responsible-gaming" className="text-muted-foreground hover:text-gold transition-fast">Responsible Gaming</NavLink>
              </li>
              <li>
                <NavLink to="/legal/age-verification" className="text-muted-foreground hover:text-gold transition-fast">Age Verification</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Casino El Rancho. All rights reserved.</p>
          <p className="mt-2">Must be 18+ to enter. Please gamble responsibly.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
