import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   isOpen: false,
};

export const modalLogoutSlice = createSlice({
   name: 'modalLogout',
   initialState,
   reducers: {
      openModal: (state) => {
         state.isOpen = true;
      },
      closeModal: (state) => {
         state.isOpen = false;
      },
   },
});

export const { openModal, closeModal } = modalLogoutSlice.actions;

export default modalLogoutSlice.reducer;
