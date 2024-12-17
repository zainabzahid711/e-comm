import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import timerReducer from "../lib/features/timer/timerSlice";
import navReducer from "../lib/features/nav/navSlice";

// Create the store
export const store = configureStore({
  reducer: {
    products: productReducer, // Register the product slice
    timer: timerReducer,
    nav: navReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
