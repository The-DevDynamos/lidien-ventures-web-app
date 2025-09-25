"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/cart/cart";
import Link from "next/link";
import { getSolutionBySlug, getRelatedSolutions } from "@/data/solutionsData";
import Navbar from "../navbar/navbar";

type SolutionPageProps = {
  params: { solution: string };
};

export default function SolutionPage({ params }: SolutionPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const dispatch = useDispatch();

  const solution = getSolutionBySlug(params.solution);

  if (!solution) {
    notFound();
  }

  const relatedSolutions = getRelatedSolutions(solution);
  const images = [solution.image, ...(solution.gallery || [])];
  const defaultGallery = [
    "/images/products/solar_installation.jpg",
    "/images/products/solar_maintenance.jpg",
    "/images/products/solar_warranty.jpg",
  ];
  const galleryImages =
    images.length > 1 ? images : [...images, ...defaultGallery.slice(0, 2)];

  const handleAddToCart = () => {
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

  const handleEnquireNow = () => {
    document
      .getElementById("enquiry-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="min-h-screen bg-green-50">
        {/* Breadcrumb */}
        <div className="bg-white shadow-sm">
          <Navbar />
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 to-emerald-800 text-white py-20  relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(142_76%_36%_/_0.9)] to-[hsl(35_84%_55%_/_0.8)]"></div>
          <div className="absolute bottom-10 left-10 w-20 h-20 bg-[hsl(48_96%_75%)] rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-10 right-10 w-16 h-16 bg-[hsl(142_76%_65%)] rounded-full opacity-40 animate-pulse delay-1000"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-green-200 mb-4">
                <Link
                  href="/solutions"
                  className="hover:text-white transition-colors"
                >
                  All Solutions
                </Link>
                <span>›</span>
                <span className="capitalize">{solution.category}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {solution.title}
              </h1>
              <p className="text-xl opacity-95 mb-6 leading-relaxed">
                {solution.shortDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center gap-2"
                >
                  <span>📋</span>
                  Add to Quote
                </button>
                <button
                  onClick={handleEnquireNow}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-green-900 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center gap-2"
                >
                  <span>💬</span>
                  Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={galleryImages[selectedImage]}
                  alt={solution.title}
                  className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 ${
                      selectedImage === index
                        ? "ring-3 ring-green-500 transform scale-105 shadow-lg"
                        : "hover:shadow-md hover:scale-102"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${solution.title} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Solution Overview
                </h2>
                <p className="text-gray-700 mb-6">{solution.fullDescription}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-semibold text-gray-700">
                      Capacity Range:
                    </span>
                    <span className="text-green-500 font-semibold">
                      {solution.specifications.capacity}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-semibold text-gray-700">
                      Efficiency:
                    </span>
                    <span className="text-green-500 font-semibold">
                      {solution.specifications.efficiency}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-semibold text-gray-700">
                      Warranty:
                    </span>
                    <span className="text-green-500 font-semibold">
                      {solution.specifications.warranty}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-semibold text-gray-700">
                      Installation Time:
                    </span>
                    <span className="text-green-500 font-semibold">
                      {solution.specifications.installation}
                    </span>
                  </div>
                  {solution.specifications.output && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-semibold text-gray-700">
                        Output:
                      </span>
                      <span className="text-green-500 font-semibold">
                        {solution.specifications.output}
                      </span>
                    </div>
                  )}
                  {solution.specifications.lifespan && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-semibold text-gray-700">
                        Lifespan:
                      </span>
                      <span className="text-green-500 font-semibold">
                        {solution.specifications.lifespan}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mb-6 p-4 bg-green-50 rounded-lg">
                  <div>
                    <span className="text-2xl font-bold text-green-500">
                      KES {solution.price.toLocaleString()}
                    </span>
                    <span className="text-gray-500 text-sm block">
                      Starting from
                    </span>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                  >
                    Add to Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Features and Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Features */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-2">
                <span>⭐</span>
                Key Features
              </h3>
              <ul className="space-y-4">
                {solution.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-green-700 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-2">
                <span>💚</span>
                Key Benefits
              </h3>
              <ul className="space-y-4">
                {(
                  solution.benefits || [
                    "Reduce electricity costs significantly",
                    "Environmentally friendly power source",
                    "Increase property value",
                    "Reliable energy independence",
                    "Low maintenance requirements",
                  ]
                ).map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-green-700 leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Applications */}
          {solution.applications && solution.applications.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
              <h3 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-2">
                <span>🏠</span>
                Ideal Applications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {solution.applications.map((application, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-green-50 p-4 rounded-xl"
                  >
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-green-700">{application}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Why Choose & Professional Installation */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                <span>🏆</span>
                Why Choose This Solution?
              </h3>
              <p className="text-green-700 leading-relaxed">
                Our {solution.title} is designed with cutting-edge technology to
                provide maximum efficiency and reliability. With professional
                installation and comprehensive after-sales support, you can
                trust us to deliver exceptional results for your energy needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                <span>🔧</span>
                Professional Installation
              </h3>
              <p className="text-green-700 leading-relaxed">
                Our certified technicians ensure proper installation and system
                optimization. We handle everything from site assessment to
                commissioning, ensuring your system performs at its best with
                minimal disruption.
              </p>
            </div>
          </div>

          {/* Related Solutions */}
          {relatedSolutions.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-green-900 mb-8 text-center">
                Related Solutions You Might Like
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedSolutions.map((relatedSolution) => (
                  <Link
                    key={relatedSolution.id}
                    href={`/solutions/${relatedSolution.slug}`}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 block group"
                  >
                    <h4 className="font-bold text-green-900 mb-3 group-hover:text-green-600 transition-colors duration-200 line-clamp-2">
                      {relatedSolution.title}
                    </h4>
                    <p className="text-green-600 text-sm mb-4 line-clamp-2">
                      {relatedSolution.shortDescription}
                    </p>
                    <div className="text-green-500 font-semibold text-sm flex items-center gap-1">
                      View Details <span>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-12 text-center bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6 opacity-95">
              Transform your energy consumption with our sustainable solutions!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleAddToCart}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center gap-2"
              >
                <span>📋</span>
                Get Quote
              </button>
              <button
                onClick={handleEnquireNow}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center gap-2"
              >
                <span>💬</span>
                Free Consultation
              </button>
            </div>
          </div>

          {/* Enquiry Form */}
          <div
            id="enquiry-form"
            className="mt-16 bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
              Request More Information
            </h2>
            <form className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-green-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-green-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-green-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="0715 130 130"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-green-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your location"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-green-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder={`I'm interested in the ${solution.title} and would like more information...`}
                  defaultValue={`I'm interested in ${solution.title} and would like more information.`}
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center gap-2 mx-auto"
                >
                  <span>📨</span>
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={handleAddToCart}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
        >
          <span className="text-lg">📋</span>
          <span className="font-semibold">Quote</span>
        </button>
      </div>
    </>
  );
}
