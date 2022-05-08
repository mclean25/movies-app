import type { NextPage } from "next";
import { usePopularMoviesQueryQuery } from "../generated/graphqlClient";

const Home: NextPage = () => {
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

export default Home;
