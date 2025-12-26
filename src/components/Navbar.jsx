import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import OrderModal from "../components/OrderModal"; // Import the specific menu modal

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Events", href: "#events" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showOrderModal, setShowOrderModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gold z-[60] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-white border-b border-stone-200 py-4 px-10 shadow-md" : "bg-gradient-to-b from-black/70 py-8 px-10"
        }`}>
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="font-display text-xl md:text-2xl font-bold">
            <span className={isScrolled ? "text-stone-900" : "text-white"}>THE </span>
            <span className="text-gold">AMBER OVEN</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
               <a key={link.name} href={link.href} className={`text-xs tracking-widest uppercase font-medium transition-colors ${isScrolled ? "text-stone-800" : "text-white"} hover:text-gold`}>
                {link.name}
               </a>
            ))}
            <Button 
              onClick={() => setShowOrderModal(true)}
              className={`rounded-full px-6 py-2 h-9 text-xs font-bold uppercase tracking-widest transition-all ${
                isScrolled ? "bg-stone-900 text-white hover:bg-gold" : "bg-gold text-black hover:bg-white"
              }`}
            >
              Order Now
            </Button>
          </div>

          <button className={`lg:hidden ${isScrolled ? "text-stone-900" : "text-white"}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white p-10 shadow-2xl flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-stone-800 text-xl tracking-widest uppercase">{link.name}</a>
            ))}
            <Button onClick={() => { setShowOrderModal(true); setIsOpen(false); }} className="w-full bg-gold text-black py-6">Order Now</Button>
          </div>
        )}
      </nav>

      {/* Logic for the Popup Menu */}
      <OrderModal isOpen={showOrderModal} onClose={() => setShowOrderModal(false)} />
    </>
  );
};

export default Navbar;