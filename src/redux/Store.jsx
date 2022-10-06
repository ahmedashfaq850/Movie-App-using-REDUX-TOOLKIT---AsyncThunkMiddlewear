import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './Slices/MovieSlice'

export const store = configureStore({
    reducer: {
        movies:moviesReducer
    }
});