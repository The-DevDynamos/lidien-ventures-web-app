"use client";
// tsx code
import React, { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaSun,
  FaFire,
  FaGasPump,
  FaTint,
  FaBox,
} from "react-icons/fa";
import CartSection, { type CartItem } from "../cart_section/cartSection";
import styles from "./shopAside.module.scss";
import { AiOutlineFilter } from "react-icons/ai";

export interface Category {
  id: string;
  name: string;
  count: number;
  icon: React.ReactNode;
}

interface SideSectionProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onContinueShopping: () => void;
  onCheckout: () => void;
}

const SideSection: React.FC<SideSectionProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onContinueShopping,
  onCheckout,
}) => {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearchQuery(value);
    onSearchChange(value);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case "solar energy":
        return <FaSun className={styles.categoryIcon} />;
      case "biogas systems":
        return <FaFire className={styles.categoryIcon} />;
      case "lpg solutions":
        return <FaGasPump className={styles.categoryIcon} />;
      case "water systems":
        return <FaTint className={styles.categoryIcon} />;
      default:
        return <FaBox className={styles.categoryIcon} />;
    }
  };

  return (
    <div className={styles.sideSection}>
      {/* Search Box */}
      <div className={styles.searchBox}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search products..."
          value={localSearchQuery}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>

      {/* Mobile Filter Toggle Button */}
      <button className={styles.mobileFilterToggle} onClick={toggleFilter}>
        <AiOutlineFilter />
        {isFilterOpen ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Category Filter */}
      <div>
        <div
          className={`${styles.filterSection} ${
            isFilterOpen ? styles.mobileOpen : ""
          }`}
        >
          <h3 className={`${styles.filterTitle}`}>
            <FaFilter />
            Filter by category
          </h3>
          <div className={styles.categoryList}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.categoryItem} ${
                  activeCategory === category.id ? styles.active : ""
                }`}
                onClick={() => {
                  onCategoryChange(category.id);
                  if (isFilterOpen) {
                    setIsFilterOpen(false);
                  }
                }}
              >
                <span className={styles.categoryName}>
                  {getCategoryIcon(category.name)}
                  {category.name}
                </span>
                <span className={styles.categoryCount}>{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Section - Hidden on mobile (1050px and below) */}
      <div className={styles.cartSectionContainer}>
        <div className={styles.cartSection}>
          <CartSection
            cartItems={cartItems}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
            onContinueShopping={onContinueShopping}
            onCheckout={onCheckout}
            isSideCart={false}
          />
        </div>
      </div>
    </div>
  );
};

export default SideSection;
