import React from "react";

import { Movie } from "../Movie/Movie";

import { MovieProps } from "./Movie.types";

export const Movie2: React.FC<MovieProps> = ({ resource }) => {
  const movie = resource.movie_2.read();

  return <Movie movie={movie} />;
};
