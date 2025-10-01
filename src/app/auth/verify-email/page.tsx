"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/UI/navbar/navbar";
import Footer from "@/components/UI/footer/footer";

export default function VerifyEmailPage() {
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleResend = () => {
    if (!canResend) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setCountdown(30);
      setCanResend(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Navbar />

      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          {/* Email Icon */}
          <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-lg mb-6">
            <span className="text-2xl text-white">✉️</span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Verify Your Email
          </h2>

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg">
                We&lsquo;ve sent a verification link to your email address.
              </p>

              <div className="bg-green-50 rounded-2xl p-4 border border-green-200">
                <p className="text-sm text-green-700">
                  📧 Please check your inbox and click the verification link to
                  activate your account.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-500 text-sm">
                  Didn&lsquo;t receive the email?
                </p>

                <button
                  onClick={handleResend}
                  disabled={!canResend || isLoading}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 px-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : canResend ? (
                    "Resend Verification Email"
                  ) : (
                    `Resend in ${countdown}s`
                  )}
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

          {/* Support Info */}
          <div className="bg-amber-50 rounded-3xl p-6 border border-amber-200">
            <div className="flex items-start gap-3">
              <span className="text-amber-500 text-lg">💬</span>
              <div>
                <h4 className="font-semibold text-amber-900 mb-1">
                  Need Help?
                </h4>
                <p className="text-amber-700 text-sm">
                  If you&lsquo;re having trouble verifying your email, contact
                  our support team at{" "}
                  <a
                    href="mailto:support@cleanpower.com"
                    className="font-semibold"
                  >
                    support@cleanpower.com
                  </a>
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
