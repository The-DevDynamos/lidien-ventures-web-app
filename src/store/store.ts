import { configureStore } from "@reduxjs/toolkit";
import cartStore from "./cart/cart";

export const store = configureStore({
  reducer: {
    cart: cartStore,
  },
});

export const makeStore = () => store;

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
