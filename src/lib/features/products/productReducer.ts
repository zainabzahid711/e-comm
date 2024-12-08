import { Product, ProductState } from "./productSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export const addProductReducer = (
  state: ProductState,
  action: PayloadAction<{ id: number; name: string; price: number }>
) => {
  const existingProduct = state.items.find(
    (product) => product.id === action.payload.id
  );
  if (existingProduct) {
    existingProduct.quantity += 1; // Increment quantity
  } else {
    state.items.push({ ...action.payload, quantity: 1 }); // Add with initial quantity
  }
};

// Decrease quantity or remove product if quantity is 0
export const removeProductReducer = (
  state: ProductState,
  action: PayloadAction<number>
) => {
  const existingProduct = state.items.find(
    (product) => product.id === action.payload
  );
  if (existingProduct) {
    if (existingProduct.quantity > 1) {
      existingProduct.quantity -= 1; // Decrease quantity
    } else {
      state.items = state.items.filter(
        (product) => product.id !== action.payload
      ); // Remove product
    }
  }
};

// Update product details (e.g., price or name)
export const updateProductReducer = (
  state: ProductState,
  action: PayloadAction<Product>
) => {
  const index = state.items.findIndex(
    (product) => product.id === action.payload.id
  );
  if (index !== -1) {
    state.items[index] = { ...state.items[index], ...action.payload };
  }
};
