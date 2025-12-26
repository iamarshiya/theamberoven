import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Events from "../components/Events";
import PreOrder from "../components/PreOrder";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Menu />
      <Testimonials />
      <About />
      <section id="gallery">
        <Gallery />
      </section>
      <section id="events">
        <Events />
      </section>
     
        <PreOrder />
     
      <Contact /> 
      <Footer />
    </div>
  );
};

export default Index;
