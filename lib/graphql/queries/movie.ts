import { intArg, nonNull, queryField } from "nexus";

// TODO: A connection field would be much more appropriate here,
// but punting that complexity for now.
export const movie = queryField("movie", {
  type: "Movie",
  args: { id: nonNull(intArg()) },
  resolve(_src, { id }, ctx) {
    return ctx.dataSources.moviesApi.getMovie(id);
  },
});
