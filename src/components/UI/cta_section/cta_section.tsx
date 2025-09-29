import Link from "next/link";
import { FiZap, FiArrowRight } from "react-icons/fi";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[hsl(142_76%_36%_/_0.9)] to-[hsl(35_84%_55%_/_0.8)] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-8 h-8 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex p-3 bg-white/10 rounded-full mb-6">
            <FiZap className="w-8 h-8 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Ready to power your future with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
              clean energy?
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of families and businesses already saving money and
            protecting the environment
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 h-14 rounded-lg text-lg px-8 py-4 bg-white text-green-700 hover:bg-white/90"
            >
              Get a Free Quote
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>

            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 font-medium border-2 bg-transparent transition-all duration-200 h-14 rounded-lg text-lg px-8 py-4 border-white text-white hover:bg-white/20"
            >
              Shop Now
            </Link>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-white">
            <div>
              <div className="text-xl md:text-4xl font-bold">50K+</div>
              <div className="text-white/80 text-sm">Tons CO₂ Saved</div>
            </div>

            <div>
              <div className="text-xl md:text-4xl font-bold">15K+</div>
              <div className="text-white/80 text-sm">Families Served</div>
            </div>

            <div>
              <div className="text-xl md:text-4xl font-bold">2M+</div>
              <div className="text-white/80 text-sm">Liters Water Pumped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
