import { useState } from "react";
import { Plus, Minus, ShoppingBag, ArrowRight, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

// Use your existing categories/items data structure
const menuData = [
  {
    category: "Viennoiseries",
    items: [
      { id: 1, name: "Croissant", price: 3.50, image: "/path/to/croissant.jpg" },
      { id: 2, name: "Pain au Chocolat", price: 4.00, image: "/path/to/pain.jpg" },
    ]
  },
  // ... add other categories
];

const OrderNow = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
    toast.success(`Added ${item.name} to order`);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Menu Area */}
          <div className="flex-1">
            <h1 className="font-display text-4xl mb-2">Order Online</h1>
            <p className="text-stone-500 mb-12">Select your favorites for fresh pickup.</p>

            {menuData.map((section) => (
              <div key={section.category} className="mb-16">
                <h2 className="text-gold uppercase tracking-[0.2em] text-sm font-bold mb-8 border-b border-stone-200 pb-2">
                  {section.category}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {section.items.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-2xl flex gap-4 shadow-sm hover:shadow-md transition-shadow group">
                      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-display text-lg">{item.name}</h3>
                          <p className="text-gold font-bold">€{item.price.toFixed(2)}</p>
                        </div>
                        <Button 
                          onClick={() => addToCart(item)}
                          variant="outline" 
                          size="sm" 
                          className="w-fit rounded-full border-stone-200 hover:bg-gold hover:text-white"
                        >
                          <Plus size={16} className="mr-1" /> Add
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Order Summary Box */}
          <div className="lg:w-96">
            <div className="bg-stone-900 text-white rounded-[2.5rem] p-8 sticky top-32 shadow-2xl">
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                <ShoppingBag className="text-gold" />
                <h2 className="font-display text-2xl">Your Order</h2>
              </div>

              <div className="space-y-6 max-h-[40vh] overflow-y-auto mb-8 pr-2 custom-scrollbar">
                {cart.length === 0 ? (
                  <p className="text-white/40 text-center py-10 italic">Your bag is empty...</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-start group">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-xs text-white/50">Qty: {item.qty} × €{item.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-gold">€{(item.price * item.qty).toFixed(2)}</span>
                        <button onClick={() => removeFromCart(item.id)} className="text-white/20 hover:text-red-400">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="border-t border-white/10 pt-6 space-y-4">
                <div className="flex justify-between text-xl font-display">
                  <span>Total</span>
                  <span className="text-gold">€{total.toFixed(2)}</span>
                </div>
                <Button 
                  disabled={cart.length === 0}
                  className="w-full bg-gold hover:bg-white text-black rounded-full py-6 font-bold flex items-center justify-center gap-2 group"
                >
                  Checkout Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrderNow;