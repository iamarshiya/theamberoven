const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-secondary rounded-2xl h-48 flex items-center justify-center">
                  <span className="font-display text-6xl text-gold">25+</span>
                </div>
                <div className="bg-cream rounded-2xl p-6 text-center">
                  <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                    Years of
                  </p>
                  <p className="font-display text-xl text-foreground">
                    Excellence
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-cream rounded-2xl p-6 text-center">
                  <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                    Fresh Daily
                  </p>
                  <p className="font-display text-xl text-foreground">
                    50+ Items
                  </p>
                </div>
                <div className="bg-gold/20 rounded-2xl h-48 flex items-center justify-center">
                  <span className="font-display text-5xl text-gold">100%</span>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-gold/30 rounded-full" />
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-rose/20 rounded-full blur-xl" />
          </div>

          {/* Content */}
          <div>
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              A Passion for
              <span className="italic text-gold"> Perfection</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in 1998 by Master Baker Jean-Pierre Moreau, La Belle
                Pâtisserie brings the authentic taste of Paris to your neighborhood.
                Every morning at 4 AM, our bakers begin crafting each pastry with
                the same dedication and passion that has defined French baking for
                centuries.
              </p>
              <p>
                We source only the finest ingredients — French butter from Normandy,
                flour from heritage wheat mills, and seasonal fruits from local
                farms. Our commitment to quality means no shortcuts, no
                preservatives, just pure artisanal excellence.
              </p>
              <p>
                From the delicate layers of our croissants to the rich ganache in
                our éclairs, every bite tells the story of tradition meeting
                innovation.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-secondary border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-muted-foreground">
                      {["JP", "MC", "AL", "SV"][i]}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <p className="font-medium text-foreground">Our Master Bakers</p>
                <p className="text-sm text-muted-foreground">
                  4 award-winning pastry chefs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
