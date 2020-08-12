import { nowPlayingMovie, similarMovie } from "../../services/movie";
import {
  MOVIE_NOW_PLAYING,
  MOVIE_SIMILAR,
  MOVIE_SIMILAR_RESET,
} from "../constants";

export const onNowPlayingMovie = (page: number = 1) => (dispatch: any) => {
  dispatch({
    type: MOVIE_NOW_PLAYING,
    payload: nowPlayingMovie(page),
  });
};

export const onSimilarMNovie = (page: number = 1, movie_id: number) => (
  dispatch: any
) => {
  dispatch({
    type: MOVIE_SIMILAR,
    payload: similarMovie(page, movie_id),
  });
};

export const onSimilarMovieReset = () => (dispatch: any) => {
  dispatch({
    type: MOVIE_SIMILAR_RESET,
  });
};
