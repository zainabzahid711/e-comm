import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeLeft: "",
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setTimeLeft: (state, action) => {
      state.timeLeft = action.payload;
    },
    resetTimeLeft: (state) => {
      state.timeLeft = "Expired";
    },
  },
});

export const { setTimeLeft, resetTimeLeft } = timerSlice.actions;

export default timerSlice.reducer;
