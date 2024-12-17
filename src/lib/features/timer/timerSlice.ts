import { createSlice } from "@reduxjs/toolkit";

interface TimerState {
  timeLeft: string;
}

const initialState: TimerState = {
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
