import { debounce } from "lodash";
import React, { useState } from "react";
import PopularMovies from "../popular-movies/PopularMovies";
import SearchContentWrapper from "./SearchContentWrapper";

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");

  const debounced = debounce((e) => {
    setSearchText(e.target.value);
  }, 2000);

  return (
    <div className="relative w-full">
      <input
        className="w-full border border-gray-400 rounded-md px-4 py-2"
        placeholder="Search..."
        onChange={debounced}
      ></input>
      {searchText === "" ? (
        <>
          <h2 className="text-xl font-bold">Popular Movies</h2>
          <PopularMovies />
        </>
      ) : (
        <SearchContentWrapper query={searchText} />
      )}
    </div>
  );
};

export default SearchBar;
