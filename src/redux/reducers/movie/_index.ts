import { ListMovie } from "./list";

export interface ListMovieInitialState {
  lists: ListMovie;
  movie_similar: ListMovie;
}

export const intialState: ListMovieInitialState = {
  lists: {
    loading: false,
    total_pages: -1,
    results: [],
  },
  movie_similar: {
    loading: false,
    total_pages: -1,
    results: [],
  },
};
