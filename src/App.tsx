import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import TrustedBy from "@/src/components/TrustedBy";
import FocusAreas from "@/src/components/FocusAreas";
import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import AboutPage from "@/src/pages/AboutPage";
import ServicesPage from "@/src/pages/ServicesPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}

function HomePage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        setTimeout(() => {
          const delayed = document.getElementById(id);
          if (delayed) delayed.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-accent/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <FocusAreas />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
