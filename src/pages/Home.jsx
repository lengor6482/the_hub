import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import Impact from "../components/Impact";
import Journey from "../components/Journey";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-paper text-slate">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Journey />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;
