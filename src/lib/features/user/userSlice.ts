import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { produce, Draft } from "immer"; // Ensure proper import of 'produce'

interface UserState {
  email: string;
  password: string;
  confirmPassword?: string;
  name: string | null;
  error: string | null;
  loading: boolean;
  uid?: string;
}

const initialState: UserState = {
  email: "",
  password: "",
  confirmPassword: "",
  name: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ email: string; uid: string; name?: string }>
    ) => {
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      state.name = action.payload.name || "User";
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
      action: PayloadAction<Partial<Record<keyof UserState, string>>>
    ) => {
      const payload = action.payload;

      return produce(state, (draft: Draft<UserState>) => {
        for (const key in payload) {
          if (Object.prototype.hasOwnProperty.call(payload, key)) {
            const stateKey = key as keyof UserState;
            const value = payload[stateKey];

            // Ensure type compatibility
            (draft[stateKey] as typeof value) = value;
          }
        }
      });
    },
    resetCredentials: (state) => {
      state.email = "";
      state.password = "";
      state.error = null;
    },
  },
});

export const {
  setUser,
  setLoading,
  setError,
  setCredentials,
  resetCredentials,
} = userSlice.actions;
export default userSlice.reducer;
