import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Visit Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Come Say Bonjour
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We'd love to welcome you to our bakery. Stop by for a fresh croissant
            and a warm cup of café au lait.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address */}
          <div className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-card transition-shadow">
            <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-gold" size={24} />
            </div>
            <h3 className="font-display text-xl text-foreground mb-3">Address</h3>
            <p className="text-muted-foreground leading-relaxed">
              127 Rue de la Boulangerie
              <br />
              Paris, 75004
              <br />
              France
            </p>
          </div>

          {/* Hours */}
          <div className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-card transition-shadow">
            <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="text-gold" size={24} />
            </div>
            <h3 className="font-display text-xl text-foreground mb-3">Hours</h3>
            <p className="text-muted-foreground leading-relaxed">
              Mon - Fri: 7AM - 7PM
              <br />
              Saturday: 7AM - 6PM
              <br />
              Sunday: 8AM - 2PM
            </p>
          </div>

          {/* Phone */}
          <div className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-card transition-shadow">
            <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="text-gold" size={24} />
            </div>
            <h3 className="font-display text-xl text-foreground mb-3">Phone</h3>
            <p className="text-muted-foreground leading-relaxed">
              +33 1 42 78 65 43
              <br />
              <span className="text-sm">
                For orders & inquiries
              </span>
            </p>
          </div>

          {/* Email */}
          <div className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-card transition-shadow">
            <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="text-gold" size={24} />
            </div>
            <h3 className="font-display text-xl text-foreground mb-3">Email</h3>
            <p className="text-muted-foreground leading-relaxed">
              bonjour@labellepatisserie.fr
              <br />
              <span className="text-sm">
                We reply within 24 hours
              </span>
            </p>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Contact;
