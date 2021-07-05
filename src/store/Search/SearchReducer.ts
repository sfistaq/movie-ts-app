import { SearchReducer, SearchActions } from "../types";

const movieReducer = (
  state: SearchReducer,
  action: SearchActions
): SearchReducer => {
  switch (action.type) {
    case "SET_TITLE":
      return {
        ...state,
        title: action.title,
      };
    case "SET_YEAR":
      return {
        ...state,
        year: action.year,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.page,
      };
    case "SET_TYPE":
      return {
        ...state,
        searchType: action.searchType,
      };

    default:
      return state;
  }
};

export default movieReducer;
