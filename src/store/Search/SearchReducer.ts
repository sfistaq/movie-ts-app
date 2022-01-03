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
        title: action.title,
      };
    case actionTypes.SET_YEAR:
      return {
        ...state,
        year: action.year,
      };
    case actionTypes.SET_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case actionTypes.SET_TYPE:
      return {
        ...state,
        searchType: action.searchType,
      };

    default:
      return state;
  }
};

export default movieReducer;
