
import { createSlice } from '@reduxjs/toolkit';

export const peliculasInfoSlice = createSlice({
  name: 'peliculaIn',
  initialState: {
    film: {},
    trailerKey: null,
  },
  reducers: {
    setPeliculaDetails: (state, action) => {
      state.film = action.payload.film;
      state.trailerKey = action.payload.trailerKey;
    },
  },
});

export const { setPeliculaDetails } = peliculasInfoSlice.actions;

