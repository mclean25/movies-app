import { useRouter } from "next/router";
import React, { useState } from "react";
import { Movie, useSearchQuery } from "../../generated/graphqlClient";

const SearchBar: React.FC = () => {
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

const SearchResult: React.FC<{ movie: Movie }> = ({ movie }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/movies/${movie.id}`)}
      className="flex flex-row cursor-pointer hover:underline"
    >
      <span>{movie.title}</span>
    </div>
  );
};

export default SearchBar;
