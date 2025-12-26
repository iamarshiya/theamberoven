import { useState } from "react";
import { Calendar, Clock, Users, MapPin, ChefHat, Wine, Cake } from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import EventRegistrationModal from "../components/EventRegistrationModal";

const events = [
  {
    id: 1,
    title: "Croissant Masterclass",
    category: "Baking Class",
    date: "January 15, 2025",
    time: "10:00 AM - 2:00 PM",
    spots: 8,
    spotsLeft: 3,
    price: "$95",
    description: "Learn the art of laminated dough and create perfect, flaky croissants from scratch with our head pastry chef.",
    icon: ChefHat,
  },
  {
    id: 2,
    title: "French Wine & Pastry Pairing",
    category: "Tasting Event",
    date: "January 22, 2025",
    time: "6:00 PM - 8:30 PM",
    spots: 20,
    spotsLeft: 7,
    price: "$75",
    description: "An elegant evening of carefully curated French wines paired with our signature pastries. Sommelier guided.",
    icon: Wine,
  },
  {
    id: 3,
    title: "Valentine's Day Macaron Workshop",
    category: "Special Occasion",
    date: "February 12, 2025",
    time: "2:00 PM - 5:00 PM",
    spots: 12,
    spotsLeft: 5,
    price: "$85",
    description: "Create beautiful heart-shaped macarons with romantic flavors perfect for gifting to your loved ones.",
    icon: Cake,
  },
  {
    id: 4,
    title: "Artisan Bread Baking",
    category: "Baking Class",
    date: "February 8, 2025",
    time: "9:00 AM - 1:00 PM",
    spots: 10,
    spotsLeft: 4,
    price: "$80",
    description: "Master the fundamentals of bread making - from baguettes to sourdough. Take home your fresh-baked creations.",
    icon: ChefHat,
  },
  {
    id: 5,
    title: "Spring Tea & Tart Afternoon",
    category: "Tasting Event",
    date: "March 15, 2025",
    time: "3:00 PM - 5:00 PM",
    spots: 16,
    spotsLeft: 10,
    price: "$55",
    description: "A delightful afternoon tea featuring seasonal fruit tarts, petit fours, and premium loose-leaf teas.",
    icon: Wine,
  },
  {
    id: 6,
    title: "Mother's Day Celebration Brunch",
    category: "Special Occasion",
    date: "May 11, 2025",
    time: "11:00 AM - 2:00 PM",
    spots: 30,
    spotsLeft: 18,
    price: "$65",
    description: "Treat mom to a luxurious brunch featuring our finest pastries, savory delights, and champagne.",
    icon: Cake,
  },
];

const categoryColors = {
  "Baking Class": "bg-primary/20 text-primary",
  "Tasting Event": "bg-accent/30 text-accent-foreground",
  "Special Occasion": "bg-secondary text-secondary-foreground",
};

const Events = () => {
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    event: null,
    isInquiry: false
  });

  const handleReserveClick = (event) => {
    setModalConfig({ isOpen: true, event: event, isInquiry: false });
  };

  const handleInquiryClick = () => {
    setModalConfig({ isOpen: true, event: null, isInquiry: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
            Join Our Community
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Events & Classes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in the art of French pastry. From hands-on baking classes 
            to elegant tasting events, discover new skills and flavors with us.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => {
              const IconComponent = event.icon;
              return (
                <div
                  key={event.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 group border border-border/50"
                >
                  <div className="p-6 bg-gradient-warm">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[event.category]}`}>
                        {event.category}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-background/80 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {event.description}
                    </p>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.spotsLeft} of {event.spots} spots left</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>The Amber Oven</span>
                    </div>
                  </div>

                  <div className="px-6 pb-6 flex items-center justify-between">
                    <span className="font-display text-2xl text-primary">{event.price}</span>
                    <Button onClick={() => handleReserveClick(event)}>
                      Reserve Spot
                    </Button>
                  </div>

                  <div className="h-1 bg-muted">
                    <div 
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${((event.spots - event.spotsLeft) / event.spots) * 100}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-warm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Host Your Private Event
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Looking to host a celebration or corporate event? Our bakery is available for private bookings.
          </p>
          <Button variant="hero" size="lg" onClick={handleInquiryClick}>
            Inquire About Private Events
          </Button>
        </div>
      </section>

      <EventRegistrationModal
        event={modalConfig.event}
        isOpen={modalConfig.isOpen}
        isInquiry={modalConfig.isInquiry}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
      />
      
    </div>
  );
};

export default Events;