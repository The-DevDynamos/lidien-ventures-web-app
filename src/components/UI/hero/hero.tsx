"use client";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/heroImages/hero.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(142_76%_36%_/_0.9)] to-[hsl(35_84%_55%_/_0.8)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white mt-16">
        <div className="max-w-4xl mx-auto">
          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 leading-tight transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Clean Energy.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(48_96%_55%)] to-[hsl(35_84%_55%)]">
              Trusted Supplies.
            </span>{" "}
            Smarter Future.
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
            From LPG and solar to biogas and boreholes — we power homes, farms,
            and businesses with affordable, safe, and sustainable energy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-gradient-to-r text-white-200 from-[hsl(48_96%_55%)] to-[hsl(35_84%_55%)] font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 h-14 rounded-lg text-lg px-8 py-4">
              Shop Supplies
            </button>

            <button className="border-2 border-white bg-transparent text-white font-medium transition-all duration-200 h-14 rounded-lg text-lg px-8 py-4 hover:bg-white hover:text-gray-900">
              Request a Quote
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 text-white">
            <div className="text-center  backdrop-blur-sm">
              <div className="text-lg lg:text-3xl font-bold">1,000+</div>
              <div className="text-sm font-medium mt-2">Happy Customers</div>
            </div>

            <div className="text-center  backdrop-blur-sm">
              <div className="text-lg lg:text-3xl font-bold">24/7</div>
              <div className="text-sm font-medium mt-2">Support</div>
            </div>

            <div className="text-center  backdrop-blur-sm">
              <div className="text-lg lg:text-3xl font-bold">100%</div>
              <div className="text-sm font-medium mt-2">Safety Guaranteed</div>
            </div>
          </div>
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
