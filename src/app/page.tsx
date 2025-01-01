"use client";

import { Provider } from "react-redux";
import { store } from "../lib/store";
// pages/_app.js
import "./globals.css"; // Ensure this line is present

// import ProductMng from "../components/productUI";
import Header from "../components/navBar/saleHeader";
import Home from "./home/page";
import AddProductPage from "../components/productUI";

export default function HomePage() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Home />
        <AddProductPage />
      </Provider>
    </div>
  );
}
