import { HTTPDataSource } from "apollo-datasource-http";
import { Pool } from "undici";
import { Movie, PopularMoviesResponse } from "./sources/api";

export class MoviesApi extends HTTPDataSource {
  apiKey = process.env.NEXT_PUBLIC_DB_API_KEY_V3;

  constructor(baseUrl: string, pool: Pool) {
    super(baseUrl, { pool });
  }

  async getMovies(pageId: number | null | undefined): Promise<Movie[]> {
    const response = await this.get<PopularMoviesResponse>(
      `/3/movie/popular?api_key=${this.apiKey}&page=${pageId ?? 1}`
    );

    // How to properly surface errors here to the graphql client? Not sure...
    if (response.statusCode !== 200 || !response.body.results) {
      throw Error("Didn't get any results back");
    }

    return response.body.results;
  }

  async getMovie(id: number): Promise<Movie> {
    const response = await this.get<Movie>(
      `/3/movie/${id}?api_key=${this.apiKey}`
    );

    return response.body;
  }
}
