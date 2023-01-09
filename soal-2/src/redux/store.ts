import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import userReducer from '../features/user/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();

export default store;
