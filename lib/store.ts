// /lib/store.ts
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../lib/features/products/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
