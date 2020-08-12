import { ListMovie } from "./list";

export interface ListMovieInitialState {
  lists: ListMovie;
}

export const intialState: ListMovieInitialState = {
  lists: {
    loading: false,
    total_pages: -1,
    results: [],
  },
};
