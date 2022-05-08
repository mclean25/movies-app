import React from "react";
import { useMovieQueryQuery } from "../../generated/graphqlClient";

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

  if (movieQuery.data) {
    return (
      <div className="flex flex-wrap gap-4">
        <h1>{movieQuery.data.movie?.title}</h1>
      </div>
    );
  }

  return <div>No results</div>;
};

export default MovieDetails;
