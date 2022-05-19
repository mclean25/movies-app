import React from "react";
import { CoreMovieFragment } from "../generated/graphqlClient";
import MovieCard from "./Cards/MovieCard";

interface MoviesDisplayProps {
  movies: CoreMovieFragment[];
}

const MoviesDisplay: React.FC<MoviesDisplayProps> = ({ movies }) => {
  return (
    <div className="flex flex-wrap space-y-4">
      {movies.map((movie, index) => {
        if (movie) {
          return <MovieCard key={movie?.id ?? index} movie={movie} />;
        }
      })}
    </div>
  );
};

export default MoviesDisplay;
