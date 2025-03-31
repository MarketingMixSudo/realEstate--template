"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.5 });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`hidden md:block fixed bottom-6 right-6 bg-black border border-primary-400 rounded-full shadow-lg transition-opacity cursor-pointer duration-300 group z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="border-2 border-transparent rounded-full w-full h-full p-2 group-hover:border-primary-400 duration-300">
        <ArrowUp className="size-8  text-primary-400" />
      </div>
    </button>
  );
};

export default ScrollToTop;