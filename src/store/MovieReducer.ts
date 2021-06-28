type SearchTypes = {
  title: string;
  year: number | null;
  page: number;
  searchType: string;
};

type Action =
  | { type: "SET_TITLE"; title: string }
  | { type: "SET_YEAR"; year: number | null }
  | { type: "SET_PAGE"; page: number }
  | { type: "SET_TYPE"; searchType: string }
  | { type: "" };

const movieReducer = (state: SearchTypes, action: Action): SearchTypes => {
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
