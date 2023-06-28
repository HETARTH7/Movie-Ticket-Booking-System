import React from "react";
import { Link } from "react-router-dom";
import { movieData } from "../../../data";

function movies_list() {
  return (
    <div className="movie-list-container">
      <h4>Now Showing</h4>
      <div className="movie-list-content">
        {movieData.map((movie, key) => {
          return (
            <Link key={key} to={"/movie/" + movie.id}>
              <div key={key} className="movie-list-wrap">
                <img src={movie.poster} alt={movie.name} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default movies_list;
