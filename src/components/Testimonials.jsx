import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marie-Claire Dubois",
    role: "Regular Customer",
    rating: 5,
    text: "The croissants here transport me straight to Paris. Perfectly flaky, buttery, and made with such care. I drive 30 minutes just to get my weekend fix!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "James Wellington",
    role: "Food Blogger",
    rating: 5,
    text: "As someone who has visited countless bakeries across Europe, I can confidently say La Belle Pâtisserie rivals the best. Their macarons are absolute perfection.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Sophie Anderson",
    role: "Wedding Planner",
    rating: 5,
    text: "They created the most stunning wedding cake for my client. Not only was it a work of art, but every guest raved about the incredible taste. Truly exceptional!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Robert Chen",
    role: "Local Resident",
    rating: 5,
    text: "The pain au chocolat is dangerously good - I have to limit myself to one visit per week or I would be here every day. The staff is always so warm and welcoming.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-gradient-subtle" id="testimonials">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
            What Our Guests Say
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Loved by Our Community
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every pastry tells a story, and our customers share the sweetest ones.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-500 border border-border/50 relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-8 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-display text-lg text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-card px-8 py-4 rounded-full shadow-soft border border-border/50">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-foreground font-medium">4.9 out of 5</span>
            <span className="text-muted-foreground">based on 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
