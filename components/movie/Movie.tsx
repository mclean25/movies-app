import React from "react";
import { useMovieQueryQuery } from "../../generated/graphqlClient";
import MovieDisplay from "./MovieDisplay";

interface MovieProps {
  id: number;
}

const MovieDetails: React.FC<MovieProps> = ({ id }) => {
  const movieQuery = useMovieQueryQuery({ variables: { id: id } });

  if (movieQuery.loading) {
    return <div>Loading...</div>;
  }

  if (movieQuery.error) {
    return <div>Oops... something went wrong</div>;
  }

  if (movieQuery.data?.movie) {
    return <MovieDisplay movie={movieQuery.data.movie} />;
  }

  return <div>No results</div>;
};

export default MovieDetails;
