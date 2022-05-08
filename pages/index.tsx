import type { NextPage } from "next";
import PageLayout from "../components/layout/PageLayout";
import PopularMovies from "../components/popular-movies/PopularMovies";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Popular Movies</h2>
        <PopularMovies />
      </div>
    </PageLayout>
  );
};

export default Home;
