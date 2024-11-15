"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../lib/store";
import {
  addProduct,
  deleteProduct,
} from "../lib/features/products/productSlice";
import type { Product } from "../lib/features/products/productSlice";
import { useState } from "react";

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.items);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState<number | "">("");

  const handleAddProduct = () => {
    if (productName && productPrice !== "") {
      dispatch(
        addProduct({
          id: Math.random().toString(36).substring(2, 9),
          name: productName,
          price: Number(productPrice),
          description: "Sample description",
        })
      );
      setProductName("");
      setProductPrice("");
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{" "}
            <button onClick={() => dispatch(deleteProduct(product.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h2>Add a New Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Product Price"
        value={productPrice}
        onChange={(e) => setProductPrice(Number(e.target.value))}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}
