import { FavReducer, FavActions } from "../types";

const favReducer = (state: FavReducer, action: FavActions): FavReducer => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.data, ...state.watchlist],
      };
    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter((item) => item.imdbID !== action.id),
      };
    case "ADD_TO_WATCHED":
      return {
        ...state,
        watched: [action.data, ...state.watched],
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((item) => item.imdbID !== action.id),
      };
    case "MOVE_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (item) => item.imdbID !== action.data.imdbID
        ),
        watched: [action.data, ...state.watched],
      };
    default:
      return state;
  }
};

export default favReducer;
