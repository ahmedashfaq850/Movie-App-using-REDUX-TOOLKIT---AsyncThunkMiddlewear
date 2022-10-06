import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../Utils/Api/MovieApi';
import { ApiKey } from '../../Utils/Api/ApiKey'

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies", async () => {
    const movieText = 'Harry';
    const response = await MovieApi.get(`?i=tt3896198&apikey=${ApiKey}&s=${movieText}&type=movie`);
    return response.data
  }
);

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async () => {
    const seriesText = 'Friends';
    const response = await MovieApi.get(`?i=tt3896198&apikey=${ApiKey}&s=${seriesText}&type=series`);
    return response.data
  }
);

export const fetchDetails = createAsyncThunk(
  'movies/fetchDetails', async (id) => {
    const response = await MovieApi.get(`?apiKey=${ApiKey}&i=${id}&Plot=full`);
    return response.data;
  }
);


const initialState = {
  movies: {},
  series: {},
  Details: {}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  /* reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  }, */
  extraReducers: {
    [fetchAsyncMovies.pending]: () =>{
      console.log('pending')
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) =>{
      console.log('Fetch Successfully');
      return {...state, movies:payload};
    },
    [fetchAsyncMovies.rejected]: () =>{
      console.log('rejected')
    },
    [fetchAsyncShows.fulfilled]: (state, { payload })=>{
      console.log('fetchShows Successfully')
      return {...state, series:payload}
    },
    [fetchDetails.fulfilled]: (state, { payload }) => {
      console.log('fetchDetails Successfully')
      return { ...state, Details: payload };
    }
  }
});

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
