
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code, Database, Server, Bot, PaintBucket } from "lucide-react";
import { useState, useEffect } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  icon: JSX.Element;
  skills: Skill[];
}

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: categoriesRef, isVisible: categoriesVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  const [categories] = useState<SkillCategory[]>([
    {
      name: "Languages",
      icon: <Code className="h-6 w-6 text-purple" />,
      skills: [
        { name: "PHP (OOP)", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Python", level: 70 },
      ],
    },
    {
      name: "Frameworks",
      icon: <PaintBucket className="h-6 w-6 text-purple" />,
      skills: [
        { name: "Laravel", level: 85 },
        { name: "TailwindCSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Next.js", level: 75 },
        { name: "Node.js", level: 70 },
      ],
    },
    {
      name: "Databases",
      icon: <Database className="h-6 w-6 text-purple" />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 75 },
      ],
    },
    {
      name: "Tools & Others",
      icon: <Server className="h-6 w-6 text-purple" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Jira", level: 75 },
        { name: "Power BI", level: 65 },
        { name: "UML", level: 80 },
      ],
    },
  ]);

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="section-container">
        {/* Section Title */}
        <div 
          ref={titleRef}
          className={`transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
        </div>

        {/* Skills Categories */}
        <div 
          ref={categoriesRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 transition-all duration-700 delay-300 ${
            categoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {categories.map((category, index) => (
            <SkillCategory 
              key={index} 
              category={category} 
              delay={index * 100} 
              isVisible={categoriesVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  category: SkillCategory;
  delay: number;
  isVisible: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, delay, isVisible }) => {
  const [animatedLevel, setAnimatedLevel] = useState<Record<string, number>>({});
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const levels: Record<string, number> = {};
        category.skills.forEach(skill => {
          levels[skill.name] = skill.level;
        });
        setAnimatedLevel(levels);
      }, delay);
      
      return () => clearTimeout(timer);
    } else {
      setAnimatedLevel({});
    }
  }, [isVisible, category.skills, delay]);

  return (
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center mr-4">
          {category.icon}
        </div>
        <h3 className="text-xl font-semibold">{category.name}</h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between text-sm font-medium">
              <span>{skill.name}</span>
              <span className="text-purple">{animatedLevel[skill.name] || 0}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress transition-all duration-1000 ease-out"
                style={{ width: `${animatedLevel[skill.name] || 0}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
