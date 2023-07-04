import React from "react";
import { Link } from "react-router-dom";
import { movieData } from "../data";

function movies_list() {
  return (
    <div>
      <h4>Now Showing</h4>
      <div className="row">
        {movieData.map((movie, key) => {
          return (
            <Link className="col" key={key} to={"/movie/" + movie.id}>
              <div style={{ width: "18rem"}} className="card" key={key}>
                <img
                  style={{ width: "18rem", height: "25rem" }}
                  src={movie.poster}
                  alt={movie.name}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default movies_list;
