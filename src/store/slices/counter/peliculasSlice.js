import {createSlice} from '@reduxjs/toolkit';

export const peliculasSlice = createSlice({
    name: 'peliculas',
    initialState: {
        films: [],
    },
    reducers:{
       startLoadingPeliculas: (state)=>{
        state.isLoading = true;
       },
       setPeliculas: (state, action)=>{
        state.films=action.payload.films;
       }
    },
});

export const {startLoadingPeliculas, setPeliculas }= peliculasSlice.actions

// export default counterSlice.reducer;