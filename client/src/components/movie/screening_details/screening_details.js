import React from "react";
import { Link } from "react-router-dom";

const ScreeningDetails = (props) => {
  return (
    <div className="screening-details-container">
      <h4>SCREENING DETAILS</h4>
      <div className="screening-details-content">
        <Link
          to={"/booking/" + props.movie.id}
          style={{ "textDecoration": "none" }}
        >
          <div className="screening-details-wrap">
            <span>10 AM </span>
          </div>
        </Link>
        <Link
          to={"/booking/" + props.movie.id}
          style={{ "textDecoration": "none" }}
        >
          <div className="screening-details-wrap">
            <span>8 PM </span>
          </div>
        </Link>
        <Link
          to={"/booking/" + props.movie.id}
          style={{ "textDecoration": "none" }}
        >
          <div className="screening-details-wrap">
            <span>10 AM </span>
          </div>
        </Link>
        <Link
          to={"/booking/" + props.movie.id}
          style={{ "textDecoration": "none" }}
        >
          <div className="screening-details-wrap">
            <span>8 PM </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ScreeningDetails;
