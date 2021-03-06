import React from "react";

import { Movie } from "../Movie/Movie";

import { MovieProps } from "./Movie.types";

export const Movie1: React.FC<MovieProps> = ({ resource }) => {
  const movie = resource.movie_1.read();

  return <Movie movie={movie} />;
};
