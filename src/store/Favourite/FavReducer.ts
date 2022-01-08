import { FavReducer, FavActions, OMDBData } from "../../types/types";
import * as actionTypes from "../actionTypes";

const favReducer = (state: FavReducer, action: FavActions): FavReducer => {
  switch (action.type) {
    case actionTypes.ADD_TO_WATCHLIST:
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case actionTypes.REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (item: OMDBData) => item.imdbID !== action.payload
        ),
      };
    case actionTypes.ADD_TO_WATCHED:
      return {
        ...state,
        watched: [action.payload, ...state.watched],
      };
    case actionTypes.REMOVE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter(
          (item: OMDBData) => item.imdbID !== action.payload
        ),
      };
    case actionTypes.MOVE_TO_WATCHED:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (item: OMDBData) => item.imdbID !== action.payload.imdbID
        ),
        watched: [action.payload, ...state.watched],
      };
    default:
      return state;
  }
};

export default favReducer;
