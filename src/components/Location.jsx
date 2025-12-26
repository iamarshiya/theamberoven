import { MapPin, Navigation, Clock, Phone, Wifi, Car, CreditCard } from "lucide-react";
import { Button } from "../components/ui/button";

const hours = [
  { day: "Monday – Friday", time: "11:00 AM – 9:00 PM" },
  { day: "Saturday", time: "11:00 AM – 9:00 PM" },
  { day: "Sunday", time: "11:00 AM – 7:00 PM" },
];

const amenities = [
  { icon: Wifi, label: "Private WiFi" },
  { icon: Car, label: "Valet Available" },
  { icon: CreditCard, label: "All Cards Accepted" },
];

const Location = () => {
  // -----------------------------------------------------------------------
  // 🔴 1. LINK FOR THE BUTTON (The "Share" Link)
  // Instructions: Go to Google Maps -> Search Location -> Click Share -> Copy Link
  const MAP_BUTTON_LINK = "https://maps.app.goo.gl/87Z322BqisnEERAq9";

  // 🔴 2. LINK FOR THE IFRAME (The "Embed" Link)
  // Instructions: Go to Google Maps -> Click Share -> Click "Embed a map" tab -> Copy HTML
  // LOOK FOR: src="https://www.google.com/maps/embed?pb=..."
  // Paste ONLY that url inside the quotes below.
  const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841389556303!2d-73.99030610918999!3d40.75797455689624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sin!4v1765644514423!5m2!1sen!2sin";
  // -----------------------------------------------------------------------

  const handleGetDirections = () => {
    window.open(MAP_BUTTON_LINK, "_blank");
  };

  return (
    <section id="location" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-6 py-2 border border-primary/40 text-primary text-xs tracking-[0.3em] uppercase mb-6">
            Visit Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            An Invitation to <span className="italic text-primary">Indulge</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            Discover our flagship establishment in the distinguished Coffee District.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Map Section */}
          <div className="animate-fade-in space-y-8">
            <div className="aspect-square w-full overflow-hidden border border-border shadow-gold bg-zinc-900 group relative">
              {/* Uses the EMBED Link (Fixes "Refused to connect") */}
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="group-hover:filter-none transition-all duration-1000 opacity-80 group-hover:opacity-100"
                title="The Velvet Room
 location on map"
              />
            </div>

            {/* Uses the BUTTON Link (For Navigation) */}
            <Button 
              onClick={handleGetDirections}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-xs uppercase tracking-[0.2em] font-bold rounded-sm shadow-lg hover:shadow-primary/20 transition-all duration-500"
            >
              <Navigation className="w-4 h-4 mr-3" />
              Open in Google Maps
            </Button>
          </div>

          {/* Info Cards */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            
            <div className="bg-background border border-border p-8 hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center flex-shrink-0 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-3">Address</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                   123 Artisan Avenue<br />
                    Coffee District, NY 10036
                  </p>
                  <button 
                    onClick={handleGetDirections}
                    className="mt-3 text-xs tracking-[0.15em] uppercase text-primary hover:text-foreground border-b border-transparent hover:border-primary transition-all pb-1"
                  >
                    View Map →
                  </button>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-background border border-border p-8 hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center flex-shrink-0 text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-foreground mb-4">Hours of Operation</h3>
                  <div className="space-y-3">
                    {hours.map((item) => (
                      <div key={item.day} className="flex justify-between text-sm border-b border-border/40 pb-2 last:border-0 last:pb-0">
                        <span className="text-muted-foreground font-light">{item.day}</span>
                        <span className="text-foreground font-medium">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-background border border-border p-8 hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center flex-shrink-0 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-3">Contact & Reservations</h3>
                  <p className="text-muted-foreground font-light mb-1">(91) 555-BREW</p>
                  <p className="text-muted-foreground font-light">reservations@The Velvet Room
.cafe</p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="flex flex-wrap gap-4 pt-4">
              {amenities.map((amenity) => (
                <div
                  key={amenity.label}
                  className="flex items-center gap-2 px-5 py-3 border border-border text-muted-foreground text-[10px] tracking-[0.15em] uppercase hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                >
                  <amenity.icon className="w-3 h-3 text-primary" />
                  {amenity.label}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;