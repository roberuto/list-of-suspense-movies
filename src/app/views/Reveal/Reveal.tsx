import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSettingsState } from "hooks";

import { Settings } from "app/components/Settings/Settings";
import { MoviesList } from "app/components/MoviesList/MoviesList";

import { fetchMovie } from "api/movie";

export const Reveal: React.FC = () => {
  const { isRandom, timers } = useSettingsState();
  const [resource, setResource] = useState(fetchMovie());
  const [revealOrder, setRevealOrder] = useState("forwards");

  useEffect(() => {
    setResource(fetchMovie(!isRandom && timers));
  }, [isRandom, revealOrder, timers]);

  return (
    <div className="movies">
      <div className="movies-header">
        <div>
          <Link to="/">Back</Link>
        </div>
        <h1>Reveal The Order</h1>
        <Settings revealOrder={revealOrder} setRevealOrder={setRevealOrder} />
      </div>
      <div>
        <MoviesList resource={resource} revealOrder={revealOrder} />
      </div>
    </div>
  );
};
