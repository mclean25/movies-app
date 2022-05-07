import { NextApiHandler } from "next";
import { server } from "../../lib/graphql/server";

const startServer = server.start();

const handleGraphQL: NextApiHandler = async (req, res): Promise<void> => {
  res.setHeader("Authorization", `Bearer ${process.env.DB_API_KEY_V4}}`);

  await startServer;
};

export default handleGraphQL;

export const config = {
  api: {
    bodyParser: false,
  },
};
