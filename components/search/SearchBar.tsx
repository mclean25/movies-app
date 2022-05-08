import React, { useState } from "react";
import SearchContentWrapper from "./SearchContentWrapper";

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

export default SearchBar;
