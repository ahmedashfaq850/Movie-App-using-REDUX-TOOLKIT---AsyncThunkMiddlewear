import React from 'react'
import './Home.Css'

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/Slices/MovieSlice'
import MovieList from '../MoviList/MovieList'

const Home = () => {
  
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchData = async () => {
      dispatch(fetchAsyncMovies())
      dispatch(fetchAsyncShows())
    };
    fetchData();
    },[dispatch])


  return (
   <>
    <div className='main-banner'>Banner Image</div>
    <MovieList/>
   </>
  )
}

export default Home