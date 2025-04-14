
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description?: string;
  icon: JSX.Element;
}

const Education = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  
  const educationData: EducationItem[] = [
    {
      period: "Oct 2023 - Present",
      degree: "Full Stack Development",
      institution: "YouCode",
      location: "Youssoufia",
      description: "Comprehensive training in full-stack web development technologies and methodologies.",
      icon: <BookOpen className="h-5 w-5 text-purple" />,
    },
    {
      period: "Oct 2023 - Present",
      degree: "Data Science",
      institution: "ALX",
      location: "Casablanca",
      description: "Specialized training in data analysis, visualization, and machine learning.",
      icon: <BookOpen className="h-5 w-5 text-purple" />,
    },
    {
      period: "Jul 2023",
      degree: "Bachelor's Degree in Life & Earth Sciences",
      institution: "FP Beni Mellal",
      location: "Beni Mellal",
      icon: <GraduationCap className="h-5 w-5 text-purple" />,
    },
    {
      period: "Jun 2019",
      degree: "High School Diploma in SVT",
      institution: "Beni Mellal",
      location: "Beni Mellal",
      icon: <GraduationCap className="h-5 w-5 text-purple" />,
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="section-container">
        {/* Section Title */}
        <div 
          ref={titleRef}
          className={`transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-title">
            My <span className="text-gradient">Education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Vertical Line */}
          <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-0.5 bg-border"></div>

          {educationData.map((item, index) => {
            const { ref, isVisible } = useScrollAnimation({
              threshold: 0.1,
              rootMargin: '0px',
            });
            
            return (
              <div
                key={index}
                ref={ref}
                className={`relative mb-12 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } transition-all duration-700 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'} ${
                  index % 2 === 0 ? 'lg:ml-auto lg:mr-1/2' : 'lg:mr-auto lg:ml-1/2'
                } lg:w-1/2`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute top-0 left-4 lg:left-auto lg:right-0 w-8 h-8 bg-card rounded-full border-4 border-purple flex items-center justify-center z-10">
                  {item.icon}
                </div>
                <div className={`ml-12 lg:ml-0 p-6 bg-card rounded-lg shadow-sm border border-border ${
                  index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'
                } card-hover`}>
                  <div className="flex items-center text-sm text-foreground/70 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{item.period}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-1">{item.degree}</h3>
                  <div className="flex items-center text-sm text-foreground/70 mb-3">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{item.institution}, {item.location}</span>
                  </div>
                  {item.description && <p className="text-foreground/80">{item.description}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
