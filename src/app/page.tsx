"use client";

import { Provider } from "react-redux";
import { persistor, store } from "../lib/store";
import "./globals.css";

import Header from "../components/navBar/saleHeader";
import Home from "./home/page";
import { PersistGate } from "redux-persist/integration/react";

export default function HomePage() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Home />
        </PersistGate>
      </Provider>
    </div>
  );
}
