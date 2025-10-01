"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/UI/navbar/navbar";
import Footer from "@/components/UI/footer/footer";

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);

      // Redirect to signin after 3 seconds
      setTimeout(() => {
        router.push("/auth/signin");
      }, 3000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <Navbar />

        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 text-center">
            {/* Success Icon */}
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-lg mb-6">
              <span className="text-2xl text-white">✅</span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Password Reset!
            </h2>

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="space-y-6">
                <p className="text-gray-600 text-lg">
                  Your password has been successfully reset.
                </p>

                <div className="bg-green-50 rounded-2xl p-4 border border-green-200">
                  <p className="text-sm text-green-700">
                    🔒 You can now sign in with your new password.
                  </p>
                </div>

                <div className="pt-4">
                  <p className="text-gray-500 text-sm mb-4">
                    Redirecting to sign in page...
                  </p>

                  <Link
                    href="/auth/signin"
                    className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Sign In Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Navbar />

      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-lg mb-6">
              <span className="text-2xl text-white">🔄</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              New Password
            </h2>
            <p className="text-gray-600 text-lg">
              Create a new secure password for your account
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
          >
            <div className="space-y-6">
              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  New Password
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
                    placeholder="Enter new password"
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
                  Confirm New Password
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
                    placeholder="Confirm new password"
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

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 px-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Resetting Password...
                  </>
                ) : (
                  <>
                    <span>🔒</span>
                    Reset Password
                  </>
                )}
              </button>

              <div className="text-center">
                <Link
                  href="/auth/signin"
                  className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-200"
                >
                  ← Back to Sign In
                </Link>
              </div>
            </div>
          </form>

          {/* Password Tips */}
          <div className="bg-blue-50 rounded-3xl p-6 border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <span>💡</span>
              Password Tips
            </h4>
            <ul className="text-sm text-blue-700 space-y-2">
              <li>• Use at least 8 characters</li>
              <li>• Include numbers and symbols</li>
              <li>• Avoid common words or phrases</li>
              <li>• Dont reuse old passwords</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
