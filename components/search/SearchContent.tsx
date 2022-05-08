import React from "react";
import { Movie, useSearchQuery } from "../../generated/graphqlClient";
import SearchResult from "./SearchResult";

const SearchContent: React.FC<{
  searchQuery: ReturnType<typeof useSearchQuery>;
}> = ({ searchQuery }) => {
  if (searchQuery.loading) {
    return <span>Loading...</span>;
  }

  if (searchQuery.error) {
    return <span>Oops... something went wrong.</span>;
  }

  const movies = searchQuery.data?.search?.filter(
    (movie): movie is Movie => !!movie
  );
  if (movies && movies.length > 0) {
    return (
      <div className="gap-2">
        {movies.map((result) => (
          <SearchResult key={result.id} movie={result} />
        ))}
      </div>
    );
  }

  return <span>0 results found</span>;
};

export default SearchContent;
