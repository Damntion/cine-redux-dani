import { configureStore } from '@reduxjs/toolkit';
import { peliculasSlice } from './slices/counter';
import { peliculasInfoSlice } from './slices/counter';
import { buscadorSlice } from './slices/counter';

export const store = configureStore({
    reducer: {
        peliculas: peliculasSlice.reducer,
        peliculaIn: peliculasInfoSlice.reducer,
        buscar: buscadorSlice.reducer
    },
});
