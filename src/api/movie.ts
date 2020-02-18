import { randomizedFetch, timeoutFetch } from "./fetchData";

import { Resource, WrappedResource } from "./movie.types";

export const fetchMovie = (timers?: number[] | false): WrappedResource => {
  const promises: { [key: string]: Promise<any> } = {};
  for (let idx = 0; idx < 10; idx++) {
    promises[`fetchMovie_${idx}`] = timers
      ? timeoutFetch(idx, timers[idx])
      : randomizedFetch(idx);
  }

  const wrappedPromises: any = {};
  for (let idx = 0; idx < 10; idx++) {
    wrappedPromises[`movie_${idx}`] = wrapPromise(
      promises[`fetchMovie_${idx}`]
    );
  }

  return wrappedPromises;
};

const wrapPromise = (promise: Promise<any>): Resource<any> => {
  let status = "pending";
  let result: any;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
};
