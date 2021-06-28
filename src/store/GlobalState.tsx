import React, { createContext, useReducer } from "react";
import movieReducer from "./MovieReducer";

type ContextType = {
  title: string;
  year: number | null;
  page: number;
  searchType: string;
  setTitleHandler: (title: string) => void;
  setYearHandler: (year: number | null) => void;
  setPageHandler: (page: number) => void;
  setTypeHandler: (type: string) => void;
};

const initState: ContextType = {
  title: "",
  year: null,
  page: 1,
  searchType: "movie",
  setTitleHandler: () => {},
  setYearHandler: () => {},
  setPageHandler: () => {},
  setTypeHandler: () => {},
};

export const MovieContext = createContext<ContextType>(initState);

const GlobalState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initState);

  const setTitleHandler = (title: string) => {
    dispatch({
      type: "SET_TITLE",
      title: title,
    });
  };
  const setYearHandler = (year: number | null) => {
    dispatch({
      type: "SET_YEAR",
      year: year,
    });
  };

  const setPageHandler = (page: number) => {
    dispatch({
      type: "SET_PAGE",
      page: page,
    });
  };
  const setTypeHandler = (type: string) => {
    dispatch({
      type: "SET_TYPE",
      searchType: type,
    });
  };

  return (
    <MovieContext.Provider
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
    </MovieContext.Provider>
  );
};

export default GlobalState;
