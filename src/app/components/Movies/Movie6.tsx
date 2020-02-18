import React from "react";

import { Movie } from "../Movie/Movie";

import { MovieProps } from "./Movie.types";

export const Movie6: React.FC<MovieProps> = ({ resource }) => {
  const movie = resource.movie_6.read();

  return <Movie movie={movie} />;
};
