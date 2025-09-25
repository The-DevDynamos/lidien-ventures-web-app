// app/solutions/page.tsx
"use client";

import React, { useState } from "react";
import SolutionCard from "./solutionCard";
import { solutionsData, getAllSolutions } from "@/data/solutionsData";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

export default function AllSolutionsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const allSolutions = getAllSolutions();

  // Get unique categories for filter
  const categories = ["all", ...new Set(allSolutions.map((s) => s.category))];

  // Filter solutions
  const filteredSolutions = allSolutions.filter((solution) => {
    const matchesCategory = filter === "all" || solution.category === filter;
    const matchesSearch =
      solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      solution.shortDescription
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleExpand = (solutionId: string) => {
    setExpandedCard(expandedCard === solutionId ? null : solutionId);
  };

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      {/* Hero Section */}
      <section className="relative  bg-gradient-to-br from-green-900 to-emerald-700 text-white py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(142_76%_36%_/_0.9)] to-[hsl(35_84%_55%_/_0.8)]"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-[hsl(48_96%_75%)] rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-10 right-10 w-16 h-16 bg-[hsl(142_76%_65%)] rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-white rounded-full opacity-20 animate-pulse delay-500"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Energy Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Innovative technologies for sustainable power and efficiency
            </p>
            <div className="flex justify-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 bg-green-700 bg-opacity-50 rounded-full text-sm">
                🌱 Eco-Friendly
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-green-700 bg-opacity-50 rounded-full text-sm">
                ⚡ High Efficiency
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-green-700 bg-opacity-50 rounded-full text-sm">
                💡 Smart Technology
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="bg-white shadow-sm py-8 border-b border-green-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search sustainable solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                />
                <div className="absolute left-4 top-3 text-green-500">🔍</div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* View Mode Toggle */}
              <div className="flex bg-green-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded transition-all duration-200 ${
                    viewMode === "grid"
                      ? "bg-white shadow-md text-green-700"
                      : "text-green-600 hover:text-green-700"
                  }`}
                >
                  ⬜ Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded transition-all duration-200 ${
                    viewMode === "list"
                      ? "bg-white shadow-md text-green-700"
                      : "text-green-600 hover:text-green-700"
                  }`}
                >
                  ☰ List
                </button>
              </div>

              {/* Category Filter */}
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <div className="mb-8 p-4 bg-green-50 rounded-lg border border-green-100">
            <p className="text-green-700">
              🌍 Showing {filteredSolutions.length} of {allSolutions.length}{" "}
              sustainable solutions
              {searchTerm && ` for "${searchTerm}"`}
              {filter !== "all" && ` in ${filter}`}
            </p>
          </div>

          {/* Solutions */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution) => (
                <SolutionCard
                  key={solution.id}
                  solution={solution}
                  variant="grid"
                />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredSolutions.map((solution) => (
                <SolutionCard
                  key={solution.id}
                  solution={solution}
                  variant="list"
                  onExpand={handleExpand}
                  isExpanded={expandedCard === solution.id}
                />
              ))}
            </div>
          )}

          {/* Empty State */}
          {filteredSolutions.length === 0 && (
            <div className="text-center py-16 bg-white rounded-xl border border-green-100 shadow-sm">
              <div className="text-green-400 text-6xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                No sustainable solutions found
              </h3>
              <p className="text-green-500 mb-4">
                Try adjusting your search or filter criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilter("all");
                }}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-4">
            Sustainable Solution Categories
          </h2>
          <p className="text-center text-green-600 mb-12 max-w-2xl mx-auto">
            Explore our comprehensive range of eco-friendly solar energy
            solutions designed for sustainable living
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionsData.map((category) => (
              <div
                key={category.id}
                className="text-center p-8 bg-white rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300 hover:border-green-200"
              >
                <div className="text-5xl mb-4 text-green-500">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">
                  {category.name}
                </h3>
                <p className="text-green-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                <a
                  href={`/solutions/category/${category.slug}`}
                  className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold"
                >
                  View {category.solutions.length} Solutions
                  <span className="ml-2">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      {/* Eco-Friendly Footer Note */}
      <div className="bg-green-900 text-green-100 py-6 text-center">
        <p className="text-sm">
          🌍 Every solution contributes to a sustainable future. Together,
          we&lsquo;re building a greener planet.
        </p>
      </div>
    </div>
  );
}
