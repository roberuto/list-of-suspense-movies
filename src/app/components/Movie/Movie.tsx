import React from "react";

import { MovieProps } from "./Movie.types";

export const Movie: React.FC<MovieProps> = ({ movie }) => {
  return <img src={movie.img} alt="movie" />;
};
