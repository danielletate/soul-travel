import { useEffect } from "react";
import Contact from "./components/Contact";
import Destinations from "./components/Destinations";
import Facts from "./components/Facts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Statement from "./components/Statement";
import Testimonials from "./components/Testimonials";
import Travel from "./components/Travel";
import scrollreveal from "scrollreveal";

function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
       nav,
        #contact,
        #destinations,
        #hero,
        #services,
        #travel,
        #statement,
        #testimonials,
        #newsletter,
        #facts,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Statement />
      <Services />
      <Travel />
      <Destinations />
      <Facts />
      <Newsletter />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
