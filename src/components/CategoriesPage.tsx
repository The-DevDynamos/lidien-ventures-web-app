// app/solutions/category/[category]/page.tsx
"use client";

import React from "react";
import { notFound } from "next/navigation";
import SolutionCard from "@/components/UI/solutions/solutionCard";
import { getCategoryBySlug } from "@/data/solutionsData";
import Navbar from "./UI/navbar/navbar";
import Link from "next/link";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategorySolutionsPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-emerald-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(142_76%_36%_/_0.9)] to-[hsl(35_84%_55%_/_0.8)]"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-[hsl(48_96%_75%)] rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-10 right-10 w-16 h-16 bg-[hsl(142_76%_65%)] rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-4">{category.icon}</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {category.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
            <span className="text-gray-400">›</span>
            <Link href="/solutions" className="hover:text-orange-500">
              All Solutions
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-orange-500 font-semibold">
              {category.name}
            </span>
          </div>
        </div>
      </nav>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {category.solutions.length} Solutions Available
            </h2>
            <p className="text-gray-600">
              Browse our {category.name.toLowerCase()} offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.solutions.map((solution) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                variant="grid"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
