import React from "react";

import { Movie } from "../Movie/Movie";

import { MovieProps } from "./Movie.types";

export const Movie7: React.FC<MovieProps> = ({ resource }) => {
  const movie = resource.movie_7.read();

  return <Movie movie={movie} />;
};
