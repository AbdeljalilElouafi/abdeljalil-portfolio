
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";
import SplashCursor from "@/components/SplashCursor";
import { ArrowUp } from "lucide-react";

const Index = () => {
  // Scroll to top button logic
  useEffect(() => {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    const handleScroll = () => {
      if (scrollToTopBtn) {
        if (window.pageYOffset > 300) {
          scrollToTopBtn.classList.remove('opacity-0', 'invisible');
          scrollToTopBtn.classList.add('opacity-100', 'visible');
        } else {
          scrollToTopBtn.classList.remove('opacity-100', 'visible');
          scrollToTopBtn.classList.add('opacity-0', 'invisible');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <ParticleBackground />
      <SplashCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Languages />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-foreground/70">
            &copy; {new Date().getFullYear()} Mohammed Abd Eljalil Elouafi. All rights reserved.
          </p>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      <button
        id="scrollToTop"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-purple rounded-full flex items-center justify-center text-white shadow-lg opacity-0 invisible transition-all duration-300 hover:bg-purple-dark z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Index;
