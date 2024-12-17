// navSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavState {
  drawerOpen: boolean;
  expandedCategory: string | null;
  menuKey: string | null;
}

const initialState: NavState = {
  drawerOpen: false,
  expandedCategory: null,
  menuKey: null,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
    setExpandedCategory: (state, action: PayloadAction<string | null>) => {
      state.expandedCategory = action.payload;
    },
    setMenuKey: (state, action: PayloadAction<string | null>) => {
      state.menuKey = action.payload;
    },
  },
});

export const { toggleDrawer, setExpandedCategory, setMenuKey } =
  navSlice.actions;

export default navSlice.reducer;
