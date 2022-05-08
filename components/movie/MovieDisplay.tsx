import React from "react";
import { Movie } from "../../generated/graphqlClient";

interface MovieDisplayProps {
  movie: Movie;
}

const MovieDisplay: React.FC<MovieDisplayProps> = ({ movie }) => {
  const backgroundImageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div className="flex gap-4">
      <div
        className="h-80 w-60 flex-shrink-0"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">{movie.title}</h1>
        <div className="flex items-center gap-2">
          <span className="font-bold">Rating: </span>
          <span>{movie.vote_average}/10</span>
        </div>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDisplay;
