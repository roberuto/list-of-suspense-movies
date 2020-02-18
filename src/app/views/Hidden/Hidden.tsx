import React from "react";
import { Link } from "react-router-dom";

import { MoviesList } from "app/components/MoviesList/MoviesList";

import { fetchMovie } from "api/movie";

export const Hidden = () => {
  const resource = fetchMovie();

  return (
    <div className="movies">
      <div className="movies-header">
        <div>
          <Link to="/">Back</Link>
        </div>
        <h1>Hide backwards</h1>
      </div>
      <div>
        <MoviesList resource={resource} revealOrder="backwards" tail="hidden" />
      </div>
    </div>
  );
};
