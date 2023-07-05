import React from "react";
import MovieDetails from "./movie_details";
import { useParams } from "react-router-dom";
import { movieData } from "../data";
import Header from "./navbar";

const Movie = () => {
  const { movie_id } = useParams();
  return (
    <div className="container">
      <Header />
      <MovieDetails movie={movieData[movie_id - 1]} />
      {/* <ScreeningDetails movie={movieData[movie_id - 1]} /> */}
    </div>
  );
};

export default Movie;
