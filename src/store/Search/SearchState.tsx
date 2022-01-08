import React, { createContext, useReducer } from "react";
import {
  SearchActions,
  SearchContextType,
  SearchReducer,
} from "../../types/types";

import searchReducer from "./SearchReducer";

const initState: SearchReducer = {
  title: "",
  year: "",
  page: 1,
  searchType: "movie",
};

const dispatch = (action: SearchActions) => {};

export const SearchContext = createContext<SearchContextType>({
  state: initState,
  dispatch: dispatch,
});

const SearchState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initState);

  const value = { state, dispatch };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchState;
