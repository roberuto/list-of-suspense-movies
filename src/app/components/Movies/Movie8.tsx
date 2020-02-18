import React from "react";

import { Movie } from "../Movie/Movie";

import { MovieProps } from "./Movie.types";

export const Movie8: React.FC<MovieProps> = ({ resource }) => {
  const movie = resource.movie_8.read();

  return <Movie movie={movie} />;
};
