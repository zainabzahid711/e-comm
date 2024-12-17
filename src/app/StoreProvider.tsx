// StoreProvider.tsx
"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../lib/store";
import { RootState } from "../lib/store";

export default function StoreProvider({
  children,
}: {
  children: ReactNode;
  preloadedState?: RootState;
}) {
  return <Provider store={store}>{children}</Provider>;
}
