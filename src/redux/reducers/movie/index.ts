import { ListMovieInitialState, intialState } from "./_index";
import { ActionWithPayload } from "../_payload";
import {
  MOVIE_NOW_PLAYING,
  MOVIE_SIMILAR,
  MOVIE_SIMILAR_RESET,
} from "../../constants";

export default (
  state: ListMovieInitialState = intialState,
  action: ActionWithPayload
) => {
  switch (action.type) {
    case MOVIE_NOW_PLAYING + "_PENDING":
      return {
        ...state,
        lists: {
          ...state.lists,
          ...intialState.lists,
          loading: true,
        },
      };
    case MOVIE_NOW_PLAYING + "_FULFILLED":
      return {
        ...state,
        lists: {
          results: action.payload.data.results,
          loading: false,
          total_pages: action.payload.data.total_pages,
        },
      };
    case MOVIE_NOW_PLAYING + "_REJECTED":
      return {
        ...state,
        lists: {
          result: action.payload.response,
          loading: false,
        },
      };
    case MOVIE_SIMILAR + "_PENDING":
      return {
        ...state,
        movie_similar: {
          ...state.movie_similar,
          ...intialState.movie_similar,
          loading: true,
        },
      };
    case MOVIE_SIMILAR + "_FULFILLED":
      return {
        ...state,
        movie_similar: {
          results: action.payload.data.results,
          loading: false,
          total_pages: action.payload.data.total_pages,
        },
      };
    case MOVIE_SIMILAR + "_REJECTED":
      return {
        ...state,
        movie_similar: {
          result: action.payload.response.data,
          loading: false,
        },
      };

    case MOVIE_SIMILAR_RESET:
      return {
        ...state,
        movie_similar: {
          ...state.movie_similar,
          ...intialState.movie_similar,
          loading: false,
        },
      };
    default:
      return state;
  }
};
