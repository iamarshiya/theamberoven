import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Calendar, Clock, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Reserve = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Reservation request submitted. We'll contact you shortly.");
    setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "2", notes: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-500 text-sm tracking-[0.15em] uppercase">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 border border-primary/40 text-primary text-xs tracking-[0.3em] uppercase mb-6">
              Reservations
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              Secure Your <span className="italic text-primary">Table</span>
            </h1>
            <p className="text-muted-foreground font-light">
              Reserve your place in our distinguished establishment
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8 bg-card border border-border p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-background border-border focus:border-primary"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-xs tracking-[0.15em] uppercase text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time" className="text-xs tracking-[0.15em] uppercase text-muted-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Time
                </Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-xs tracking-[0.15em] uppercase text-muted-foreground flex items-center gap-2">
                  <Users className="w-4 h-4" /> Guests
                </Label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full h-10 px-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none rounded-md"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Special Requests</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Any dietary requirements or special occasions..."
                className="bg-background border-border focus:border-primary min-h-[100px]"
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              Request Reservation
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reserve;