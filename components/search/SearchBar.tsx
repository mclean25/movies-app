import React, { useState } from "react";
import { useSearchQuery } from "../../generated/graphqlClient";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <div className="relative w-full">
      <input
        className="w-full border border-gray-400 rounded-md px-4 py-2"
        placeholder="Search..."
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      {searchText && <SearchContentWrapper query={searchText} />}
    </div>
  );
};

const SearchContentWrapper: React.FC<{ query: string }> = ({ query }) => {
  const searchQuery = useSearchQuery({ variables: { query } });

  return (
    <div className="z-10 absolute w-full bg-white p-6 border border-gray-400 rounded-md">
      <SearchContent searchQuery={searchQuery} />
    </div>
  );
};

const SearchContent: React.FC<{
  searchQuery: ReturnType<typeof useSearchQuery>;
}> = ({ searchQuery }) => {
  if (searchQuery.loading) {
    return <span>Loading...</span>;
  }
  if (searchQuery.error) {
    return <span>Oops... something went wrong.</span>;
  }
  if (searchQuery.data?.search && searchQuery.data.search.length > 0) {
    return <span>Found stuff...</span>;
  }

  return <span>0 results found</span>;
};

export default SearchBar;
