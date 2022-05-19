import React from "react";
import { useSearchQuery } from "../../generated/graphqlClient";
import MoviesDisplay from "../MoviesDisplay";

const SearchContentWrapper: React.FC<{ query: string }> = ({ query }) => {
  const searchQuery = useSearchQuery({ variables: { query } });

  if (searchQuery.loading) {
    return <div>Search Loading...</div>;
  }

  if (searchQuery.error) {
    return <div>Oops... something went wrong with search</div>;
  }

  if (searchQuery.data?.search) {
    return (
      <div className="flex flex-wrap space-y-4">
        <MoviesDisplay movies={searchQuery.data.search} />
      </div>
    );
  }

  return null;
};

export default SearchContentWrapper;
