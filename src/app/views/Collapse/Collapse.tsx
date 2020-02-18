import React from "react";
import { Link } from "react-router-dom";

import { MoviesList } from "app/components/MoviesList/MoviesList";

import { fetchMovie } from "api/movie";

export const Collapse = () => {
  const resource = fetchMovie();

  return (
    <div className="movies">
      <div className="movies-header">
        <div>
          <Link to="/">Back</Link>
        </div>
        <h1>Go forward and collapse</h1>
      </div>
      <div>
        <MoviesList
          resource={resource}
          revealOrder="forwards"
          tail="collapsed"
        />
      </div>
    </div>
  );
};
