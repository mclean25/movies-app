import { list, nonNull, queryField, stringArg } from "nexus";

// TODO: A connection field would be much more appropriate here,
// but punting that complexity for now.
export const search = queryField("search", {
  type: list("Movie"),
  args: { query: nonNull(stringArg()) },
  resolve(_src, { query }, ctx) {
    return ctx.dataSources.moviesApi.search(query);
  },
});
