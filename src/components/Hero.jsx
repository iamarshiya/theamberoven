import { Button } from "../components/ui/button";
import heroBakery from "../assets/hero-bakery.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBakery}
          alt="Fresh artisan pastries and breads"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <p
            className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Artisan French Bakery
          </p>
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl text-cream font-medium leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Baked with
            <span className="italic text-gold-light"> Love</span>
            <br />
            & Tradition
          </h1>
          <p
            className="text-cream/80 text-lg md:text-xl mb-8 max-w-lg font-light leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Experience the finest French pastries, artisan breads, and delicate
            confections, freshly baked every morning in our Parisian-style bakery.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#menu">View Our Menu</a>
            </Button>
            <Button variant="elegant" size="xl" className="border-cream text-cream hover:bg-cream hover:text-foreground" asChild>
              <a href="#preorder">Pre-Order Now</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Daily Special Badge */}
      <div
        className="absolute bottom-10 right-10 hidden lg:block animate-fade-up"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="bg-gold/90 backdrop-blur-sm rounded-full w-40 h-40 flex flex-col items-center justify-center text-center p-4 shadow-elevated rotate-12 hover:rotate-0 transition-transform duration-500">
          <span className="text-xs uppercase tracking-wider text-foreground/80 font-medium">
            Today's Special
          </span>
          <span className="font-display text-xl text-foreground font-semibold mt-1">
            Croissant
          </span>
          <span className="font-display text-lg text-foreground/90">
            aux Amandes
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
