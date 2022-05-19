import type { NextPage } from "next";
import PageLayout from "../components/layout/PageLayout";
import SearchBar from "../components/search/SearchBar";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <div className="space-y-2">
        <SearchBar />
      </div>
    </PageLayout>
  );
};

export default Home;
