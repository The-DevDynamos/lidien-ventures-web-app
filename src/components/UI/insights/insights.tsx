// app/insights/page.tsx
"use client";

import React, { useState } from "react";
import Navbar from "@/components/UI/navbar/navbar";
import Footer from "../footer/footer";
import Link from "next/link";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  category: string;
  client: string;
  location: string;
  duration: string;
  results: {
    energySavings: string;
    costReduction: string;
    co2Reduction: string;
    roi: string;
  };
  image: string;
  challenge: string;
  solution: string;
  technologies: string[];
  isFeatured?: boolean;
}

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(
    null
  );

  const caseStudies: CaseStudy[] = [
    {
      id: "1",
      title: "Commercial Solar Installation for Manufacturing Plant",
      description:
        "Complete solar power solution for a manufacturing facility in Nairobi Industrial Area",
      category: "solar",
      client: "Premium Manufacturers Ltd",
      location: "Nairobi Industrial Area",
      duration: "3 Months",
      results: {
        energySavings: "85%",
        costReduction: "KES 2.8M annually",
        co2Reduction: "120 tons annually",
        roi: "2.5 years",
      },
      image: "/images/solutions/solar_power_generation.jpg",
      challenge:
        "High electricity costs and unreliable grid power affecting production schedules",
      solution:
        "Installed 500kW solar system with battery backup for uninterrupted power supply",
      technologies: [
        "Solar Panels",
        "Lithium-ion Batteries",
        "Smart Inverters",
        "Energy Monitoring",
      ],
      isFeatured: true,
    },
    {
      id: "2",
      title: "LPG Conversion for Restaurant Chain",
      description:
        "Transitioned 15 restaurant locations from traditional fuels to clean LPG energy",
      category: "lpg",
      client: "Savanna Restaurants Group",
      location: "Multiple Locations",
      duration: "6 Weeks",
      results: {
        energySavings: "40%",
        costReduction: "KES 1.2M annually",
        co2Reduction: "45 tons annually",
        roi: "1.8 years",
      },
      image: "/images/products/lpg_gas.jpg",
      challenge:
        "High cooking gas costs and inconsistent supply across multiple locations",
      solution:
        "Centralized LPG distribution system with automated monitoring and delivery",
      technologies: [
        "LPG Tanks",
        "Automated Monitoring",
        "Safety Systems",
        "Mobile App",
      ],
      isFeatured: true,
    },
    {
      id: "3",
      title: "Biogas System for Dairy Farm",
      description:
        "Integrated biogas solution converting waste to energy for dairy operations",
      category: "biogas",
      client: "Green Pastures Dairy",
      location: "Kiambu County",
      duration: "2 Months",
      results: {
        energySavings: "100%",
        costReduction: "KES 800K annually",
        co2Reduction: "60 tons annually",
        roi: "3 years",
      },
      image: "/images/products/biogas_system.jpg",
      challenge:
        "Waste management issues and high electricity costs for milk processing",
      solution:
        "Biogas plant converting cow manure into cooking gas and electricity",
      technologies: [
        "Biogas Digester",
        "Gas Storage",
        "Power Generator",
        "Waste Management",
      ],
      isFeatured: false,
    },
    {
      id: "4",
      title: "Solar Borehole for Agricultural Irrigation",
      description:
        "Solar-powered water pumping system for large-scale farm irrigation",
      category: "solar",
      client: "Maisha Farms Cooperative",
      location: "Machakos County",
      duration: "4 Weeks",
      results: {
        energySavings: "100%",
        costReduction: "KES 1.5M annually",
        co2Reduction: "25 tons annually",
        roi: "2 years",
      },
      image: "/images/solutions/solar_water.jpg",
      challenge:
        "High diesel costs for water pumping and unreliable electricity for irrigation",
      solution: "Solar-powered borehole with automated irrigation system",
      technologies: [
        "Solar Pumps",
        "Automated Irrigation",
        "Water Storage",
        "Remote Monitoring",
      ],
      isFeatured: false,
    },

    {
      id: "6",
      title: "LPG Network for Urban Apartments",
      description:
        "Centralized LPG distribution for 200-unit apartment complex",
      category: "lpg",
      client: "Skyline Apartments",
      location: "Westlands, Nairobi",
      duration: "8 Weeks",
      results: {
        energySavings: "35%",
        costReduction: "KES 900K annually",
        co2Reduction: "30 tons annually",
        roi: "2.2 years",
      },
      image: "/images/products/lpg_gas.jpg",
      challenge:
        "Individual gas cylinder management issues and safety concerns in multi-story building",
      solution:
        "Centralized LPG system with individual metering and automated refill scheduling",
      technologies: [
        "Bulk LPG Storage",
        "Pipeline Network",
        "Smart Meters",
        "Safety Valves",
      ],
      isFeatured: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: caseStudies.length },
    {
      id: "solar",
      name: "Solar Energy",
      count: caseStudies.filter((cs) => cs.category === "solar").length,
    },
    {
      id: "lpg",
      name: "LPG Solutions",
      count: caseStudies.filter((cs) => cs.category === "lpg").length,
    },
    {
      id: "biogas",
      name: "Biogas Systems",
      count: caseStudies.filter((cs) => cs.category === "biogas").length,
    },
    {
      id: "hybrid",
      name: "Hybrid Systems",
      count: caseStudies.filter((cs) => cs.category === "hybrid").length,
    },
  ];

  const filteredCaseStudies =
    activeCategory === "all"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === activeCategory);

  const openCaseStudyModal = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
  };

  const closeCaseStudyModal = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-25 to-green-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white py-24  overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(142_76%_36%_/_0.15)] to-[hsl(35_84%_55%_/_0.1)]"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[hsl(48_96%_75%)] rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[hsl(142_76%_65%)] rounded-full opacity-15 animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
              <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">
                Success Stories & Insights
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Project <span className="text-green-300">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed font-light max-w-3xl mx-auto">
              Discover how we&apos;re transforming energy landscapes across
              Kenya with innovative sustainable solutions
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-green-500 text-white shadow-lg shadow-green-200"
                    : "bg-white text-green-700 hover:bg-green-50 border border-green-100"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                onClick={() => openCaseStudyModal(caseStudy)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        caseStudy.category === "solar"
                          ? "bg-orange-500 text-white"
                          : caseStudy.category === "lpg"
                          ? "bg-blue-500 text-white"
                          : caseStudy.category === "biogas"
                          ? "bg-amber-500 text-white"
                          : "bg-purple-500 text-white"
                      }`}
                    >
                      {caseStudy.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {caseStudy.isFeatured && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      ⭐ Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors duration-300">
                    {caseStudy.title}
                  </h3>
                  <p className="text-green-700 mb-4 line-clamp-2">
                    {caseStudy.description}
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center justify-between text-sm text-green-600 mb-4">
                    <span className="font-semibold">{caseStudy.client}</span>
                    <span>{caseStudy.location}</span>
                  </div>

                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 bg-green-25 rounded-lg">
                      <div className="text-green-600 font-bold text-sm">
                        Energy Savings
                      </div>
                      <div className="text-green-800 font-bold">
                        {caseStudy.results.energySavings}
                      </div>
                    </div>
                    <div className="text-center p-2 bg-green-25 rounded-lg">
                      <div className="text-green-600 font-bold text-sm">
                        Cost Reduction
                      </div>
                      <div className="text-green-800 font-bold text-sm">
                        {caseStudy.results.costReduction}
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2">
                    View Case Study
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">
                No projects found
              </h3>
              <p className="text-green-700">
                Try selecting a different category to see more projects.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm font-light">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-4xl font-bold mb-2">25MW+</div>
              <div className="text-sm font-light">Clean Energy Installed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-4xl font-bold mb-2">KES 150M+</div>
              <div className="text-sm font-light">Client Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm font-light">Tons CO₂ Reduced</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
            Ready to Start Your{" "}
            <span className="text-green-600">Success Story</span>?
          </h2>
          <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients who are saving money
            while protecting the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl flex items-center gap-3 text-lg group"
            >
              <span className="group-hover:scale-110 transition-transform duration-300">
                💬
              </span>
              Get Free Consultation
            </Link>
            <Link
              href="/solutions"
              className="bg-transparent border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-10 py-5 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl flex items-center gap-3 text-lg group"
            >
              <span className="group-hover:scale-110 transition-transform duration-300">
                🔍
              </span>
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeCaseStudyModal}
                className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-green-700 hover:text-green-900 z-10"
              >
                ×
              </button>

              {/* Image */}
              <div className="relative h-64">
                <img
                  src={selectedCaseStudy.image}
                  alt={selectedCaseStudy.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      selectedCaseStudy.category === "solar"
                        ? "bg-orange-500 text-white"
                        : selectedCaseStudy.category === "lpg"
                        ? "bg-blue-500 text-white"
                        : selectedCaseStudy.category === "biogas"
                        ? "bg-amber-500 text-white"
                        : "bg-purple-500 text-white"
                    }`}
                  >
                    {selectedCaseStudy.category.toUpperCase()}
                  </span>
                  {selectedCaseStudy.isFeatured && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      ⭐ Featured Project
                    </span>
                  )}
                </div>

                <h2 className="text-3xl font-bold text-green-900 mb-4">
                  {selectedCaseStudy.title}
                </h2>

                <p className="text-green-700 text-lg mb-6">
                  {selectedCaseStudy.description}
                </p>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-25 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-green-900 mb-4">
                      Project Overview
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-green-700">Client:</span>
                        <span className="font-semibold text-green-900">
                          {selectedCaseStudy.client}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-700">Location:</span>
                        <span className="font-semibold text-green-900">
                          {selectedCaseStudy.location}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-700">Duration:</span>
                        <span className="font-semibold text-green-900">
                          {selectedCaseStudy.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-25 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-green-900 mb-4">
                      Key Results
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-green-700">Energy Savings:</span>
                        <span className="font-semibold text-green-900">
                          {selectedCaseStudy.results.energySavings}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-700">Cost Reduction:</span>
                        <span className="font-semibold text-green-900">
                          {selectedCaseStudy.results.costReduction}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-700">CO₂ Reduction:</span>
                        <span className="font-semibold text-green-900">
                          {selectedCaseStudy.results.co2Reduction}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-700">ROI Period:</span>
                        <span className="font-semibold text-green-900">
                          {selectedCaseStudy.results.roi}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-25 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-red-900 mb-4">
                      The Challenge
                    </h4>
                    <p className="text-red-700">
                      {selectedCaseStudy.challenge}
                    </p>
                  </div>

                  <div className="bg-green-25 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-green-900 mb-4">
                      Our Solution
                    </h4>
                    <p className="text-green-700">
                      {selectedCaseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="bg-blue-25 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-blue-900 mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudy.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
