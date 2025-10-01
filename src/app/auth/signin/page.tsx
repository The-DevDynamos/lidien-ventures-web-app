"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/UI/navbar/navbar";
import Footer from "@/components/UI/footer/footer";

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push("/my-account");
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
              <span className="text-2xl text-white">🔐</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600 text-lg">
              Sign in to your account to continue
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
          >
            <div className="space-y-6">
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
                  placeholder="Enter your email"
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Password
                  </label>
                  <Link
                    href="/auth/forgot-password"
                    className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white pr-12"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-3 block text-sm text-gray-700"
                >
                  Remember me for 30 days
                </label>
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
                    Signing in...
                  </>
                ) : (
                  <>
                    <span>🔑</span>
                    Sign In
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-gray-600">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/auth/signup"
                    className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-200"
                  >
                    Sign up now
                  </Link>
                </p>
              </div>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span>🔒</span>
                Secure Login
              </div>
              <div className="flex items-center gap-2">
                <span>💚</span>
                Eco-Friendly
              </div>
              <div className="flex items-center gap-2">
                <span>⭐</span>
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
