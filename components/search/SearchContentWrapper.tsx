import React from "react";
import { useSearchQuery } from "../../generated/graphqlClient";
import SearchContent from "./SearchContent";

const SearchContentWrapper: React.FC<{ query: string }> = ({ query }) => {
  const searchQuery = useSearchQuery({ variables: { query } });

  return (
    <div className="z-10 absolute w-full bg-white p-6 border border-gray-400 rounded-md">
      <SearchContent searchQuery={searchQuery} />
    </div>
  );
};

export default SearchContentWrapper;
