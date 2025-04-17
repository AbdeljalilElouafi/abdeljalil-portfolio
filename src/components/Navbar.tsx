import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Code2 } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [{
    name: "Home",
    href: "#home"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Projects",
    href: "#projects"
  }, {
    name: "Skills",
    href: "#skills"
  }, {
    name: "Education",
    href: "#education"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  const socialLinks = [{
    name: "GitHub",
    href: "https://github.com/AbdeljalilElouafi",
    icon: <Github className="h-5 w-5" />
  }, {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abd-eljalil-elouafi-7412771b7/",
    icon: <Linkedin className="h-5 w-5" />
  }, {
    name: "LeetCode",
    href: "https://leetcode.com/u/AbdeljalilElouafi/",
    icon: <Code2 className="h-5 w-5" />
  }];

  // Control body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className={cn("fixed top-0 left-0 w-full z-50 transition-all duration-300", scrolled ? "bg-background/80 backdrop-blur-lg shadow-md py-2" : "bg-transparent py-4")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <span className="font-poppins font-bold text-gradient text-left text-xl">
              MAE<span className="text-purple">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>)}
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-3">
            {socialLinks.map(link => <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-purple transition-colors duration-300" aria-label={link.name}>
                {link.icon}
              </a>)}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="ml-2 p-2 rounded-md hover:bg-secondary transition-colors duration-200">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn("fixed inset-0 z-40 bg-background bg-opacity-95 backdrop-blur-lg md:hidden transition-all duration-300 ease-in-out", isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none")}>
        <div className="flex flex-col h-full justify-center items-center">
          <div className="flex flex-col space-y-6">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-2xl font-poppins font-medium hover:text-purple transition-colors duration-300" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>)}
          </div>

          <div className="mt-12 flex items-center space-x-6">
            {socialLinks.map(link => <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-purple transition-colors duration-300" aria-label={link.name}>
                {link.icon}
              </a>)}
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;