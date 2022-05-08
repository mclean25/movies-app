import React from "react";
import { Movie } from "../../generated/graphqlClient";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const backgroundImageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div
      className={`border border-gray-100 rounded-md h-60 w-40`}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1>{movie.title}</h1>
    </div>
  );
};

export default MovieCard;
