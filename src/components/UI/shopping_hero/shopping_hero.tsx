"use client";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[300px] flex items-center justify-center overflow-hidden bottom-8 pt-24 pb-16 bg-gradient-to-br from-[hsl(142_76%_36%_/_0.9)] via-[hsla(142,62%,20%,1)] to-[#05903b]">
      <div className="relative z-10 container mx-auto px-4 text-center text-white ">
        <div className="max-w-4xl mx-auto ">
          <h1
            className={`text-xl md:text-3xl font-bold mb-6 leading-tight transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Shop products for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(48_96%_55%)] to-[hsl(35_84%_55%)]">
              Sustainable Solutions Quality
            </span>{" "}
            to meet your energy and water needs
          </h1>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-[hsl(48_96%_55%)] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-10 right-10 w-16 h-16 bg-[hsl(142_76%_36%)] rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-white rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;
