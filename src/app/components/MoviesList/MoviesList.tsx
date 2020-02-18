import React, { Suspense, SuspenseList } from "react";

import { Movie0 } from "../Movies/Movie0";
import { Movie1 } from "../Movies/Movie1";
import { Movie2 } from "../Movies/Movie2";
import { Movie3 } from "../Movies/Movie3";
import { Movie4 } from "../Movies/Movie4";
import { Movie5 } from "../Movies/Movie5";
import { Movie6 } from "../Movies/Movie6";
import { Movie7 } from "../Movies/Movie7";
import { Movie8 } from "../Movies/Movie8";
import { Movie9 } from "../Movies/Movie9";
import { Spinner } from "../Spinner/Spinner";

import styles from "./MoviesList.module.css";

import { MoviesListProps } from "./MoviesList.types";

export const MoviesList: React.FC<MoviesListProps> = ({
  resource,
  revealOrder,
  tail
}) => {
  return (
    <div className={styles.moviesList}>
      <SuspenseList revealOrder={revealOrder!} tail={tail!}>
        <Suspense fallback={<Spinner />}>
          <Movie0 resource={resource} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Movie1 resource={resource} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Movie2 resource={resource} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Movie3 resource={resource} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Movie4 resource={resource} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Movie5 resource={resource} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Movie6 resource={resource} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Movie7 resource={resource} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Movie8 resource={resource} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Movie9 resource={resource} />
        </Suspense>
      </SuspenseList>
    </div>
  );
};
