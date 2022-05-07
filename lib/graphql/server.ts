import { ApolloServer } from "apollo-server-micro";
import { Pool } from "undici";
import { Context } from "./context";
import { MoviesApi } from "./moviesDataSource";
import { schema } from "./schema";

const baseUrl = "https://api.themoviedb.org";
const pool = new Pool(baseUrl);

export const server = new ApolloServer({
  schema,
  async context(ctx: Context) {
    // const accessToken = await getAccessTokenSafe(ctx.req, ctx.res);

    return { ...ctx };
  },
  dataSources() {
    return {
      moviesApi: new MoviesApi(baseUrl, pool),
      // modulesApi: new ModulesApi(baseUrl),
      // programsApi: new ProgramsApi(baseUrl),
    };
  },
});
