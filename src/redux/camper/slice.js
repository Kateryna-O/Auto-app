import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCampers,
  fetchCampersDetails,
  fetchFilteredCampers,
} from './operations';

const initialState = {
  campers: [],
  campersDetails: null,
  filteredCampers: [],
  isLoading: false,
  error: null,
};

export const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.campers = action.payload.items;
      })
      .addCase(fetchCampers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchCampersDetails.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampersDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.campersDetails = action.payload;
      })
      .addCase(fetchCampersDetails.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchFilteredCampers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchFilteredCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filteredCampers = action.payload.items;
      })
      .addCase(fetchFilteredCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
