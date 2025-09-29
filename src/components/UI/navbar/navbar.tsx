"use client";
import { useState, useRef, useEffect } from "react";
import {
  FiUser,
  FiShoppingCart,
  FiGlobe,
  FiChevronDown,
  FiMenu,
  FiX,
  FiSun,
} from "react-icons/fi";
import styles from "@/assets/styles/navbar.module.scss";
import Link from "next/link";
import Cart from "../cart_section/cart";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import NavSearch from "./nav_search";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const { items } = useSelector((state: RootState) => state.cart);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Handle click outside for search, solutions dropdown, and mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target as Node)
      ) {
        setIsSolutionsOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('button[aria-label="mobile menu"]')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu completely
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsSolutionsOpen(false);
  };

  const solutionsItems = [
    "LPG Distribution",
    "Solar Energy",
    "Biogas Solutions",
    "Solar Boreholes",
    "All Solutions",
  ];

  const navItems = ["Solutions", "Shop", "Insights", "About Us"];

  const solutionDropLinks: string[] = [
    "/solutions/category/lpg-distribution-solutions",
    "/solutions/category/solar-energy-solutions",
    "/solutions/category/biogas-solutions",
    "/solutions/category/solar-boreholes-solutions",
    "/solutions",
  ];

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Reset solutions dropdown when toggling mobile menu
    if (!isMobileMenuOpen) {
      setIsSolutionsOpen(false);
    }
  };

  const cartItemsCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Stable key generator for menu items
  const getStableKey = (item: string, index: number) => `${item}-${index}`;

  // Handle regular nav link click in mobile
  const handleNavLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <nav
      ref={navRef}
      className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 w-full z-50 shadow-sm"
    >
      {/* Top bar */}
      <div className="hidden lg:flex bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-2 text-sm text-green-700 justify-between items-center">
        {/* Left side - Search */}
        <div>
          <NavSearch closeMobileMenu={closeMobileMenu} />
        </div>

        {/* Right side - Account, Cart, Language */}
        <div className="flex items-center space-x-6">
          <Link
            href={`/my_account`}
            className="flex items-center cursor-pointer hover:text-green-600 transition-colors duration-200 group"
          >
            <FiUser className="mr-2 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">My Account</span>
          </Link>

          <div
            className="flex items-center cursor-pointer hover:text-green-600 transition-colors duration-200 group relative"
            onClick={toggleCart}
          >
            <div className="relative">
              <FiShoppingCart className="mr-2 group-hover:scale-110 transition-transform duration-200" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </div>
            <span className="font-medium">Cart</span>
          </div>

          <div className="flex items-center cursor-pointer hover:text-green-600 transition-colors duration-200 group">
            <FiGlobe className="mr-2 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">EN</span>
            <FiChevronDown className="ml-1 text-xs" />
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 group"
              onClick={closeMobileMenu}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-green-200 transition-all duration-300">
                  <FiSun className="text-white text-lg" />
                </div>
                <div className="absolute -inset-1 bg-green-200 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              <div className="flex flex-col">
                <span
                  className={`${styles.logo} md:text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent`}
                >
                  Lidien Ventures Ltd
                </span>
                <span className="text-xs text-green-500 font-medium -mt-1">
                  Sustainable Energy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) =>
                item === "Solutions" ? (
                  <div
                    key={getStableKey(item, index)}
                    className="relative py-2 group"
                    ref={solutionsRef}
                  >
                    <button
                      className="flex items-center text-green-800 hover:text-green-600 font-medium transition-colors duration-200 group"
                      onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                      aria-expanded={isSolutionsOpen}
                    >
                      {item}
                      <FiChevronDown
                        className={`ml-1 transition-transform duration-200 ${
                          isSolutionsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Hover indicator */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-300"></div>

                    {isSolutionsOpen && (
                      <div className="absolute left-0 mt-3 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl py-3 z-50 border border-green-100">
                        {solutionsItems.map((solution, index) => (
                          <Link
                            key={getStableKey(solution, index)}
                            href={solutionDropLinks[index]}
                            className="flex items-center px-4 py-3 text-green-700 hover:bg-green-25 hover:text-green-600 transition-all duration-200 group"
                            onClick={() => setIsSolutionsOpen(false)}
                          >
                            <div className="w-2 h-2 bg-green-300 rounded-full mr-3 transition-transform duration-200"></div>
                            {solution}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={getStableKey(item, index)}
                    href={`/${item.toLowerCase().replace(" ", "_")}`}
                    className="relative py-2 text-green-800 hover:text-green-600 font-medium transition-colors duration-200 group"
                  >
                    {item}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-300"></div>
                  </Link>
                )
              )}
            </div>
          </div>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Contact CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className={`${styles.contactButton} text-white py-3 px-6 font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 shadow-lg`}
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-5 lg:hidden">
              <div
                className="flex items-center cursor-pointer hover:text-green-600 transition-colors duration-200 group relative"
                onClick={toggleCart}
              >
                <div className="relative">
                  <FiShoppingCart className="mr-2 group-hover:scale-110 transition-transform duration-200" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {cartItemsCount}
                    </span>
                  )}
                </div>
                <span className="font-medium">Cart</span>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg bg-green-25 text-green-700 hover:bg-green-50 transition-colors duration-200"
                aria-label="mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden mt-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-green-100 overflow-hidden"
          >
            <div className="p-4 space-y-2">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <NavSearch closeMobileMenu={closeMobileMenu} />
              </div>

              {navItems.map((item, index) => (
                <Link
                  key={getStableKey(item, index)}
                  href={`/${item.toLowerCase().replace(" ", "_")}`}
                  className="block px-4 py-3 text-green-800 hover:bg-green-25 rounded-xl font-medium transition-colors duration-200"
                  onClick={handleNavLinkClick}
                >
                  {item}
                </Link>
              ))}

              {/* Mobile CTA */}
              <Link
                href="/contact"
                className={`${styles.contactButton} block text-center text-white py-3 px-4 font-semibold rounded-xl mt-4 hover:shadow-lg transition-all duration-300`}
                onClick={handleNavLinkClick}
              >
                Get a Quote
              </Link>

              {/* Mobile Account Links */}
              <div className="flex justify-between pt-4 border-t border-green-100">
                <Link
                  href="/my_account"
                  className="flex items-center text-green-700 text-sm"
                  onClick={handleNavLinkClick}
                >
                  <FiUser className="mr-2" />
                  Account
                </Link>
                <button
                  className="flex items-center text-green-700 text-sm"
                  onClick={() => {
                    toggleCart();
                    closeMobileMenu();
                  }}
                >
                  <FiShoppingCart className="mr-2" />
                  Cart {cartItemsCount > 0 && `(${cartItemsCount})`}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cart Component */}
      <Cart isOpen={isCartOpen} onClose={toggleCart} />
    </nav>
  );
};

export default Navbar;
