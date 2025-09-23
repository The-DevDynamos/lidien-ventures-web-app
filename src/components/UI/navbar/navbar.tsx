"use client";
import { useState, useRef, useEffect } from "react";
import {
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiGlobe,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";
import styles from "@/assets/styles/navbar.module.scss";
import Link from "next/link";
import Cart from "../cart_section/cart";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const { items } = useSelector((state: RootState) => state.cart);

  const searchRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

  // Handle click outside for search and solutions dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target as Node)
      ) {
        setIsSolutionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Mock search function
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      // Mock search results
      setSearchResults([
        `Solar panel installation guide`,
        `Biogas system components`,
        `LPG distribution partners`,
        `Solar borehole maintenance`,
      ]);
    } else {
      setSearchResults([]);
    }
  };

  // Handle search result click
  const handleSearchResultClick = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const solutionsItems = [
    "LPG Distribution",
    "Solar Energy",
    "Biogas Solutions",
    "Solar Boreholes",
  ];

  const navItems = [
    "Solutions",
    "Shop",
    "Insights",
    "Conversations",
    "About Us",
  ];

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="bg-white shadow-md p-3 fixed top-0 w-screen z-100">
      {/* Top bar */}
      <div className="bg-white border-b-1 border-b-gray-200 text-green-800 py-2  flex justify-between items-center">
        {/* Left side - Search */}
        <div className="flex items-center">
          <div className="relative" ref={searchRef}>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FiSearch className="mr-1" />
              <span>Search</span>
            </div>

            {isSearchOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 border border-green-200">
                <div className="p-3 border-b">
                  <input
                    type="text"
                    placeholder="Search products, services..."
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    autoFocus
                  />
                </div>
                {searchResults.length > 0 && (
                  <div className="max-h-60 overflow-y-auto">
                    {searchResults.map((result, index) => (
                      <div
                        key={index}
                        className="p-3 hover:bg-green-50 cursor-pointer border-b"
                        onClick={handleSearchResultClick}
                      >
                        {result}
                      </div>
                    ))}
                  </div>
                )}
                {searchQuery.length > 0 && searchResults.length === 0 && (
                  <div className="p-3 text-gray-500">
                    No results found for &rdquo;{searchQuery}&rdquo;
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right side - Account, Cart, Language */}
        <div className="flex items-center space-x-4 px-4">
          <div className="flex items-center cursor-pointer hover:text-green-600">
            <FiUser className="mr-1" />
            <span>My Account</span>
          </div>

          <div
            className="flex items-center cursor-pointer hover:text-green-600"
            onClick={toggleCart}
          >
            {items.length > 0 && (
              <div className="bg-green-600 absolute w-[10px] h-[10px] rounded-full ml-12 mb-4 animate-pulse"></div>
            )}
            <FiShoppingCart className="mr-1" />
            <span>Cart</span>
          </div>

          <div className="hidden md:flex items-center cursor-pointer hover:text-green-600">
            <FiGlobe className="mr-1" />
            <span>Language</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="mx-auto py-2">
        <div className="flex justify-between items-center space-x-8">
          {/* Business Name and Navigation Items */}
          <div className="flex items-center">
            {/* Business Name */}
            <div className="text-2xl font-bold text-green-700 mr-4">
              <Link href="/" className={`${styles.logo}`}>
                Lidienventures
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden  h-full md:flex px-4 items-center space-x-8">
              {navItems.map((item, index) =>
                item === "Solutions" ? (
                  <div
                    key={index}
                    className="relative py-3 px-4 group"
                    ref={solutionsRef}
                  >
                    <button
                      className="flex items-center text-gray-700 hover:text-green-600"
                      onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    >
                      {item}
                      <FiChevronDown className="ml-1" />
                    </button>

                    {isSolutionsOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-green-100">
                        {solutionsItems.map((solution, index) => (
                          <Link
                            key={index}
                            href={`/solutions/${solution}`}
                            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                          >
                            {solution}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={item.toLocaleLowerCase().split(" ").join("_")}
                    className="text-gray-700 hover:text-green-600"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Contact on far right */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`text-white py-3 px-4 hover:text-gray-300 font-medium ${styles.contactButton}`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden mr-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="relative">
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md"
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                >
                  Solutions
                  <FiChevronDown
                    className={`transform ${
                      isSolutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isSolutionsOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    {solutionsItems.map((item, index) => (
                      <Link
                        key={index}
                        href={`/solutions/${item}`}
                        className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navItems
                .filter((item) => item !== "Solutions")
                .map((item, index) => (
                  <Link
                    key={index}
                    href={item.toLocaleLowerCase().split(" ").join("_")}
                    className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md"
                  >
                    {item}
                  </Link>
                ))}

              <Link
                href="/contact"
                className={`text-white text-center py-3 px-4 block w-full mt-4 hover:text-gray-300 font-medium ${styles.contactButton}`}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* cart */}
      <div>
        <Cart isOpen={isCartOpen} onClose={toggleCart} />
      </div>
    </nav>
  );
};

export default Navbar;
