import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import AnimatedButton from "./AnimatedButton";

const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px',
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-purple" />,
      title: "Email",
      value: "abdeljalilelouafi2@gmail.com",
      href: "mailto:abdeljalilelouafi2@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-purple" />,
      title: "Phone",
      value: "+212 767 660 769",
      href: "tel:+212767660769"
    },
    {
      icon: <MapPin className="h-5 w-5 text-purple" />,
      title: "Location",
      value: "Casablanca, Morocco",
      href: "https://maps.google.com/?q=Casablanca,Morocco"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        {/* Section Title */}
        <div 
          ref={titleRef}
          className={`transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
          {/* Contact Info */}
          <div 
            ref={infoRef}
            className={`md:col-span-5 lg:col-span-4 transition-all duration-700 delay-200 ${
              infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center shrink-0 mr-3">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-foreground/80 text-sm">{info.title}</h4>
                      <a 
                        href={info.href} 
                        className="text-foreground hover:text-purple transition-colors"
                        target={info.title === 'Location' ? '_blank' : undefined}
                        rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <h4 className="text-lg font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/AbdeljalilElouafi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-purple/10 hover:border-purple/50 transition-all"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12C2 16.419 4.865 20.166 8.84 21.489C9.34 21.579 9.52 21.269 9.52 21.009C9.52 20.769 9.51 20.009 9.51 19.159C7 19.639 6.35 18.599 6.15 18.009C6.037 17.699 5.55 16.839 5.125 16.599C4.775 16.409 4.275 15.929 5.115 15.919C5.9 15.909 6.46 16.699 6.65 17.019C7.55 18.559 8.977 18.049 9.55 17.789C9.64 17.149 9.91 16.709 10.2 16.449C7.975 16.189 5.65 15.349 5.65 11.599C5.65 10.519 6.05 9.629 6.67 8.929C6.57 8.679 6.21 7.749 6.77 6.319C6.77 6.319 7.61 6.059 9.52 7.409C10.32 7.189 11.17 7.079 12.02 7.079C12.87 7.079 13.72 7.189 14.52 7.409C16.43 6.049 17.27 6.319 17.27 6.319C17.83 7.749 17.47 8.679 17.37 8.929C17.99 9.629 18.39 10.509 18.39 11.599C18.39 15.359 16.06 16.189 13.83 16.449C14.2 16.769 14.52 17.399 14.52 18.369C14.52 19.759 14.51 20.669 14.51 21.009C14.51 21.269 14.69 21.589 15.19 21.489C17.172 20.817 18.857 19.522 20.007 17.824C21.158 16.126 21.709 14.122 21.58 12.099C21.452 10.076 20.649 8.15 19.293 6.628C17.938 5.107 16.1 4.058 14.07 3.641C12.04 3.224 9.92 3.463 8.053 4.324C6.187 5.186 4.679 6.627 3.766 8.424C2.853 10.221 2.58 12.267 2.989 14.239C3.398 16.212 4.467 18 6 19.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/abd-eljalil-elouafi-7412771b7/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-purple/10 hover:border-purple/50 transition-all"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a 
                  href="https://leetcode.com/elouafi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-purple/10 hover:border-purple/50 transition-all"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 7H9V9H15V7Z" fill="currentColor"/>
                    <path d="M16 11H8V13H16V11Z" fill="currentColor"/>
                    <path d="M13 15H11V17H13V15Z" fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6Z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`md:col-span-7 lg:col-span-8 transition-all duration-700 delay-400 ${
              formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border focus:border-purple focus:ring-1 focus:ring-purple/50 transition-all bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border focus:border-purple focus:ring-1 focus:ring-purple/50 transition-all bg-background"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:border-purple focus:ring-1 focus:ring-purple/50 transition-all bg-background"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:border-purple focus:ring-1 focus:ring-purple/50 transition-all bg-background"
                  />
                </div>
                
                <div>
                  <AnimatedButton
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-purple hover:bg-purple/90 text-white w-full sm:w-auto"
                    icon={<Send className="h-4 w-4" />}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </AnimatedButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
