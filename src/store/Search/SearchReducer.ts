import { SearchReducer, SearchActions } from "../../types/types";
import * as actionTypes from "../actionTypes";

const movieReducer = (
  state: SearchReducer,
  action: SearchActions
): SearchReducer => {
  switch (action.type) {
    case actionTypes.SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case actionTypes.SET_YEAR:
      return {
        ...state,
        year: action.payload,
      };
    case actionTypes.SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case actionTypes.SET_TYPE:
      return {
        ...state,
        searchType: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
