import { type CartItem } from "@/components/UI/cart_section/cartSection";

export const mockCartItems: CartItem[] = [
  {
    id: "1",
    productId: "1",
    title: "Complete Solar Home System 5kW",
    price: 450000,
    quantity: 1,
    image: "/images/solar-system.jpg",
    category: "solar",
  },
  {
    id: "2",
    productId: "2",
    title: "Solar Panel 400W Mono PERC",
    price: 28000,
    quantity: 3,
    image: "/images/solar-panel.jpg",
    category: "solar",
  },
  {
    id: "3",
    productId: "4",
    title: "LPG Cooking Set",
    price: 15000,
    quantity: 1,
    image: "/images/lpg-set.jpg",
    category: "lpg",
  },
];

export const emptyCartItems: CartItem[] = [];
