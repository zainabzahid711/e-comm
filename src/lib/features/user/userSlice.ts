// redux/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string | null;
  uid: string | null;
  password: string | null;
  error: string | null;
  loading: boolean;
}

const initialState: UserState = {
  email: null,
  uid: null,
  password: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ email: string; uid: string }>) => {
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearUser: (state) => {
      state.email = null;
      state.uid = null;
      state.password = null;
      state.error = null;
    },
    setCredentials: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { setUser, clearUser, setLoading, setError, setCredentials } =
  userSlice.actions;
export default userSlice.reducer;
