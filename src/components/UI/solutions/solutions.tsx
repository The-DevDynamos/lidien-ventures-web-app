import { FiSun, FiDroplet, FiArrowRight } from "react-icons/fi";
import { LuFuel, LuLeafyGreen } from "react-icons/lu";

const SolutionsSection = () => {
  const solutions = [
    {
      id: 1,
      icon: <LuFuel className="w-8 h-8 text-orange-500" />,
      title: "LPG Distribution",
      description:
        "Safe refills, reliable delivery to your doorstep. Clean cooking for every family.",
      features: ["Safe delivery", "Affordable pricing", "24/7 availability"],
      buttonText: "Shop Now",
      bgColor: "bg-orange-50",
      buttonColor:
        "bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700",
    },
    {
      id: 2,
      icon: <FiSun className="w-8 h-8 text-yellow-500" />,
      title: "Solar Energy",
      description:
        "Home systems, boreholes & commercial setups. Harness the power of the sun.",
      features: [
        "Home installations",
        "Commercial systems",
        "Maintenance included",
      ],
      buttonText: "Request Quote",
      bgColor: "bg-yellow-50",
      buttonColor:
        "bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700",
    },
    {
      id: 3,
      icon: <LuLeafyGreen className="w-8 h-8 text-green-500" />,
      title: "Biogas Solutions",
      description:
        "Clean cooking from farm waste. Transform waste into clean energy.",
      features: ["Waste to energy", "Eco-friendly", "Cost effective"],
      buttonText: "Learn More",
      bgColor: "bg-green-50",
      buttonColor:
        "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700",
    },
    {
      id: 4,
      icon: <FiDroplet className="w-8 h-8 text-blue-500" />,
      title: "Solar Boreholes",
      description:
        "Sustainable water for communities. Solar-powered water solutions.",
      features: ["Community water", "Solar powered", "Sustainable access"],
      buttonText: "Explore Solutions",
      bgColor: "bg-blue-50",
      buttonColor:
        "bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Green Energy Supplies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive clean energy solutions for homes, farms, and
            businesses across Africa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className={`rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300 border-0 ${solution.bgColor}`}
            >
              <div className="text-center">
                <div className="inline-flex p-4 bg-white rounded-full shadow-sm mb-4">
                  {solution.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {solution.title}
                </h3>

                <p className="text-gray-600 mb-4">{solution.description}</p>

                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  {solution.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center gap-2"
                    >
                      <FiArrowRight className="w-3 h-3 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-white ${solution.buttonColor} shadow-sm h-10 px-4 py-2 w-full transition-all duration-200`}
                >
                  {solution.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
