import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenSide: false,
  showModel: false,
  showMachineForm: false,
  showEditForm: false,
  editForm: false,
};

const uiSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isOpenSide = !state.isOpenSide;
    },
    toggleModelForm(state) {
      state.showModel = !state.showModel;
    },
    toggleMachineForm(state) {
      state.showMachineForm = !state.showMachineForm;
    },
    toggleEditForm(state) {
      state.showEditForm = !state.showEditForm;
    },
    toggleEdit(state) {
      state.editForm = !state.editForm;
    },
    setAllFalse(state) {
      state.showEditForm = false;
      state.showMachineForm = false;
      state.editForm = false;
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
