import http from "./_http-service";
import api, { api_key } from "../config";

export const nowPlayingMovie = (page: number = 1) => {
  return http.get(api + `/movie/now_playing?api_key=${api_key}&page=${page}`);
};

export const similarMovie = (page: number = 1, movie_id: number) => {
  return http.get(
    api +
      `/movie/${movie_id}/similar?api_key=${api_key}&language=en-US&page=${page}`
  );
};
