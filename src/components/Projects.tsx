
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  image: string;
}

const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  
  const [projects] = useState<Project[]>([
    {
      title: "YouCamp – Booking Platform",
      description: "Booking platform for rural camping spots in Morocco with advanced search capabilities. Built with Laravel backend and vanilla JS frontend, designed with TailwindCSS.",
      tags: ["Laravel", "JavaScript", "TailwindCSS", "MySQL"],
      github: "https://github.com/elouafi/youcamp",
      image: "photo-1518770660439-4636190af475",
    },
    {
      title: "Eventbrite Clone – Event Management",
      description: "Users can create, manage, and track events. Built collaboratively with Git, using PHP OOP, JS, and Tailwind CSS.",
      tags: ["PHP", "OOP", "JavaScript", "TailwindCSS", "Git"],
      github: "https://github.com/elouafi/eventbrite-clone",
      image: "photo-1487058792275-0ad4aaf24ca7",
    }
  ]);

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        {/* Section Title */}
        <div 
          ref={titleRef}
          className={`transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-title">
            My <span className="text-gradient">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => {
            const { ref, isVisible } = useScrollAnimation({
              threshold: 0.1,
              rootMargin: '0px',
            });

            return (
              <div
                key={index}
                ref={ref}
                className={`bg-card rounded-lg overflow-hidden shadow-md border border-border transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${index % 2 === 0 ? 'delay-200' : 'delay-400'}`}
              >
                {/* Project Image */}
                <div className="relative group h-56 overflow-hidden">
                  <img
                    src={`https://source.unsplash.com/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 opacity-100 md:opacity-0 transition-opacity duration-300 md:group-hover:opacity-100">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 hidden md:block">{project.title}</h3>
                  <p className="text-foreground/80 mb-4">{project.description}</p>

                  {/* Project Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full bg-purple/10 text-purple"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex justify-start gap-3 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-foreground/70 hover:text-purple transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-foreground/70 hover:text-purple transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
