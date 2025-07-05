import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Components/UI/Card";

const Movie = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);
  return (
    <div className="container my-4">
      <div className="row g-4">
        {moviesData.map((curMovie) => (
          <div key={curMovie.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Card curMovie={curMovie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;