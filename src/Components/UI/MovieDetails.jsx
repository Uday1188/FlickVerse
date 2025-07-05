import React from "react";
import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const movie = useLoaderData();
  console.log("Movie data:", movie);

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Poster column */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src={movie.poster}
            alt={movie.title}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "450px" }}
          />
        </div>

        {/* Details column */}
        <div className="col-md-8">
          <h2 className="text-dark">
            {movie.title} ({movie.year})
          </h2>
          <p className="text-muted">
            <strong className="text-dark">Rating: </strong> ⭐ {movie.rating}
          </p>
          <p className="text-muted">
            <strong className="text-dark">Cast: </strong> {movie.cast.join(", ")}
          </p>
          <p className="text-muted">
            <strong className="text-dark">Type: </strong> {movie.type}
          </p>
          <p className="text-muted">
            <strong className="text-dark">Language: </strong> {movie.language}
          </p>
          <p className="text-muted">
            <strong className="text-dark">Duration: </strong> {movie.duration}
          </p>
          <p className="text-muted">
            <strong className="text-dark">Certificate: </strong> {movie.certificate}
          </p>
          <p className="text-muted">
            <strong className="text-dark">Dialogue: </strong>
            {movie.dialogue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;