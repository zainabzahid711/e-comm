"use client";

import { Provider } from "react-redux";
import { store } from "../lib/store";
import ProductMng from "../components/productUI";

export default function HomePage() {
  return (
    <div>
      <h4>Helo redux</h4>
      <Provider store={store}>
        <ProductMng />
      </Provider>
    </div>
  );
}
