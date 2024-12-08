// slice  acts as middleWare combine initial state and reducer function it doesn't have logic
// it provides path from store to reducer funciton which has orignal logic
import { createSlice } from "@reduxjs/toolkit";
import {
  addProductReducer,
  removeProductReducer,
  updateProductReducer,
} from "./productReducer";

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface ProductState {
  items: Product[];
}

const initialState: ProductState = {
  items: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: addProductReducer,
    removeProduct: removeProductReducer,
    updateProduct: updateProductReducer,
  },
});

export const { addProduct, removeProduct, updateProduct } =
  productSlice.actions;
export default productSlice.reducer;
