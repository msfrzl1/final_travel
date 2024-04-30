import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   isOpen: false,
};

export const modalRoleSlice = createSlice({
   name: 'modalRole',
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

export const { openModal, closeModal } = modalRoleSlice.actions;

export default modalRoleSlice.reducer;
