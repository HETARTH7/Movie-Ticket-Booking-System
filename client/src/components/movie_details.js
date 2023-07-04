import { Link } from "react-router-dom";

const MovieDetails = (props) => {
  return (
    <div className="movie-details-container">
      <div className="movie-details">
        <h1>{props.movie.name}</h1>
        <div className="movie-details-subtitle">
          {props.movie.lang} • {props.movie.duration}m • {props.movie.genre}
        </div>
        <div className="description">{props.movie.desc}</div>
        <video width="750" height="400" autoPlay controls>
          <source src={props.movie.trailer} type="video/mp4" />
        </video>
        <Link
          to={"/booking/" + props.movie.id}
          style={{ textDecoration: "none" }}
        >
          <div>BOOK TICKETS</div>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetails;
