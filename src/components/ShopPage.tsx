"use client";
import React, { useState, useMemo, useEffect } from "react";
import ShoppingHero from "./UI/shopping_hero/shopping_hero";
import ShopTopBar from "./UI/shop_topbar/shopTopBar";
import ProductsSection from "./UI/products_section/productsSection";
import SideSection from "./UI/shop_aside/shopAside";
import { mockProducts } from "@/data/mock_products";
import { Category } from "./UI/shop_aside/shopAside";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { removeItem, updateQuantity } from "@/store/cart/cart";

// Define categories based on your mock products
const categories: Category[] = [
  { id: "all", name: "All Products", count: mockProducts.length, icon: null },
  {
    id: "solar",
    name: "Solar Energy",
    count: mockProducts.filter((p) => p.category === "solar").length,
    icon: null,
  },
  {
    id: "biogas",
    name: "Biogas Systems",
    count: mockProducts.filter((p) => p.category === "biogas").length,
    icon: null,
  },
  {
    id: "lpg",
    name: "LPG Solutions",
    count: mockProducts.filter((p) => p.category === "lpg").length,
    icon: null,
  },
  {
    id: "water",
    name: "Water Systems",
    count: mockProducts.filter((p) => p.category === "water").length,
    icon: null,
  },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("rate");
  const dispatch = useDispatch();
  const { items: cartItems } = useSelector((state: RootState) => state.cart);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = mockProducts;

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === activeCategory
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.features.some((feature) =>
            feature.toLowerCase().includes(query)
          )
      );
    }

    // Sort products
    switch (sortBy) {
      case "price_Ascn":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price_Dscn":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "popularity":
        filtered = [...filtered].sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case "rate":
      default:
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
    }

    return filtered;
  }, [activeCategory, searchQuery, sortBy]);

  // Update category counts based on current search
  const updatedCategories = useMemo(() => {
    return categories.map((cat) => {
      if (cat.id === "all") {
        return { ...cat, count: filteredProducts.length };
      }

      const count = filteredProducts.filter(
        (p) => p.category === cat.id
      ).length;
      return { ...cat, count };
    });
  }, [filteredProducts]);

  // Cart functions
  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
  };

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeItem(itemId));
  };

  const handleContinueShopping = () => {
    // Scroll to top or focus on products
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCheckout = () => {
    // Navigate to checkout page
    alert("Proceeding to checkout!");
    // In a real app: router.push('/checkout');
  };

  return (
    <div>
      <ShoppingHero />
      <div className="mx-auto lg:grid lg:grid-cols-[300px_1fr] gap-4 flex flex-col -mt-8 min-h-svh">
        {/* Side Section - Navigation, Search, and Cart */}
        <aside className="p-6">
          <SideSection
            categories={updatedCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onContinueShopping={handleContinueShopping}
            onCheckout={handleCheckout}
          />
        </aside>

        {/* Main Content Section with Topbar and Products */}
        <main className="p-6">
          <div className="space-y-6">
            <ShopTopBar
              sortBy={sortBy}
              onSortChange={setSortBy}
              productCount={filteredProducts.length}
            />
            <div>
              <ProductsSection
                products={filteredProducts}
                title="Solar Products"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
