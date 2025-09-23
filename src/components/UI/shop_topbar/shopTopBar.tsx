"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import styles from "./shopTopBar.module.scss";

interface Option {
  value: string;
  label: string;
}

interface ShopTopBarProps {
  sortBy: string;
  onSortChange: (value: string) => void;
  productCount: number;
}

export default function ShopTopBar({
  sortBy,
  onSortChange,
  productCount,
}: ShopTopBarProps) {
  const options: Option[] = [
    { value: "rate", label: "Highest Rated" },
    { value: "popularity", label: "Most Popular" },
    { value: "price_Ascn", label: "Price: Low to High" },
    { value: "price_Dscn", label: "Price: High to Low" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption =
    options.find((option) => option.value === sortBy) || options[0];

  const handleOptionClick = (value: string) => {
    onSortChange(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>{productCount} Products found</h2>
        </div>

        <div className={styles.form} ref={dropdownRef}>
          <div className={styles.customDropdown}>
            {/* Custom Dropdown Trigger */}
            <div className={styles.selectTrigger} onClick={toggleDropdown}>
              <span>{selectedOption.label}</span>
              <FaChevronDown
                className={`${styles.chevron} ${isOpen ? styles.rotated : ""}`}
              />
            </div>

            {/* Custom Dropdown Menu */}
            {isOpen && (
              <div className={styles.dropdownMenu}>
                {options.map((option) => (
                  <button
                    key={option.value}
                    className={`${styles.dropdownOption} ${
                      option.value === sortBy ? styles.selected : ""
                    }`}
                    onClick={() => handleOptionClick(option.value)}
                  >
                    <span className={styles.optionText}>{option.label}</span>
                    {option.value === sortBy && (
                      <FaCheck className={styles.checkIcon} />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
