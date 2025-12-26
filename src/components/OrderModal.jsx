import { useState } from "react";
import { X, Plus, Minus, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";

const menuItems = [
  { category: "Viennoiseries", items: [{ id: 1, name: "Croissant", price: 3.50 }, { id: 2, name: "Pain au Chocolat", price: 4.00 }] },
  { category: "Pâtisseries", items: [{ id: 3, name: "Tarte aux Fruits", price: 6.50 }, { id: 4, name: "Macarons (6pc)", price: 12.00 }] },
  { category: "Pains Artisanaux", items: [{ id: 5, name: "Baguette Tradition", price: 3.00 }, { id: 6, name: "Pain de Campagne", price: 5.50 }] }
];

const OrderModal = ({ isOpen, onClose }) => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("menu"); 
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClose = () => {
    setView("menu");
    setCart([]);
    setIsProcessing(false);
    onClose();
  };

  if (!isOpen) return null;

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) return prev.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart((prev) => prev.map((i) => 
      i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i
    ).filter(i => i.qty > 0));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setView("success");
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-500" onClick={handleClose} />
      
      <div className="relative bg-white/10 backdrop-blur-[30px] w-full max-w-lg max-h-[85vh] overflow-hidden rounded-[2.5rem] border border-white/20 shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
        
        {/* Logo remains exactly as you had it */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <img 
            src="/logo.jpg" 
            alt="Amber Oven Logo" 
            className="w-4/5 object-contain grayscale opacity-10 scale-125" 
            style={{ mixBlendMode: "screen" }}
          />
        </div>

        {view === "success" ? (
          <div className="relative z-10 flex flex-col items-center justify-center p-12 text-center h-[450px] animate-in zoom-in-50 duration-700">
            <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mb-6 shadow-[0_0_60px_rgba(212,175,55,0.6)]">
              <CheckCircle2 size={48} className="text-black" />
            </div>
            <h2 className="font-display text-4xl text-white italic tracking-tight italic">Merci Beaucoup!</h2>
            <Button onClick={handleClose} className="mt-10 bg-gold text-black px-12 py-7 rounded-full font-extrabold shadow-xl">
              Done
            </Button>
          </div>
        ) : (
          <>
            {/* Header: Now using bg-black/60 to match footer exactly */}
            <div className="relative z-10 p-8 flex justify-between items-center border-b border-white/10 bg-black/60 backdrop-blur-xl">
              <div>
                <h2 className="font-display text-3xl text-white italic drop-shadow-lg">
                  {view === "menu" ? "Digital Menu" : "Votre Panier"}
                </h2>
                <div className="h-[2px] w-12 bg-gold mt-2" />
              </div>
              <button onClick={handleClose} className="p-2 text-white/50 hover:text-white transition-all">
                <X size={28} />
              </button>
            </div>

            {/* Content Area remains untouched */}
            <div className="relative z-10 flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
              {view === "menu" ? (
                menuItems.map((cat) => (
                  <div key={cat.category}>
                    <h3 className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4">{cat.category}</h3>
                    <div className="grid gap-3">
                      {cat.items.map((item) => (
                        <div key={item.id} className="flex justify-between items-center p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                          <div>
                            <p className="text-white font-medium text-lg tracking-tight">{item.name}</p>
                            <p className="text-gold font-bold mt-1">€{item.price.toFixed(2)}</p>
                          </div>
                          <button onClick={() => addToCart(item)} className="w-12 h-12 bg-gold/20 hover:bg-gold text-gold hover:text-black rounded-2xl border border-gold/40 flex items-center justify-center transition-all">
                            <Plus size={24} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-5 bg-white/10 rounded-2xl border border-white/10 shadow-2xl">
                      <div className="text-white">
                        <p className="font-medium text-lg">{item.name}</p>
                        <p className="text-gold font-bold">€{(item.price * item.qty).toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-5 bg-black/20 px-4 py-2 rounded-full border border-white/20">
                        <button onClick={() => updateQty(item.id, -1)} className="text-white/40 hover:text-gold"><Minus size={18} /></button>
                        <span className="text-white font-bold w-6 text-center text-xl">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="text-white/40 hover:text-gold"><Plus size={18} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer remains untouched */}
            <div className="relative z-10 p-8 bg-black/60 border-t border-white/10 backdrop-blur-xl">
              <div className="flex justify-between items-end mb-6 px-2">
                <span className="text-stone-300 text-[11px] font-bold uppercase tracking-[0.2em]">Total à Payer</span>
                <span className="text-4xl font-display text-gold italic drop-shadow-md">€{total.toFixed(2)}</span>
              </div>
              
              <div className="flex gap-4">
                {view === "checkout" && (
                  <Button variant="ghost" onClick={() => setView("menu")} className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl py-8 font-bold">
                    Back
                  </Button>
                )}
                <Button 
                  disabled={cart.length === 0 || isProcessing}
                  onClick={view === "menu" ? () => setView("checkout") : handleOrder}
                  className="flex-[2] bg-gold hover:bg-white text-black py-8 rounded-2xl text-xl font-extrabold transition-all shadow-xl shadow-gold/20"
                >
                  {isProcessing ? "Processing..." : view === "menu" ? `Review Order (${cart.length})` : "Confirm Order"}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderModal;