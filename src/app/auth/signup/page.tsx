// app/auth/signup/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/UI/navbar/navbar";
import Footer from "@/components/UI/footer/footer";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    newsletter: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push("/auth/verify-email");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Navbar />

      {/* Main Content */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-lg mb-6">
              <span className="text-2xl text-white">🚀</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Join Our Community
            </h2>
            <p className="text-gray-600 text-lg">
              Create your account and start your sustainable energy journey
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
          >
            <div className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="john.doe@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="+254 712 345 678"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white pr-12"
                    placeholder="Create a strong password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Must be at least 8 characters with numbers and symbols
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white pr-12"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {showConfirmPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    required
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500 mt-1"
                  />
                  <label
                    htmlFor="agreeToTerms"
                    className="ml-3 block text-sm text-gray-700"
                  >
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500 mt-1"
                  />
                  <label
                    htmlFor="newsletter"
                    className="ml-3 block text-sm text-gray-700"
                  >
                    Send me updates about new solar solutions, promotions, and
                    energy tips
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 px-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Creating Account...
                  </>
                ) : (
                  <>
                    <span>🌱</span>
                    Create Account
                  </>
                )}
              </button>

              {/* Sign In Link */}
              <div className="text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link
                    href="/auth/signin"
                    className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-200"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </form>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-6 border border-green-200">
            <h3 className="font-semibold text-green-900 mb-4 text-center">
              Why Join Us?
            </h3>
            <div className="grid grid-cols-1 gap-3 text-sm">
              <div className="flex items-center gap-3 text-green-700">
                <span className="text-green-500">💰</span>
                Exclusive member discounts and offers
              </div>
              <div className="flex items-center gap-3 text-green-700">
                <span className="text-green-500">📊</span>
                Track your energy savings and environmental impact
              </div>
              <div className="flex items-center gap-3 text-green-700">
                <span className="text-green-500">⚡</span>
                Priority support for your solar systems
              </div>
              <div className="flex items-center gap-3 text-green-700">
                <span className="text-green-500">🌍</span>
                Join our community of eco-warriors
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
