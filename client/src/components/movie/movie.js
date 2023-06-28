import React from "react";
import MovieDetails from "./movie_details/movie_details";
// import ScreeningDetails from "./screening_details/screening_details";
import { useParams } from "react-router-dom";
import { movieData } from "./../../data";
import Header from "./../header/header";

const Movie = () => {
  const { movie_id } = useParams();
  return (
    <div className="movie-container">
      <Header />
      <MovieDetails movie={movieData[movie_id - 1]} />
      {/* <ScreeningDetails movie={movieData[movie_id - 1]} /> */}
    </div>
  );
};

export default Movie;
