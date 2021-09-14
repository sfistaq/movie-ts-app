import React, { createContext, useReducer } from "react";
import { SearchTypes } from "../../types/types";
import * as actionTypes from "../actionTypes";
import searchReducer from "./SearchReducer";

const initState: SearchTypes = {
  title: "",
  year: "",
  page: 1,
  searchType: "movie",
  setTitleHandler: () => {},
  setYearHandler: () => {},
  setPageHandler: () => {},
  setTypeHandler: () => {},
};

export const SearchContext = createContext<SearchTypes>(initState);

const SearchState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initState);

  const setTitleHandler = (title: string) => {
    dispatch({
      type: actionTypes.SET_TITLE,
      title: title,
    });
  };

  const setYearHandler = (year: string) => {
    dispatch({
      type: actionTypes.SET_YEAR,
      year: year,
    });
  };

  const setPageHandler = (page: number) => {
    dispatch({
      type: actionTypes.SET_PAGE,
      page: page,
    });
  };

  const setTypeHandler = (type: string) => {
    dispatch({
      type: actionTypes.SET_TYPE,
      searchType: type,
    });
  };

  return (
    <SearchContext.Provider
      value={{
        title: state.title,
        year: state.year,
        page: state.page,
        searchType: state.searchType,
        setTitleHandler: setTitleHandler,
        setYearHandler: setYearHandler,
        setPageHandler: setPageHandler,
        setTypeHandler: setTypeHandler,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchState;
