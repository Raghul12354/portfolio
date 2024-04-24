import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import About from "./about/About";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* stack */}
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
