import { HTTPDataSource } from "apollo-datasource-http";
import { Pool } from "undici";
import { Movie } from "./sources/api";

export class MoviesApi extends HTTPDataSource {
  apiKey = process.env.NEXT_PUBLIC_DB_API_KEY_V3;

  constructor(baseUrl: string, pool: Pool) {
    super(baseUrl, { pool });
  }

  async getMovies(): Promise<Movie[]> {
    const response = await this.get<Movie[]>(`/popular?api_key=${this.apiKey}`);

    return response.body;
  }
}
