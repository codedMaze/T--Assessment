import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  machines: [],
  machineTypes: [],
};

const machineSlice = createSlice({
  name: "machine",
  initialState,
  reducers: {
    addMachineType(state, action) {
      const items = {
        id: crypto.randomUUID(),
        name: action.payload.machineName,
        title: action.payload.title,
        options: action.payload.others,
      };
      state.machineTypes = [...state.machineTypes, items];
      localStorage.setItem("machineTypes", JSON.stringify(state.machineTypes));
    },
    addMachine(state, action) {
      const items = {
        id: crypto.randomUUID(),
        name: action.payload.name,
        title: action.payload.title,
        machineTypeId: action.payload.machineTypeId,
        options: action.payload.options,
      };
      state.machines = [...state.machines, items];
      localStorage.setItem("machines", JSON.stringify(state.machines));
    },
    loadMachines(state, action) {
      if (action.payload) {
        state.machines = [...action.payload];
      } else state.machines = [];
    },
    loadMachineTypes(state, action) {
      if (action.payload) {
        state.machineTypes = [...action.payload];
      } else state.machineTypes = [];
    },
  },
});

export const machineAction = machineSlice.actions;

export default machineSlice;
