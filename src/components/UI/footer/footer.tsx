import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-brown text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div
              className="text-2xl font-bold mb-4 bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(250, 206, 30), rgb(237, 156, 44))",
              }}
            >
              Lidienventures
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Powering Africa with clean, affordable, and sustainable energy
              solutions for homes, farms, and businesses.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/solutions/category/lpg-distribution-solutions"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  LPG Distribution
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/category/solar-power-solutions"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Solar Energy
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/category/biogas-solutions"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Biogas Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/category/solar-boreholes-solutions"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Solar Boreholes
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shop"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/about_us"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-white/80 mb-4">
              Get insights & offers delivered to your inbox
            </p>
            <div className="flex gap-2 mb-6">
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-solar"
                placeholder="Your email"
              />
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm text-white font-semibold shadow-energy hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 h-10 rounded-md px-4"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgb(250, 206, 30), rgb(237, 156, 44))",
                }}
              >
                Subscribe
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaPhone className="w-5 h-5 text-solar" />
                <span className="text-white/80">+254-724-796-406</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="w-5 h-5 text-solar" />
                <span className="text-white/80">info@lidienventures.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-solar" />
                <span className="text-white/80">
                  Afya Business Plaza, Nairobi, Kenya
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/80 text-sm">
              © 2025 Lidienventures. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
