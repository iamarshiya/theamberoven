import { MapPin, Navigation } from "lucide-react";
import { Button } from "./ui/button";

const LocationSection = () => {
  // Mock Coordinates for the Cafe (e.g., Times Square, NY)
  const cafeLocation = { lat: 40.758896, lng: -73.985130 };

  const handleGetDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Open Google Maps Directions from User -> Cafe
          window.open(
            `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${cafeLocation.lat},${cafeLocation.lng}`,
            "_blank"
          );
        },
        (error) => {
          console.error("Error getting location:", error);
          // Fallback: Just open the map to the cafe if GPS fails
          window.open(
            `https://www.google.com/maps/search/?api=1&query=${cafeLocation.lat},${cafeLocation.lng}`,
            "_blank"
          );
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <section id="location" className="py-24 bg-[#0c0c0c] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center bg-primary/5 text-primary">
            <MapPin className="w-8 h-8" />
          </div>
          <div>
            <span className="text-primary text-xs tracking-[0.3em] uppercase block mb-3">Visit Us</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Our Flagship Store</h2>
            <p className="text-muted-foreground font-light text-lg">123 Artisan Avenue, Coffee District, NY</p>
          </div>
        </div>

        {/* Map Container */}
        <div className="w-full max-w-5xl mx-auto h-[450px] bg-zinc-900/50 rounded-sm overflow-hidden border border-white/10 mb-10 relative group shadow-2xl">
          {/* Grayscale Map Filter */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215707164965!2d-73.98784412342263!3d40.75797463483602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1701768822091!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="group-hover:filter-none transition-all duration-1000 opacity-80 group-hover:opacity-100"
          ></iframe>
        </div>

        <Button 
          onClick={handleGetDirections}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-xs uppercase tracking-[0.2em] font-bold rounded-sm shadow-lg hover:shadow-primary/20 transition-all duration-500"
        >
          <Navigation className="w-4 h-4 mr-3" />
          Get Directions
        </Button>
      </div>
    </section>
  );
};

export default LocationSection;