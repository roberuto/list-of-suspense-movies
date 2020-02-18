export type Resource<T> = {
  read: () => T;
};

export type WrappedResource = {
  movie_0: Resource<Movie>;
  movie_1: Resource<Movie>;
  movie_2: Resource<Movie>;
  movie_3: Resource<Movie>;
  movie_4: Resource<Movie>;
  movie_5: Resource<Movie>;
  movie_6: Resource<Movie>;
  movie_7: Resource<Movie>;
  movie_8: Resource<Movie>;
  movie_9: Resource<Movie>;
};

export type FetchSuperheroesData = {
  ({
    superheroesDelay,
    superpowersDelay
  }: {
    superheroesDelay: number;
    superpowersDelay: number;
  }): (heroId: number) => WrappedResource;
};

export type Movie = { id: number; img: string };
