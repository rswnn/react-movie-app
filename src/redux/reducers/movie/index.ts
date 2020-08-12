import { ListMovieInitialState, intialState } from "./_index";
import { ActionWithPayload } from "../_payload";
import { MOVIE_NOW_PLAYING } from "../../constants";

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
      const result = [...state.lists.results, ...action.payload.data.results];
      console.log(intialState.lists.results);
      return {
        ...state,
        lists: {
          results: result,
          loading: false,
          total_pages: action.payload.data.total_pages,
        },
      };
    case MOVIE_NOW_PLAYING + "_REJECTED":
      return {
        ...state,
        lists: {
          result: action.payload.response.data,
          loading: false,
        },
      };
    default:
      return state;
  }
};
