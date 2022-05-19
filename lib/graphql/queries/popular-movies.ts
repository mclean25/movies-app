import { intArg, list, nonNull, queryField } from "nexus";

// TODO: A connection field would be much more appropriate here,
// but punting that complexity for now.
export const pupularMovies = queryField("popularMovies", {
  type: nonNull(list(nonNull("Movie"))),
  args: { page: intArg() },
  resolve(_src, { page }, ctx) {
    return ctx.dataSources.moviesApi.getMovies(page);
  },
});
