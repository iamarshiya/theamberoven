import { useCart } from "../contexts/CartContext";
import { Button } from "../components/ui/button";
import { ShoppingBag, X, Plus, Minus } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { items, total, itemCount, removeFromCart, updateQuantity, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Handle closing on click outside and Escape key
  useEffect(() => {
    const handleInteraction = (event) => {
      // Close if clicked outside
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleInteraction);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleInteraction);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleCheckout = () => {
    const user = localStorage.getItem("The Velvet Room_user");
    if (!user) {
      navigate("/auth", { state: { from: "/checkout" } });
    } else {
      // Just a placeholder for now
      alert(`Order total: $${total}. Payment integration coming soon!`);
      clearCart();
    }
    setIsOpen(false);
  };

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-foreground hover:text-primary transition-colors duration-300 focus:outline-none"
        aria-label="Shopping cart"
        aria-expanded={isOpen}
      >
        <ShoppingBag className="w-5 h-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs flex items-center justify-center rounded-full animate-in zoom-in">
            {itemCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 top-full mt-2 w-80 bg-card border border-border shadow-2xl z-[9999] animate-in fade-in slide-in-from-top-2 rounded-md overflow-hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="p-4 border-b border-border bg-card">
            <div className="flex justify-between items-center">
                <h3 className="font-serif text-lg text-card-foreground">Your Order</h3>
                <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-primary">
                    <X className="w-4 h-4" />
                </button>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground text-sm flex flex-col items-center gap-2">
              <ShoppingBag className="w-8 h-8 opacity-20" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/10 hover:scrollbar-thumb-primary/20">
                {items.map((item) => (
                  <div key={item.id} className="p-4 border-b border-border/50 flex gap-3 hover:bg-muted/50 transition-colors">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-sm" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm text-card-foreground truncate">{item.name}</h4>
                      <p className="text-primary text-sm font-medium">${item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 border border-border rounded-sm flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-6 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 border border-border rounded-sm flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="self-start text-muted-foreground hover:text-destructive transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-muted/20 border-t border-border">
                <div className="flex justify-between mb-4 items-end">
                  <span className="text-muted-foreground text-sm uppercase tracking-wider font-medium">Total</span>
                  <span className="font-serif text-2xl text-primary">${total}</span>
                </div>
                <Button className="w-full font-serif tracking-wide" size="lg" onClick={handleCheckout}>
                  Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartDropdown;