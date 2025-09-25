"use client";
import CategorySolutionsPage from "@/components/CategoriesPage";
import Footer from "@/components/UI/footer/footer";
import { useParams } from "next/navigation";
import React from "react";

export default function SolutionCategories() {
  const params = useParams<{ category: string }>();
  return (
    <div>
      <CategorySolutionsPage params={params} />
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
