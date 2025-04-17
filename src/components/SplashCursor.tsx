
import { useEffect } from "react";

const SplashCursor = () => {
  useEffect(() => {
    const createSplashElement = () => {
      const splash = document.createElement("div");
      splash.className = "fixed pointer-events-none z-[9999] flex items-center justify-center";
      document.body.appendChild(splash);
      return splash;
    };

    const animateSplash = (splash: HTMLDivElement, x: number, y: number) => {
      const circle = document.createElement("div");
      const size = Math.floor(Math.random() * 100) + 50;
      
      circle.className = "absolute rounded-full bg-purple/20 animate-ping";
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.left = `${x - size / 2}px`;
      circle.style.top = `${y - size / 2}px`;
      
      splash.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, 800);
    };

    const splash = createSplashElement();

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.92) {
        animateSplash(splash, e.clientX, e.clientY);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      splash.remove();
    };
  }, []);

  return null;
};

export default SplashCursor;
