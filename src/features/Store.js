import { configureStore } from '@reduxjs/toolkit'
import IconSlice from './IconSlice';



export const Store = configureStore({
  reducer: {
    darkMode:IconSlice,
  },
});

