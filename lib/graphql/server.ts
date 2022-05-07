import { ApolloServer } from "apollo-server-micro";
import { Context } from "./context";
import { schema } from "./schema";

const baseUrl = process.env.API_BASE_URL || "error";

export const server = new ApolloServer({
  schema,
  async context(ctx: Context) {
    // const accessToken = await getAccessTokenSafe(ctx.req, ctx.res);

    return { ...ctx };
  },
  dataSources() {
    return {
      // farmersApi: new FarmersApi(baseUrl),
      // modulesApi: new ModulesApi(baseUrl),
      // programsApi: new ProgramsApi(baseUrl),
    };
  },
});
