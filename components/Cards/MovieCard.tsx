import { useRouter } from "next/router";
import React from "react";
import { Movie } from "../../generated/graphqlClient";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const router = useRouter();
  const backgroundImageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div
      onClick={() => router.push(`/movies/${movie.id}`)}
      className={`group cursor-pointer border relative border-gray-100 rounded-md h-60 w-40`}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="group-hover:bg-opacity-0 relative w-full h-full bg-black bg-opacity-10">
        <div className="absolute bottom-0 w-full bg-black bg-opacity-40 px-2 py-2">
          <h1 className="group-hover:underline text-white">{movie.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
