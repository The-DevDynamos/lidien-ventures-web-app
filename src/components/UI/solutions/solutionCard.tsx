// components/SolutionCard.tsx
"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/cart/cart";
import Link from "next/link";
import { type Solution } from "./types/types";

interface SolutionCardProps {
  solution: Solution;
  variant?: "grid" | "list" | "featured";
  onExpand?: (solutionId: string) => void;
  isExpanded?: boolean;
}

export default function SolutionCard({
  solution,
  variant = "grid",
  onExpand,
  isExpanded = false,
}: SolutionCardProps) {
  const dispatch = useDispatch();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      addItem({
        productId: solution.id,
        title: solution.title,
        price: solution.price,
        image: solution.image,
        category: solution.category,
      })
    );
  };

  const handleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onExpand?.(solution.id);
  };

  if (variant === "list") {
    return (
      <div
        className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 p-8 border border-green-50 hover:border-green-100 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Section */}
          <div className="lg:w-2/5">
            <div className="relative h-72 rounded-2xl overflow-hidden">
              <div className="relative h-full overflow-hidden rounded-2xl">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  } ${isHovered ? "scale-110" : "scale-100"}`}
                  onLoad={() => setImageLoaded(true)}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-green-25 to-emerald-25 animate-pulse"></div>
                )}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {solution.isFeatured && (
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg backdrop-blur-sm">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    Featured
                  </div>
                )}
                <div className="bg-white/90 backdrop-blur-md text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold border border-green-100 shadow-sm">
                  🌱 Eco-Friendly
                </div>
              </div>

              {/* Hover Indicator */}
              <div
                className={`absolute bottom-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                  isHovered
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-2"
                }`}
              >
                <span className="text-green-600 text-lg">→</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-3/5 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="inline-flex items-center gap-2 text-green-600 text-sm font-medium mb-3 bg-green-50 px-3 py-1 rounded-full">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  {solution.category}
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-4 leading-tight group-hover:text-green-600 transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-green-700 leading-relaxed text-lg font-light">
                  {isExpanded
                    ? solution.fullDescription
                    : solution.shortDescription}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-green-25 to-emerald-25 text-green-700 px-4 py-2.5 rounded-xl text-sm font-medium border border-green-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  {solution.specifications.capacity}
                </span>
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-green-25 to-emerald-25 text-green-700 px-4 py-2.5 rounded-xl text-sm font-medium border border-green-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  {solution.specifications.efficiency}
                </span>
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-green-25 to-emerald-25 text-green-700 px-4 py-2.5 rounded-xl text-sm font-medium border border-green-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  {solution.specifications.warranty}
                </span>
              </div>
            </div>

            {/* Price and Actions */}
            <div className="space-y-6 mt-6">
              {/* Price */}
              <div className="p-5 bg-gradient-to-r from-green-25 to-emerald-25 rounded-2xl border border-green-100 group-hover:border-green-200 transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-green-600 text-sm font-semibold mb-1 uppercase tracking-wide">
                      Investment
                    </div>
                    <div className="text-3xl font-bold text-green-800">
                      KES {solution.price.toLocaleString()}
                    </div>
                    <div className="text-green-500 text-sm font-light mt-1">
                      All-inclusive package
                    </div>
                  </div>
                  <div className="text-green-400 text-3xl transition-transform duration-300 group-hover:scale-110">
                    ☀️
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl active:scale-95 min-w-[160px] group/btn"
                >
                  <span className="transition-transform duration-300 group-hover/btn:scale-110">
                    📋
                  </span>
                  Add to Quote
                </button>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="flex items-center justify-center gap-3 bg-white border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl active:scale-95 min-w-[160px] group/btn"
                >
                  <span className="transition-transform duration-300 group-hover/btn:scale-110">
                    🔍
                  </span>
                  View Details
                </Link>
                <button
                  onClick={handleExpand}
                  className="flex items-center justify-center gap-2 text-green-600 hover:text-green-800 px-5 py-4 rounded-xl border-2 border-green-200 hover:border-green-300 transition-all duration-300 bg-white hover:bg-green-50 font-semibold min-w-[160px] group/btn"
                >
                  <span className="transition-transform duration-300 group-hover/btn:scale-110">
                    {isExpanded ? "↥" : "↧"}
                  </span>
                  {isExpanded ? "Show Less" : "Learn More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid variant (default)
  return (
    <Link href={`/solutions/${solution.slug}`}>
      <div
        className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group border border-green-50 h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <div className="relative h-full">
            <img
              src={solution.image}
              alt={solution.title}
              className={`w-full h-full object-cover transition-all duration-700 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              } ${isHovered ? "scale-110" : "scale-100"}`}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-green-25 to-emerald-25 animate-pulse"></div>
            )}
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {solution.isFeatured && (
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                Featured
              </div>
            )}
            <div className="bg-white/90 backdrop-blur-md text-green-700 px-2.5 py-1 rounded-full text-xs font-semibold border border-green-100 shadow-sm">
              🌱 Eco
            </div>
          </div>

          {/* Hover Indicator */}
          <div
            className={`absolute bottom-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-2"
            }`}
          >
            <span className="text-green-600">→</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col space-y-6">
          {/* Category */}
          <div className="inline-flex items-center gap-2 text-green-600 text-xs font-medium bg-green-50 px-2.5 py-1 rounded-full self-start">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
            {solution.category}
          </div>

          {/* Title and Description */}
          <div className="space-y-3 flex-1">
            <h3 className="text-xl font-bold text-green-900 line-clamp-2 leading-tight group-hover:text-green-600 transition-colors duration-300">
              {solution.title}
            </h3>
            <p className="text-green-700 leading-relaxed line-clamp-3 font-light text-sm">
              {solution.shortDescription}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 bg-green-25 text-green-700 px-3 py-1.5 rounded-lg text-xs font-medium border border-green-100">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
              {solution.specifications.capacity.split(" ")[0]}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-green-25 text-green-700 px-3 py-1.5 rounded-lg text-xs font-medium border border-green-100">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
              {solution.specifications.efficiency.split(" ")[0]}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-green-25 text-green-700 px-3 py-1.5 rounded-lg text-xs font-medium border border-green-100">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
              Warranty
            </span>
          </div>

          {/* Price Section */}
          <div className="p-4 bg-gradient-to-r from-green-25 to-emerald-25 rounded-xl border border-green-100 group-hover:border-green-200 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-green-600 text-xs font-semibold mb-1 uppercase tracking-wide">
                  Starting from
                </div>
                <div className="text-2xl font-bold text-green-800">
                  KES {solution.price.toLocaleString()}
                </div>
              </div>
              <div className="text-green-400 text-xl transition-transform duration-300 group-hover:scale-110">
                💡
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 group/btn"
            >
              <span className="transition-transform duration-300 group-hover/btn:scale-110">
                📋
              </span>
              Add to Quote
            </button>
            <button className="flex items-center justify-center gap-2 text-green-700 hover:text-green-800 px-4 py-3.5 rounded-xl font-semibold transition-all duration-300 active:scale-95 hover:bg-green-50 min-w-[80px] group/btn">
              <span className="transition-transform duration-300 group-hover/btn:scale-110">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
