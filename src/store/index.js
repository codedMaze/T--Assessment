import { configureStore, createSlice } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import machineSlice from "./manchine-slice";

const somethingSlice = createSlice({
  name: "somthing",
  initialState: { count: 0 },
  reducers: {
    // kindaFunction() {},
  },
});

export const somethingAction = somethingSlice.actions;

const store = configureStore({
  reducer: { ui: uiSlice.reducer, machine: machineSlice.reducer },
});

export default store;
