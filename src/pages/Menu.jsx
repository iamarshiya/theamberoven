import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { useCart } from "../contexts/CartContext";
import { toast } from "sonner";
import { Coffee, Leaf, IceCream, Croissant } from "lucide-react";

import latteArt from "../assets/latte-art.jpg";
import icedCoffee from "../assets/iced-coffee.jpg";
import pastryCoffee from "../assets/pastry-coffee.jpg";
import heroCoffee from "../assets/hero-coffee.jpg";

const menuCategories = [
  {
    name: "Hot Coffees",
    icon: Coffee,
    items: [
      { id: 101, name: "Classic Espresso", description: "Rich, bold single or double shot of pure coffee essence", price: "$3.50", image: latteArt },
      { id: 102, name: "Cappuccino", description: "Equal parts espresso, steamed milk, and velvety foam", price: "$4.75", image: latteArt },
      { id: 103, name: "Café Latte", description: "Smooth espresso with steamed milk and light foam", price: "$5.00", image: latteArt },
      { id: 104, name: "Americano", description: "Espresso diluted with hot water for a lighter taste", price: "$3.75", image: heroCoffee },
      { id: 105, name: "Flat White", description: "Velvety microfoam over rich espresso", price: "$4.50", image: latteArt },
      { id: 106, name: "Mocha", description: "Espresso with chocolate and steamed milk", price: "$5.50", image: latteArt },
    ],
  },
  {
    name: "Iced & Cold Brew",
    icon: IceCream,
    items: [
      { id: 201, name: "Iced Latte", description: "Chilled espresso with cold milk over ice", price: "$5.25", image: icedCoffee },
      { id: 202, name: "Cold Brew", description: "Smooth, slow-steeped coffee served cold", price: "$4.50", image: icedCoffee },
      { id: 203, name: "Iced Americano", description: "Espresso over ice with cold water", price: "$4.00", image: icedCoffee },
      { id: 204, name: "Nitro Cold Brew", description: "Creamy, nitrogen-infused cold brew", price: "$5.75", image: icedCoffee },
      { id: 205, name: "Iced Mocha", description: "Chocolate and espresso over ice with milk", price: "$5.75", image: icedCoffee },
      { id: 206, name: "Vietnamese Iced Coffee", description: "Strong coffee with sweet condensed milk", price: "$5.50", image: icedCoffee },
    ],
  },
  {
    name: "Specialty Teas",
    icon: Leaf,
    items: [
      { id: 301, name: "Earl Grey", description: "Classic bergamot-infused black tea", price: "$3.50", image: heroCoffee },
      { id: 302, name: "Matcha Latte", description: "Ceremonial grade matcha with steamed milk", price: "$5.50", image: heroCoffee },
      { id: 303, name: "Chai Latte", description: "Spiced tea with steamed milk and honey", price: "$5.00", image: heroCoffee },
      { id: 304, name: "Jasmine Green", description: "Delicate green tea with jasmine blossoms", price: "$3.75", image: heroCoffee },
    ],
  },
  {
    name: "Pastries & Bites",
    icon: Croissant,
    items: [
      { id: 401, name: "Butter Croissant", description: "Flaky, golden French pastry", price: "$4.25", image: pastryCoffee },
      { id: 402, name: "Almond Croissant", description: "Filled with almond cream and topped with sliced almonds", price: "$5.00", image: pastryCoffee },
      { id: 403, name: "Pain au Chocolat", description: "Buttery pastry with dark chocolate", price: "$4.75", image: pastryCoffee },
      { id: 404, name: "Blueberry Muffin", description: "Fresh blueberries in a moist, tender muffin", price: "$3.75", image: pastryCoffee },
      { id: 405, name: "Chocolate Chip Cookie", description: "Warm, gooey chocolate chip perfection", price: "$3.00", image: pastryCoffee },
      { id: 406, name: "Avocado Toast", description: "Smashed avocado on artisan sourdough", price: "$8.50", image: pastryCoffee },
    ],
  },
];

const Menu = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    const numericPrice = parseFloat(item.price.replace("$", ""));
    addToCart({
      id: item.id,
      name: item.name,
      price: numericPrice,
      image: item.image,
    });
    toast.success(`${item.name} has been added to your order.`);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our Menu
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Crafted with care, served with passion. Every item on our menu reflects our commitment to quality and excellence.
          </p>
        </section>

        {/* Menu Categories */}
        {menuCategories.map((category) => (
          <section key={category.name} className="container mx-auto px-4 mb-16">
            <div className="flex items-center gap-3 mb-8">
              <category.icon className="w-8 h-8 text-primary" />
              <h2 className="font-serif text-3xl font-bold text-foreground">{category.name}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="group bg-card border border-border rounded-none overflow-hidden hover:border-primary transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-xl font-semibold text-foreground">{item.name}</h3>
                      <span className="text-primary font-semibold">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Order
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
};

export default Menu;