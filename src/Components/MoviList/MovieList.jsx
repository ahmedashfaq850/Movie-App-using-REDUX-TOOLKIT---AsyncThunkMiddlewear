import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = () => {
  const moviesData = useSelector((state) => state.movies.movies);
  const ShowsData = useSelector((state) => state.movies.series);
  let showMovieData = "";
  let showSeriesData = "";

  showMovieData =
    moviesData.Response === "True" ? (
      moviesData.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="Error">
        <h3>Loading</h3>
      </div>
    );

    showSeriesData =
    ShowsData.Response === "True" ? (
      ShowsData.Search.map((series, index) => (
        <MovieCard key={index} data={series} />
      ))
    ) : (
      <div className="Error">
        <h3>Loading</h3>
      </div>
    );

  return (
    <div className="wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{showMovieData}</div>
      </div>

      <div className="series-list">
        <h2>Shows</h2>
        <div className="series-container">{showSeriesData}</div>
      </div>
    </div>
  );
};

export default MovieList;
