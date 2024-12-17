"use client";

import { Provider } from "react-redux";
import { store } from "../lib/store";
// pages/_app.js
import "./globals.css"; // Ensure this line is present

// import ProductMng from "../components/productUI";
import Header from "../components/navBar/saleHeader";
import NavBar from "../components/navBar/navBar";

export default function HomePage() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <NavBar />
      </Provider>
    </div>
  );
}
