import React from "react";
import {
  Movie,
  usePopularMoviesQueryQuery,
} from "../../generated/graphqlClient";
import MoviesDisplay from "../MoviesDisplay";

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
      <div className="flex flex-wrap space-y-4">
        <MoviesDisplay movies={popularMovies.data.popularMovies as Movie[]} />
      </div>
    );
  }

  return <div>No results</div>;
};

export default PopularMovies;
