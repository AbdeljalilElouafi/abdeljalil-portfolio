
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";

interface Language {
  name: string;
  proficiency: string;
  level: number;
}

const Languages = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({
    threshold: 0.1,
  });
  
  const [languages] = useState<Language[]>([
    { name: "Arabic", proficiency: "Native", level: 100 },
    { name: "French", proficiency: "B1", level: 60 },
    { name: "English", proficiency: "C1", level: 85 },
  ]);
  
  const [animatedLevels, setAnimatedLevels] = useState<Record<string, number>>({});
  
  useEffect(() => {
    if (contentVisible) {
      const timer = setTimeout(() => {
        const levels: Record<string, number> = {};
        languages.forEach(lang => {
          levels[lang.name] = lang.level;
        });
        setAnimatedLevels(levels);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setAnimatedLevels({});
    }
  }, [contentVisible, languages]);

  return (
    <section id="languages" className="py-20 bg-secondary/30">
      <div className="section-container">
        {/* Section Title */}
        <div 
          ref={titleRef}
          className={`transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-title">
            <span className="text-gradient">Languages</span>
          </h2>
        </div>

        {/* Languages Content */}
        <div 
          ref={contentRef}
          className={`max-w-3xl mx-auto mt-12 transition-all duration-700 delay-300 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center mb-12">
            <div className="w-16 h-16 rounded-full bg-purple/10 flex items-center justify-center">
              <Globe className="h-8 w-8 text-purple" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {languages.map((lang, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg p-6 shadow-sm border border-border card-hover"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-bold mb-2">{lang.name}</h3>
                <p className="text-foreground/70 mb-4">{lang.proficiency}</p>
                
                <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple to-blue-light transition-all duration-1000 ease-out"
                    style={{ width: `${animatedLevels[lang.name] || 0}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
