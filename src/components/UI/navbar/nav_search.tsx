"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

interface NavSearchProps {
  closeMobileMenu: () => void;
}

export default function NavSearch({ closeMobileMenu }: NavSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  const searchRef = useRef<HTMLDivElement>(null);

  const solutionDropLinks: string[] = [
    "/solutions/category/solar-energy-solutions",
    "/solutions/category/biogas-solutions",
    "/solutions/category/lpg-distribution-solutions",
    "/solutions/category/solar-boreholes-solutions",
    "/solutions",
  ];

  const handleSearchResultClick = (index: number) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
    closeMobileMenu();
    const result = solutionDropLinks[index];
    router.push(result);
  };

  // Mock search function
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      setSearchResults([
        `Solar solutions`,
        `Biogas solutions`,
        `LPG distribution`,
        `Solar borehole`,
      ]);
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div className="flex items-center">
        <div className="relative" ref={searchRef}>
          <div
            className="flex items-center cursor-pointer hover:text-green-600 transition-colors duration-200 group"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <FiSearch className="mr-2 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">Search products and services...</span>
          </div>

          {isSearchOpen && (
            <div className="absolute top-full left-0 mt-3 w-96 bg-white rounded-2xl shadow-xl z-50 border border-green-100 overflow-hidden">
              <div className="p-4 border-b border-green-50">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" />
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="w-full pl-10 pr-4 py-3 border-0 rounded-lg bg-green-25 focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    autoFocus
                  />
                </div>
              </div>
              {searchResults.length > 0 && (
                <div className="max-h-60 overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <div
                      key={`search-result-${index}`}
                      className="p-3 hover:bg-green-25 cursor-pointer border-b border-green-50 last:border-b-0 transition-colors duration-200 group"
                      onClick={() => handleSearchResultClick(index)}
                    >
                      <div className="flex items-center">
                        <FiSearch className="text-green-400 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <span className="text-green-800 group-hover:text-green-600 transition-colors duration-200">
                          {result}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {searchQuery.length > 0 && searchResults.length === 0 && (
                <div className="p-4 text-green-600 text-center">
                  No results found for &ldquo;{searchQuery}&rdquo;
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
