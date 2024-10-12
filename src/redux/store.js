import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './camper/slice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});
