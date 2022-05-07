import { makeSchema } from "nexus";
import { join } from "path";
import * as queries from "./queries";
import * as types from "./types";

export const schema = makeSchema({
  types: [queries, types],
  contextType: {
    module: join(process.cwd(), "lib/graphql/context.ts"),
    export: "Context",
    alias: "ctx",
  },
  sourceTypes: {
    modules: [
      {
        module: join(process.cwd(), "lib/graphql/sources/api.ts"),
        alias: "api",
      },
    ],
  },
  outputs: {
    schema: join(process.cwd(), "generated/schema.graphql"),
    typegen: join(process.cwd(), "generated/graphqlServer.ts"),
  },
});
