import React, { createContext, useReducer, useEffect } from "react";
import { DataTypes, FavTypes } from "../types";
import favReducer from "./FavReducer";

//TODO
const watchlistStore: any = localStorage.getItem("watchlist");
const watchedStore: any = localStorage.getItem("watched");

const initState: FavTypes = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(watchlistStore)
    : [],
  watched: localStorage.getItem("watchlist") ? JSON.parse(watchedStore) : [],
  addToWatchlist: () => {},
  removeFromWatchlist: () => {},
  addToWatched: () => {},
  removeFromWatched: () => {},
  moveToWatched: () => {},
};

export const FavContext = createContext<FavTypes>(initState);

const FavState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(favReducer, initState);

  const addToWatchlist = (data: DataTypes) => {
    dispatch({
      type: "ADD_TO_WATCHLIST",
      data: data,
    });
  };

  const removeFromWatchlist = (id: string) => {
    dispatch({
      type: "REMOVE_FROM_WATCHLIST",
      id: id,
    });
  };

  const addToWatched = (data: DataTypes) => {
    dispatch({
      type: "ADD_TO_WATCHED",
      data: data,
    });
  };

  const removeFromWatched = (id: string) => {
    dispatch({
      type: "REMOVE_FROM_WATCHED",
      id: id,
    });
  };

  const moveToWatched = (data: DataTypes) => {
    dispatch({
      type: "MOVE_TO_WATCHED",
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
