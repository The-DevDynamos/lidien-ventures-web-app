"use client";

import { useState } from "react";
import { FiZap, FiChevronDown } from "react-icons/fi";
import { CiCalculator1 } from "react-icons/ci";
import { GiTreeDoor } from "react-icons/gi";

const EnergySavingsCalculator = () => {
  const [energySolution, setEnergySolution] = useState("Solar Energy");
  const [householdSize, setHouseholdSize] = useState("Medium (4-6 people)");
  const [showSolutionDropdown, setShowSolutionDropdown] = useState(false);
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);
  const [calculated, setCalculated] = useState(false);

  // Savings data in Kenyan Shillings (KES)
  const savingsData: any = {
    "Solar Energy": {
      "Small (1-3 people)": { monthly: 2500, co2: 35 },
      "Medium (4-6 people)": { monthly: 5500, co2: 75 },
      "Large (7+ people)": { monthly: 9500, co2: 130 },
    },
    "LPG Distribution": {
      "Small (1-3 people)": { monthly: 1800, co2: 25 },
      "Medium (4-6 people)": { monthly: 3800, co2: 55 },
      "Large (7+ people)": { monthly: 6500, co2: 90 },
    },
    "Biogas Solutions": {
      "Small (1-3 people)": { monthly: 2200, co2: 40 },
      "Medium (4-6 people)": { monthly: 4500, co2: 80 },
      "Large (7+ people)": { monthly: 7500, co2: 140 },
    },
    "Solar Boreholes": {
      "Small (1-3 people)": { monthly: 1500, co2: 20 },
      "Medium (4-6 people)": { monthly: 3200, co2: 45 },
      "Large (7+ people)": { monthly: 5500, co2: 75 },
    },
  };

  const energySolutions = [
    "Solar Energy",
    "LPG Distribution",
    "Biogas Solutions",
    "Solar Boreholes",
  ];

  const householdSizes = [
    "Small (1-3 people)",
    "Medium (4-6 people)",
    "Large (7+ people)",
  ];

  const calculateSavings = () => {
    setCalculated(true);
  };

  const monthlySavings: number =
    savingsData[energySolution]?.[householdSize]?.monthly || 0;
  const co2Reduction: number =
    savingsData[energySolution]?.[householdSize]?.co2 || 0;

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Calculate Your Energy Savings
            </h2>
            <p className="text-lg text-gray-600">
              Discover how much you can save by switching to clean energy
              solutions
            </p>
          </div>

          <div className="rounded-lg border bg-white text-gray-800 shadow-md p-8 lg:shadow-lg">
            <div className="grid md:grid-cols-3 gap-6 items-end">
              {/* Energy Solution Dropdown */}
              <div className="relative">
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Energy Solution
                </label>
                <button
                  type="button"
                  className="flex h-12 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  onClick={() => setShowSolutionDropdown(!showSolutionDropdown)}
                >
                  <span>{energySolution}</span>
                  <FiChevronDown className="h-4 w-4 opacity-50" />
                </button>

                {showSolutionDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-lg border border-gray-200 rounded-md">
                    {energySolutions.map((solution) => (
                      <div
                        key={solution}
                        className="px-4 py-2 hover:bg-green-50 cursor-pointer"
                        onClick={() => {
                          setEnergySolution(solution);
                          setShowSolutionDropdown(false);
                        }}
                      >
                        {solution}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Household Size Dropdown */}
              <div className="relative">
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Household Size
                </label>
                <button
                  type="button"
                  className="flex h-12 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  onClick={() => setShowSizeDropdown(!showSizeDropdown)}
                >
                  <span>{householdSize}</span>
                  <FiChevronDown className="h-4 w-4 opacity-50" />
                </button>

                {showSizeDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-lg border border-gray-200 rounded-md">
                    {householdSizes.map((size) => (
                      <div
                        key={size}
                        className="px-4 py-2 hover:bg-green-50 cursor-pointer"
                        onClick={() => {
                          setHouseholdSize(size);
                          setShowSizeDropdown(false);
                        }}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Calculate Button */}
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold h-12 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 gap-2"
                onClick={calculateSavings}
              >
                <CiCalculator1 className="w-4 h-4" />
                Calculate
              </button>
            </div>

            {/* Results Section */}
            {calculated && (
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg border border-green-200">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-4 text-emerald-800">
                    Your Potential Savings
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Monthly Savings */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="p-3 bg-yellow-100 rounded-full">
                        <FiZap className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">
                          KES {monthlySavings.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">
                          saved per month
                        </div>
                      </div>
                    </div>

                    {/* CO2 Reduction */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <GiTreeDoor className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">
                          {co2Reduction} kg
                        </div>
                        <div className="text-sm text-gray-600">
                          CO₂ reduced per year
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium mt-6 bg-emerald-600 text-white hover:bg-emerald-700 shadow-md h-10 px-4 py-2 transition-colors">
                    Explore My Options
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergySavingsCalculator;
