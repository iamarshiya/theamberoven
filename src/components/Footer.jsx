import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl mb-4">
             The <span className="text-gold">Amber Oven</span>
            </h3>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Bringing the authentic taste of Paris to you since 1998. Every pastry
              tells a story of tradition, passion, and the pursuit of perfection.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {["Menu", "Pre-Order", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg mb-4 text-gold">Opening Hours</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>Mon - Fri: 7AM - 7PM</li>
              <li>Saturday: 7AM - 6PM</li>
              <li>Sunday: 8AM - 2PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 La Belle Pâtisserie. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Baked by Arshiya 🥐
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
