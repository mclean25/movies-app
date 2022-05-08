import { objectType } from "nexus";

export const Movie = objectType({
  name: "Movie",
  definition(t) {
    t.id("id");
    t.string("title");
    t.string("overview");
    t.string("poster_path");
    t.string("release_date");
    t.string("vote_average");
  },
});
