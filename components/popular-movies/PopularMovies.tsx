import React from "react";
import { usePopularMoviesQueryQuery } from "../../generated/graphqlClient";
import MovieCard from "../Cards/MovieCard";

interface PopularMoviesProps {}

const PopularMovies: React.FC<PopularMoviesProps> = () => {
  const popularMovies = usePopularMoviesQueryQuery();

  if (popularMovies.loading) {
    return <div>Loading...</div>;
  }

  if (popularMovies.error) {
    return <div>Oops... something went wrong</div>;
  }

  if (popularMovies.data?.popularMovies) {
    return (
      <div className="flex flex-wrap gap-4">
        {popularMovies.data.popularMovies.map((movie, index) => {
          if (movie) {
            return <MovieCard key={movie?.id ?? index} movie={movie} />;
          }
        })}
      </div>
    );
  }

  return <div>No results</div>;
};

export default PopularMovies;
