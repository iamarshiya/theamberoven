import croissant from "../assets/croissant.jpg";
import macarons from "../assets/macarons.jpg";
import baguette from "../assets/baguette.jpg";
import tart from "../assets/tart.jpg";
import painAuChocolat from "../assets/pain-au-chocolat.jpg";

const categories = [
  {
    name: "Viennoiseries",
    description: "Classic French pastries",
    items: [
      { name: "Croissant", price: "3.50", image: croissant },
      { name: "Pain au Chocolat", price: "4.00", image: painAuChocolat },
      { name: "Croissant aux Amandes", price: "4.50", image: croissant },
    ],
  },
  {
    name: "Pâtisseries",
    description: "Elegant pastries & tarts",
    items: [
      { name: "Tarte aux Fruits", price: "6.50", image: tart },
      { name: "Macarons (6pc)", price: "12.00", image: macarons },
      { name: "Éclair au Chocolat", price: "5.50", image: tart },
    ],
  },
  {
    name: "Pains Artisanaux",
    description: "Handcrafted breads",
    items: [
      { name: "Baguette Tradition", price: "3.00", image: baguette },
      { name: "Pain de Campagne", price: "5.50", image: baguette },
      { name: "Fougasse aux Olives", price: "6.00", image: baguette },
    ],
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Our Selection
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Délices du Jour
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Each creation is handcrafted with the finest ingredients, following
            time-honored French techniques passed down through generations.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-20">
          {categories.map((category, categoryIndex) => (
            <div key={category.name}>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px bg-border flex-1" />
                <div className="text-center">
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {category.description}
                  </p>
                </div>
                <div className="h-px bg-border flex-1" />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={item.name}
                    className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
                    style={{
                      animationDelay: `${(categoryIndex * 3 + itemIndex) * 0.1}s`,
                    }}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <h4 className="font-display text-xl text-foreground">
                          {item.name}
                        </h4>
                        <span className="text-gold font-semibold text-lg">
                          €{item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
