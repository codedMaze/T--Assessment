import { configureStore, createSlice } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import machineSlice from "./manchine-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, machine: machineSlice.reducer },
});

export default store;
