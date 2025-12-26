import { useState, useEffect } from "react";
import { 
  Coffee, 
  Leaf, 
  Sparkles, 
  X, 
  IceCream, 
  Croissant,
  ArrowRight,
  Plus
} from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { toast } from "sonner";
import { useSearchParams } from "react-router-dom"; 

// Import images
import latteArt from "../assets/latte-art.jpg";
import icedCoffee from "../assets/iced-coffee.jpg";
import pastryCoffee from "../assets/pastry-coffee.jpg";
import heroCoffee from "../assets/hero-coffee.jpg";

// --- DATA ---
const featuredDrinks = [
  { id: 1, name: "The Signature", description: "Our distinguished espresso with velvety steamed milk.", price: "$12", image: latteArt, icon: Coffee, badge: "House Selection" },
  { id: 2, name: "Cold Reserve", description: "Slow-steeped for 24 hours, revealing notes of dark chocolate.", price: "$14", image: icedCoffee, icon: Sparkles, badge: "Limited" },
  { id: 3, name: "The Continental", description: "Imported croissant paired with a crafted cappuccino.", price: "$18", image: pastryCoffee, icon: Leaf, badge: "Morning Ritual" },
];

const menuCategories = [
  {
    id: "hot",
    name: "Espresso Bar",
    icon: Coffee,
    items: [
      { id: 101, name: "Classic Espresso", description: "Bold single shot of pure essence", price: "$3.50", image: latteArt },
      { id: 102, name: "Cappuccino", description: "Espresso, steamed milk, velvety foam", price: "$4.75", image: latteArt },
      { id: 103, name: "Café Latte", description: "Smooth espresso with light foam", price: "$5.00", image: latteArt },
      { id: 104, name: "Americano", description: "Espresso diluted with hot water", price: "$3.75", image: heroCoffee },
      { id: 106, name: "Mocha", description: "Espresso with chocolate and milk", price: "$5.50", image: latteArt },
    ],
  },
  {
    id: "cold",
    name: "Iced Series",
    icon: IceCream,
    items: [
      { id: 201, name: "Iced Latte", description: "Chilled espresso with cold milk", price: "$5.25", image: icedCoffee },
      { id: 202, name: "Cold Brew", description: "Smooth, slow-steeped served cold", price: "$4.50", image: icedCoffee },
      { id: 204, name: "Nitro Cold Brew", description: "Creamy, nitrogen-infused brew", price: "$5.75", image: icedCoffee },
      { id: 206, name: "Vietnamese", description: "Strong coffee, condensed milk", price: "$5.50", image: icedCoffee },
    ],
  },
  {
    id: "tea",
    name: "Artisan Tea",
    icon: Leaf,
    items: [
      { id: 302, name: "Matcha Latte", description: "Ceremonial grade matcha", price: "$5.50", image: heroCoffee },
      { id: 303, name: "Chai Latte", description: "Spiced tea with honey", price: "$5.00", image: heroCoffee },
      { id: 304, name: "Jasmine Green", description: "Delicate green tea with blossoms", price: "$3.75", image: heroCoffee },
    ],
  },
  {
    id: "food",
    name: "Patisserie",
    icon: Croissant,
    items: [
      { id: 401, name: "Butter Croissant", description: "Flaky, golden French pastry", price: "$4.25", image: pastryCoffee },
      { id: 402, name: "Almond Croissant", description: "Filled with almond cream", price: "$5.00", image: pastryCoffee },
      { id: 403, name: "Pain au Chocolat", description: "Buttery pastry with dark chocolate", price: "$4.75", image: pastryCoffee },
      { id: 406, name: "Avocado Toast", description: "Smashed avocado on sourdough", price: "$8.50", image: pastryCoffee },
    ],
  },
];

const FeaturedDrinks = () => {
  const { addToCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("hot");
  const [searchParams] = useSearchParams();

  // --- AUTO-OPEN LOGIC ---
  useEffect(() => {
    const shouldOpenMenu = searchParams.get("menu") === "open";
    const categoryParam = searchParams.get("category");

    if (shouldOpenMenu) {
      setIsMenuOpen(true);
      if (categoryParam) {
        setTimeout(() => {
          scrollToCategory(categoryParam);
        }, 500);
      }
    }
  }, [searchParams]);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const handleAddToCart = (item) => {
    const priceNumber = parseFloat(item.price.replace("$", ""));
    addToCart({ id: item.id, name: item.name, price: priceNumber, image: item.image });
    toast.success(`${item.name} added to cart`);
  };

  const scrollToCategory = (catId) => {
    setActiveCategory(catId);
    const offset = window.innerWidth < 768 ? 150 : 0; 
    const element = document.getElementById(`category-${catId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="menu" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-6 py-2 border border-primary/40 text-primary text-xs tracking-[0.3em] uppercase mb-6">
            The Collection
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Curated with <span className="italic text-primary">Distinction</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Each creation is a testament to our unwavering commitment to excellence.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredDrinks.map((drink, index) => (
            <div key={drink.id} className="group relative bg-card border border-border overflow-hidden shadow-soft hover:shadow-gold transition-all duration-700 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={drink.image} alt={drink.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <span className="absolute top-4 left-4 px-4 py-1 bg-background/90 backdrop-blur-sm border border-primary/30 text-primary text-xs tracking-[0.15em] uppercase">{drink.badge}</span>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-2xl text-card-foreground">{drink.name}</h3>
                  <div className="w-10 h-10 border border-primary/30 flex items-center justify-center">
                    <drink.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed font-light">{drink.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-2xl font-serif text-primary">{drink.price}</span>
                  <button onClick={() => handleAddToCart(drink)} className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500">Add to Order →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center w-full mb-16">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 text-xs tracking-[0.2em] uppercase transition-all duration-500 shadow-lg hover:shadow-primary/25 rounded-sm"
          >
            View Complete Menu
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        // --- CHANGED Z-INDEX FROM 50 TO 40 ---
        // This ensures it sits BELOW the Navbar (which should be 50+)
        <div className="fixed inset-0 top-[80px] z-40 flex justify-center items-center p-4 overflow-hidden">
          
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-md animate-fade-in cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />

          <div 
            className="relative w-full max-w-6xl h-[90%] bg-background border border-border shadow-2xl rounded-xl flex flex-col md:flex-row overflow-hidden animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Sidebar (Navigation) */}
            <div className="
              w-full md:w-64 lg:w-72 
              bg-card/50 backdrop-blur-xl 
              border-b md:border-b-0 md:border-r border-border 
              z-20
              flex-shrink-0
            ">
              <div className="flex flex-col h-full">
                
                <div className="flex items-center justify-between p-4 md:p-8">
                   <h3 className="text-xs tracking-[0.3em] uppercase text-primary font-bold">Categories</h3>
                   <button 
                      onClick={() => setIsMenuOpen(false)} 
                      className="md:hidden p-2 text-muted-foreground hover:text-primary active:scale-95 transition-transform"
                   >
                     <X className="w-6 h-6" />
                   </button>
                </div>
                
                <nav className="
                  px-4 pb-4 md:px-8 md:pb-8 md:space-y-4
                  flex md:flex-col gap-3 md:gap-0
                  overflow-x-auto md:overflow-visible
                  scrollbar-hide
                ">
                  {menuCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => scrollToCategory(cat.id)}
                      className={`
                        flex-shrink-0 group flex items-center md:justify-between 
                        px-4 py-2 md:p-4 rounded-full md:rounded-lg 
                        border transition-all duration-300 text-sm md:text-base
                        whitespace-nowrap
                        ${activeCategory === cat.id 
                          ? "bg-primary text-primary-foreground border-primary shadow-md" 
                          : "border-border bg-transparent hover:bg-accent text-muted-foreground"
                        }
                      `}
                    >
                      <div className="flex items-center gap-2 md:gap-3">
                         <cat.icon className="w-4 h-4 md:w-5 md:h-5" />
                         <span className="font-serif tracking-wide">{cat.name}</span>
                      </div>
                      <ArrowRight className={`w-4 h-4 hidden md:block ${activeCategory === cat.id ? 'opacity-100' : 'opacity-0'}`} />
                    </button>
                  ))}
                </nav>

                <div className="hidden md:flex p-8 mt-auto">
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <X className="w-4 h-4" /> Close Menu
                  </button>
                </div>

              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto scroll-smooth bg-background/50 relative">
              <div className="p-4 md:p-12 lg:p-16 max-w-4xl mx-auto space-y-12 md:space-y-20 pb-32">
                
                {menuCategories.map((cat) => (
                  <div key={cat.id} id={`category-${cat.id}`} className="scroll-mt-32 md:scroll-mt-10">
                    
                    <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10 pb-4 border-b border-border/50">
                      <div className="p-2 md:p-3 bg-primary/10 rounded-full text-primary">
                        <cat.icon className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <h2 className="text-2xl md:text-4xl font-serif text-foreground">{cat.name}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {cat.items.map((item) => (
                        <div 
                          key={item.id} 
                          className="group relative bg-card border border-border/50 p-3 md:p-4 rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex items-center gap-3 md:gap-4 overflow-hidden"
                        >
                          <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-lg overflow-hidden relative">
                             <img 
                               src={item.image} 
                               alt={item.name} 
                               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                             />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1">
                               <h3 className="font-serif text-base md:text-lg font-medium text-foreground truncate pr-2">{item.name}</h3>
                               <span className="font-bold text-primary text-sm md:text-base">{item.price}</span>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2 mb-2 md:mb-3">{item.description}</p>
                            
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleAddToCart(item);
                                }}
                                className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-muted-foreground group-hover:text-primary transition-colors"
                            >
                                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-border group-hover:border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                    <Plus className="w-3 h-3" />
                                </div>
                                Add
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedDrinks;