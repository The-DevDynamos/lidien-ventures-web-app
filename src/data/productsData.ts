import { type Product } from "@/components/UI/product_card/productCard";

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Complete Solar Home System 5kW",
    description:
      "Complete off-grid solar system with battery storage for residential use.",
    price: 450000,
    originalPrice: 520000,
    rating: 4.8,
    reviewCount: 124,
    image: "/images/products/solar_system.jpg",
    features: ["5kW Capacity", "Battery Storage", "Off-Grid Ready"],
    category: "solar", // Added category
  },
  {
    id: "2",
    title: "Solar Panel 400W Mono PERC",
    description: "High-efficiency monocrystalline solar panel.",
    price: 28000,
    originalPrice: 32000,
    rating: 4.6,
    reviewCount: 89,
    image: "/images/products/solar_panel.jpg",
    features: ["400W Output", "Mono PERC", "25-Year Warranty"],
    category: "solar", // Added category
  },
  {
    id: "3",
    title: "Biogas Digester System",
    description: "Complete biogas system for organic waste conversion.",
    price: 120000,
    rating: 4.4,
    reviewCount: 45,
    image: "/images/products/biogas_system.jpg",
    features: ["200L Capacity", "Waste Management", "Renewable Energy"],
    category: "biogas", // Added category
  },
  {
    id: "4",
    title: "LPG Cylinder 13kg",
    description:
      "Standard LPG cylinder with safety valve and regulator for household cooking.",
    price: 120000,
    rating: 4.4,
    reviewCount: 45,
    image: "/images/products/lpg_gas.jpg",
    features: ["13kg capacity", "Safety certified"],
    category: "lpg", // Added category
  },
  // ... rest of your products with category fields
];
