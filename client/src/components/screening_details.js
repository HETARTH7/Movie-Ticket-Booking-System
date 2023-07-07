import React from "react";

const ScreeningDetails = (props) => {
  const user = localStorage["username"];
  const shows = ["8AM", "10AM", "2PM", "5PM", "10PM"];
  const VerifyAuth = (show) => {
    if (!user) {
      alert("Sorry! You need to login first");
      window.location.href = "/login";
    } else
      window.location.href = "/booking/id=" + props.movie.id + "&show=" + show;
  };
  return (
    <div>
      <h1>SHOWTIMES</h1>
      {shows.map((show, index) => {
        return (
          <button
            onClick={() => VerifyAuth(show)}
            className="btn btn-outline-dark m-4"
            key={index}
          >
            {show}
          </button>
        );
      })}
    </div>
  );
};

export default ScreeningDetails;
