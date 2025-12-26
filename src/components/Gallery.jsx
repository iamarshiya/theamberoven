import { useState } from "react";
import { X } from "lucide-react";

import interior1 from "../assets/gallery/interior-1.jpg";
import interior2 from "../assets/gallery/interior-2.jpg";
import baking1 from "../assets/gallery/baking-1.jpg";
import baking2 from "../assets/gallery/baking-2.jpg";
import pastry1 from "../assets/gallery/pastry-1.jpg";
import pastry2 from "../assets/gallery/pastry-2.jpg";

const categories = ["All", "Interior", "Baking Process", "Signature Pastries"];

const galleryImages = [
  { src: interior1, category: "Interior", title: "Our Cozy Corner" },
  { src: interior2, category: "Interior", title: "Display Counter" },
  { src: baking1, category: "Baking Process", title: "Artisan Bread Making" },
  { src: baking2, category: "Baking Process", title: "Fresh from the Oven" },
  { src: pastry1, category: "Signature Pastries", title: "Macaron Tower" },
  { src: pastry2, category: "Signature Pastries", title: "Fruit Tart" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="bg-background">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-warm">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-6 animate-fade-in">
            Our Story in Pictures
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Photo <span className="text-gold">Gallery</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Step inside La Belle Pâtisserie and discover the warmth, craftsmanship, 
            and artistry that goes into every creation.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gold text-white shadow-soft"
                    : "bg-muted text-foreground/70 hover:bg-gold/20 hover:text-gold"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-soft cursor-pointer aspect-[4/3]"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-gold text-sm font-medium">{image.category}</span>
                  <h3 className="text-white font-display text-xl mt-1">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <span className="text-gold text-sm font-medium">{selectedImage.category}</span>
              <h3 className="text-white font-display text-2xl mt-1">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;
