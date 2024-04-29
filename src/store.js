import { configureStore } from '@reduxjs/toolkit';
import { modalLogoutSlice } from './features/modalLogoutSlice';

export const store = configureStore({
   reducer: {
      modalLogout: modalLogoutSlice.reducer,
   },
});

export default store;
