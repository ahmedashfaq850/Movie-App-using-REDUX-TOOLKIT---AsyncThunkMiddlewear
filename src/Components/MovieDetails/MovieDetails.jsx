import React from 'react'
import './MovieDetails.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDetails } from '../../redux/Slices/MovieSlice';

const MovieDetails = () => {


  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state)=> state.movies.Details);
  console.log(data);
  useEffect(() => {
    dispatch(fetchDetails(imdbID));
  }, [dispatch, imdbID]);


  return (
    <div>MovieDetails</div>
  )
}

export default MovieDetails