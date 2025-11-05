import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-serif font-bold mb-4">
              <span className="text-gold">Casino</span>{" "}
              <span className="text-foreground">El Rancho</span>
            </div>
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

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Games", "Events", "Dining", "VIP Club", "Contact"].map((link) => (
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

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Terms & Conditions", "Privacy Policy", "Responsible Gaming", "Age Verification"].map((link) => (
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
