import React, { createContext, useReducer, useEffect } from "react";
import { FavReducer, FavActions, FavContextType } from "../../types/types";
import favReducer from "./FavReducer";

const watchlistStore: string | null = localStorage.getItem("watchlist");
const watchedStore: string | null = localStorage.getItem("watched");

const initState: FavReducer = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(watchlistStore!)
    : [],
  watched: localStorage.getItem("watchlist") ? JSON.parse(watchedStore!) : [],
};

const dispatch = (action: FavActions) => {};

export const FavContext = createContext<FavContextType>({
  state: initState,
  dispatch: dispatch,
});

const FavState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(favReducer, initState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const value = { state, dispatch };

  return <FavContext.Provider value={value}>{children}</FavContext.Provider>;
};

export default FavState;
