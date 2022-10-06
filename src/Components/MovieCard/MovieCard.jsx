import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <div className="main">
      <Link className="main" to={`/movie/${data.imdbID}`}>
        <div className="grid-item">
          <div className="banner-img">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="content">
            <h3>{data.Title}</h3>
            <h5>{data.Year}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
