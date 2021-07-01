interface MovieReducerTypes {
  title: string;
  year: string;
  page: number;
  searchType: string;
}

type Action =
  | { type: "SET_TITLE"; title: string }
  | { type: "SET_YEAR"; year: string }
  | { type: "SET_PAGE"; page: number }
  | { type: "SET_TYPE"; searchType: string };

const movieReducer = (
  state: MovieReducerTypes,
  action: Action
): MovieReducerTypes => {
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
