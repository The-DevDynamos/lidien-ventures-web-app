"use client";

import React, { useEffect } from "react";
import CartSection from "./cartSection";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "@/store/cart/cart";
import { RootState } from "@/store/store";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items: cartItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const cartElement = document.getElementById("mobile-cart");
      if (cartElement && !cartElement.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when cart is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Cart functions
  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
  };

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeItem(itemId));
  };

  const handleContinueShopping = () => {
    onClose();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCheckout = () => {
    onClose();
    alert("Proceeding to checkout!");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with opacity */}
      <div
        className="fixed inset-0 h-[100vh] bg-gray-700/50 transition-opacity duration-300"
        aria-hidden="true"
        style={{
          zIndex: 100,
        }}
      />

      {/* Cart container */}
      <div
        id="mobile-cart"
        className={`
          fixed top-0 right-0 h-[100vh] w-full max-w-md z-100
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="bg-white h-full flex flex-col relative">
          {/* Header with close button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-red-500 transition-colors duration-200"
              aria-label="Close cart"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Cart content */}
          <div className="flex-1 overflow-y-auto">
            <CartSection
              cartItems={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onContinueShopping={handleContinueShopping}
              onCheckout={handleCheckout}
              isSideCart={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}
