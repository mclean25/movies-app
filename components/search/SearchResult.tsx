import { useRouter } from "next/router";
import React from "react";
import { Movie } from "../../generated/graphqlClient";

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

export default SearchResult;
