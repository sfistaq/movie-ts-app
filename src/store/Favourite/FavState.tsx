import React, { createContext, useReducer, useEffect } from "react";
import { OMDBData, FavContextTypes } from "../../types/types";
import * as actionTypes from "../actionTypes";
import favReducer from "./FavReducer";

const watchlistStore: string | null = localStorage.getItem("watchlist");
const watchedStore: string | null = localStorage.getItem("watched");

const initState: FavContextTypes = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(watchlistStore!)
    : [],
  watched: localStorage.getItem("watchlist") ? JSON.parse(watchedStore!) : [],
  addToWatchlist: () => {},
  removeFromWatchlist: () => {},
  addToWatched: () => {},
  removeFromWatched: () => {},
  moveToWatched: () => {},
};

export const FavContext = createContext<FavContextTypes>(initState);

const FavState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(favReducer, initState);

  const addToWatchlist = (data: OMDBData) => {
    dispatch({
      type: actionTypes.ADD_TO_WATCHLIST,
      data: data,
    });
  };

  const removeFromWatchlist = (id: string) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_WATCHLIST,
      id: id,
    });
  };

  const addToWatched = (data: OMDBData) => {
    dispatch({
      type: actionTypes.ADD_TO_WATCHED,
      data: data,
    });
  };

  const removeFromWatched = (id: string) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_WATCHED,
      id: id,
    });
  };

  const moveToWatched = (data: OMDBData) => {
    dispatch({
      type: actionTypes.MOVE_TO_WATCHED,
      data: data,
    });
  };

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  return (
    <FavContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addToWatchlist: addToWatchlist,
        removeFromWatchlist: removeFromWatchlist,
        addToWatched: addToWatched,
        removeFromWatched: removeFromWatched,
        moveToWatched: moveToWatched,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};

export default FavState;
