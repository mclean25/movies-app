import { queryField } from "nexus";

export const movies = queryField("movie", {
  type: "Movie",
  resolve(_src, _, ctx) {
    return ctx.dataSources.moviesApi.getMovies();
  },
});
