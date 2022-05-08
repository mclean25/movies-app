import { GetServerSideProps, NextPage } from "next/types";
import React from "react";
import Movie from "../../../components/movie/Movie";

const MovieDetails: NextPage<{ id: number }> = ({ id }) => {
  return <Movie id={id} />;
};

export default MovieDetails;

function flattenParam(param?: string | string[]): string | undefined {
  if (!param) return;

  return Array.isArray(param) ? param[0] : param;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = Number(flattenParam(params?.id));

  console.log("ID: ", id);

  if (!id || isNaN(id)) return { notFound: true };

  return {
    props: {
      id: id,
    },
  };
};
