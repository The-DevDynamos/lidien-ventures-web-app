import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

export interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

// Helper function to calculate totals
const calculateTotals = (items: CartItem[]) => {
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return { totalQuantity, totalAmount };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart
    addItem: (
      state,
      action: PayloadAction<Omit<CartItem, "id" | "quantity">>
    ) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === newItem.productId
      );

      if (existingItem) {
        // Increase quantity if item already exists
        existingItem.quantity += 1;
      } else {
        // Add new item with unique cart ID
        state.items.push({
          ...newItem,
          id: `cart_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          quantity: 1,
        });
      }

      // Recalculate totals
      const { totalQuantity, totalAmount } = calculateTotals(state.items);
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },

    // Remove item from cart
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      const { totalQuantity, totalAmount } = calculateTotals(state.items);
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },

    // Update item quantity
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item && quantity > 0) {
        item.quantity = quantity;
      } else if (item && quantity <= 0) {
        // Remove item if quantity is 0 or negative
        state.items = state.items.filter((item) => item.id !== id);
      }

      const { totalQuantity, totalAmount } = calculateTotals(state.items);
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },

    // Increase item quantity by 1
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
      }

      const { totalQuantity, totalAmount } = calculateTotals(state.items);
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },

    // Decrease item quantity by 1
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // Remove item if quantity becomes 0
          state.items = state.items.filter(
            (cartItem) => cartItem.id !== action.payload
          );
        }
      }

      const { totalQuantity, totalAmount } = calculateTotals(state.items);
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },

    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },

    // Load cart from localStorage
    loadCart: (state, action: PayloadAction<CartState>) => {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalAmount = action.payload.totalAmount;
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  loadCart,
} = cartSlice.actions;

export default cartSlice.reducer;
