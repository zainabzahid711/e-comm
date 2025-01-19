import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import timerReducer from "../lib/features/timer/timerSlice";
import navReducer from "../lib/features/nav/navSlice";
import userReducer from "../lib/features/user/userSlice";
import authReducer from "../lib/features/auth/authSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", // Key for local storage
  storage,
};

const rootReducer = combineReducers({
  products: productReducer,
  timer: timerReducer,
  nav: navReducer,
  user: userReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
