import { configureStore } from '@reduxjs/toolkit';
import { modalLogoutSlice } from './features/modalLogoutSlice';
import { modalRoleSlice } from './features/modalRoleSlice';

export const store = configureStore({
   reducer: {
      modalLogout: modalLogoutSlice.reducer,
      modalRole: modalRoleSlice.reducer,
   },
});

export default store;
