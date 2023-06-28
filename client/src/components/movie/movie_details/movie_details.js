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
        <Link
          to={"/booking/" + props.movie.id}
          style={{ textDecoration: "none" }}
        >
          <div className="book-ticket">
            <img src="/images/ticket.png" alt="" />
            <span>BOOK TICKETS</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetails;
