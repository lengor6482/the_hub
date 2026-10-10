import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import Impact from "../components/Impact";
import Journey from "../components/Journey";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

function Home() {
  return (
    <div className="min-h-screen bg-paper text-slate">
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Journey />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default Home;
