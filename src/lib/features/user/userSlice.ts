import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string;
  password: string;
  confirmPassword?: string;
  name?: string;
  error: string | null;
  loading: boolean;
  uid?: string;
}

const initialState: UserState = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
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
    setCredentials: (
      state,
      action: PayloadAction<{ [key: string]: string }>
    ) => {
      Object.entries(action.payload).forEach(([key, value]) => {
        (state as any)[key] = value ?? "";
      });
    },
  },
});

export const { setUser, setLoading, setError, setCredentials } =
  userSlice.actions;
export default userSlice.reducer;
