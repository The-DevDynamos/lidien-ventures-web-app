"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/UI/navbar/navbar";
import Footer from "@/components/UI/footer/footer";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <Navbar />

        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 text-center">
            {/* Success Icon */}
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-lg mb-6">
              <span className="text-2xl text-white">✉️</span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Check Your Email
            </h2>

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="space-y-6">
                <p className="text-gray-600 text-lg">
                  We&lsquo;ve sent a password reset link to{" "}
                  <strong>{email}</strong>
                </p>

                <div className="bg-green-50 rounded-2xl p-4 border border-green-200">
                  <p className="text-sm text-green-700">
                    💡 <strong>Tip:</strong> The link will expire in 1 hour for
                    security reasons.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-500 text-sm">
                    Didn&lsquo;t receive the email? Check your spam folder or
                  </p>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 px-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Try Another Email
                  </button>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/auth/signin"
                    className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-200"
                  >
                    ← Back to Sign In
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
              <span className="text-2xl text-white">🔑</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Reset Password
            </h2>
            <p className="text-gray-600 text-lg">
              Enter your email to receive a reset link
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Enter your email address"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 px-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending Reset Link...
                  </>
                ) : (
                  <>
                    <span>📧</span>
                    Send Reset Link
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

          {/* Security Note */}
          <div className="bg-amber-50 rounded-3xl p-6 border border-amber-200">
            <div className="flex items-start gap-3">
              <span className="text-amber-500 text-lg">🔒</span>
              <div>
                <h4 className="font-semibold text-amber-900 mb-1">
                  Security Notice
                </h4>
                <p className="text-amber-700 text-sm">
                  We&apos;ll only send password reset emails to verified
                  addresses. For security, reset links expire after 1 hour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
