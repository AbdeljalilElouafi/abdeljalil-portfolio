
import { ArrowDown, Download } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedButton from "./AnimatedButton";

const Hero = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px',
  });
  
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px',
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            ref={titleRef} 
            className={`transition-all duration-700 ${
              titleVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-sm md:text-base font-medium text-purple uppercase tracking-wider mb-4 inline-block">
              Full Stack Developer
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6">
              Hi, I'm <span className="text-gradient">Mohammed</span> <br />
              <span className="text-gradient">Abd Eljalil</span> Elouafi
            </h1>
          </div>

          <div 
            ref={subtitleRef} 
            className={`transition-all duration-700 delay-300 ${
              subtitleVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Building innovative web applications with modern technologies. 
              Currently seeking an end-of-year internship to apply my skills.
            </p>
          </div>

          <div 
            ref={ctaRef}
            className={`flex flex-col md:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${
              ctaVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <AnimatedButton 
              href="#contact"
              icon={<ArrowDown className="h-4 w-4" />}
              className="bg-purple hover:bg-purple/90"
            >
              Contact Me
            </AnimatedButton>
            <a 
              href="/lovable-uploads/ac86d1d9-c814-4f65-90d2-f944917c1bc1.png" 
              download="Mohammed_Elouafi_CV.png"
            >
              <AnimatedButton 
                variant="outline"
                icon={<Download className="h-4 w-4" />}
                className="border-purple text-purple hover:text-white"
              >
                Download CV
              </AnimatedButton>
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex justify-center w-full">
            <a href="#about" className="flex flex-col items-center text-foreground/70 hover:text-purple transition-colors duration-300">
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
