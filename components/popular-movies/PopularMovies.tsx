import React from "react";
import { usePopularMoviesQueryQuery } from "../../generated/graphqlClient";

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
      <div>
        {popularMovies.data.popularMovies.map((movie) => (
          <div key={movie?.title}>{movie?.title}</div>
        ))}
      </div>
    );
  }

  return <div>No results</div>;
};

export default PopularMovies;
