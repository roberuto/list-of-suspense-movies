import { random } from "../utils/random";

export const randomizedFetch = (idx: number) => {
  const rendomTimeout = random(1000, 3000);
  return new Promise(resolve => {
    setTimeout(resolve, rendomTimeout, movies[idx]);
  });
};

export const timeoutFetch = (idx: number, timeout: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout, movies[idx]);
  });
};

export const movies = [
  { id: 0, img: "assets/movie_0.jpg" },
  { id: 1, img: "assets/movie_1.jpg" },
  { id: 2, img: "assets/movie_2.jpg" },
  { id: 3, img: "assets/movie_3.jpg" },
  { id: 4, img: "assets/movie_4.jpg" },
  { id: 5, img: "assets/movie_5.jpg" },
  { id: 6, img: "assets/movie_6.jpg" },
  { id: 7, img: "assets/movie_7.jpg" },
  { id: 8, img: "assets/movie_8.jpg" },
  { id: 9, img: "assets/movie_9.jpg" }
];

export const NUMBER_OF_ITEMS = movies.length;
