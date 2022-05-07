import { NextApiRequest, NextApiResponse } from "next";
import { MoviesApi } from "./moviesDataSource";

export interface DataSources {
  moviesApi: MoviesApi;
}

export interface Context {
  dataSources: DataSources;
  req: NextApiRequest;
  res: NextApiResponse;
}
