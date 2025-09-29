import { CartItem } from "../cart_section/cartSection";
// app/my-account/types.ts

export interface ShippingAddress {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: "pending" | "processing" | "completed" | "cancelled";
  total: number;
  items: CartItem[];
  shippingAddress: ShippingAddress;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
}
