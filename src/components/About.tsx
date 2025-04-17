
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, Code, Lightbulb } from "lucide-react";

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: iconBoxesRef, isVisible: iconBoxesVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        {/* Section Title */}
        <div 
          ref={titleRef}
          className={`transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          {/* Profile Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div 
              ref={contentRef}
              className={`relative max-w-sm transition-all duration-700 delay-200 ${
                contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl border-2 border-purple/20">
                <img 
                  src="/lovable-uploads/d1f5d086-caf6-42d8-8b44-499ad4f067b0.png" 
                  alt="Mohammed Elouafi" 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-lg border-2 border-purple opacity-50 z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-lg bg-gradient-to-br from-purple/20 to-blue-light/20 z-0"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-7">
            <div 
              ref={contentRef}
              className={`transition-all duration-700 delay-300 ${
                contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-6">
                Full Stack Developer & Student
              </h3>
              
              <p className="text-foreground/90 mb-6 leading-relaxed">
                I am a passionate Full-Stack Developer with a strong foundation in software development and a focus on the IT and technology industry. My expertise lies in both front-end and back-end development, and I'm driven by a continuous desire to enhance my skills in communication and technology. I believe that the power of effective communication is essential to building successful software solutions and fostering teamwork.
              </p>
              
              <p className="text-foreground/90 mb-6 leading-relaxed">
                A significant milestone in my career was completing the ALX Data Science Training, where I gained valuable insights into data science and its application in real-world problem-solving. Currently, I am further expanding my expertise through ongoing training at YouCode, powered by Simplon, to stay ahead in the ever-evolving world of technology.
              </p>
              
              <p className="text-foreground/90 mb-8 leading-relaxed">
                My career goal is to become a well-rounded and impactful software developer who contributes to projects that make a meaningful difference for the greater good. I am excited about opportunities to leverage my skills and knowledge to help drive innovation and solve complex challenges.
              </p>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="font-medium">Name:</p>
                  <p className="text-foreground/80">Mohammed Abd Eljalil Elouafi</p>
                </div>
                <div>
                  <p className="font-medium">Email:</p>
                  <p className="text-foreground/80">abdeljalilelouafi2@gmail.com</p>
                </div>
                <div>
                  <p className="font-medium">Location:</p>
                  <p className="text-foreground/80">Casablanca, Morocco</p>
                </div>
                <div>
                  <p className="font-medium">Phone:</p>
                  <p className="text-foreground/80">+212 767 660 769</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Icon Boxes */}
        <div 
          ref={iconBoxesRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 transition-all duration-700 delay-500 ${
            iconBoxesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border flex flex-col items-center text-center card-hover">
            <div className="w-14 h-14 rounded-full bg-purple/10 flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-purple" />
            </div>
            <h3 className="font-poppins font-semibold text-xl mb-3">Web Development</h3>
            <p className="text-foreground/70">Building responsive and interactive web applications with modern frameworks and best practices.</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border flex flex-col items-center text-center card-hover">
            <div className="w-14 h-14 rounded-full bg-purple/10 flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-purple" />
            </div>
            <h3 className="font-poppins font-semibold text-xl mb-3">Problem Solving</h3>
            <p className="text-foreground/70">Approaching complex problems with analytical thinking and creative solutions.</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border flex flex-col items-center text-center card-hover">
            <div className="w-14 h-14 rounded-full bg-purple/10 flex items-center justify-center mb-4">
              <Lightbulb className="h-6 w-6 text-purple" />
            </div>
            <h3 className="font-poppins font-semibold text-xl mb-3">Continuous Learning</h3>
            <p className="text-foreground/70">Constantly expanding my knowledge and skills to stay current with the latest technologies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
