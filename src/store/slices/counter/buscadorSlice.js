import { createSlice } from '@reduxjs/toolkit';

export const buscadorSlice = createSlice({
  name: 'buscar',
  initialState: {
    searchResults: [],
  },
  reducers: {
    setSearchResults(state, action) {
      state.searchResults = action.payload;
    },
  },
});

export const { setSearchResults } = buscadorSlice.actions;

