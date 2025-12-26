import { useState } from "react";
import { Button } from "../components/ui/button";
import { Calendar, Clock, ShoppingBag, Check } from "lucide-react";
import { toast } from "sonner";

const PreOrder = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Pre-order submitted!", {
      description: "We'll confirm your order shortly.",
    });
  };

  const benefits = [
    "Skip the morning queue",
    "Guaranteed fresh items",
    "Special occasion cakes",
    "Bulk orders welcome",
  ];

  return (
    <section id="preorder" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
              Reserve Your Treats
            </p>
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
              Pre-Order for
              <span className="italic text-gold-light"> Pickup</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Don't miss out on your favorites! Pre-order your pastries and breads
              for convenient pickup. Perfect for special occasions, office meetings,
              or simply ensuring you get that croissant before we sell out.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                    <Check size={14} className="text-gold" />
                  </div>
                  <span className="text-primary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 p-6 bg-primary-foreground/5 rounded-2xl border border-primary-foreground/10">
              <ShoppingBag className="text-gold" size={32} />
              <div>
                <p className="font-medium">Order by 6 PM</p>
                <p className="text-primary-foreground/70 text-sm">
                  For next-day pickup starting at 7 AM
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-background text-foreground rounded-3xl p-8 md:p-10 shadow-elevated">
            <h3 className="font-display text-2xl text-foreground mb-6">
              Start Your Order
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                  placeholder="jean@example.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    <Calendar size={14} className="inline mr-2" />
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    <Clock size={14} className="inline mr-2" />
                    Pickup Time
                  </label>
                  <select
                    required
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                  >
                    <option value="">Select time</option>
                    <option value="7:00">7:00 AM</option>
                    <option value="8:00">8:00 AM</option>
                    <option value="9:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Order Details
                </label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                  placeholder="e.g., 6 croissants, 2 baguettes, 1 tarte aux fruits..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Submit Pre-Order
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreOrder;
