import React, { createContext, useReducer } from "react";
import favouriteReducer from "./FavouriteReducer";

interface RatingsType {
  Source: string;
  Value: string;
}

interface DataTypes {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Ratings: RatingsType[];
  Response: string;
  Type: string;
  Website: string;
  Writer: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}

interface ContextType {
  watchlist: DataTypes[];
  watched: DataTypes[];
  addToWatchlist: (data: DataTypes) => void;
  removeFromWatchlist: (id: string) => void;
  addToWatched: (data: DataTypes) => void;
  removeFromWatched: (id: string) => void;
  moveToWatched: (data: DataTypes) => void;
}

const initState: ContextType = {
  watchlist: [],
  watched: [],
  addToWatchlist: () => {},
  removeFromWatchlist: () => {},
  addToWatched: () => {},
  removeFromWatched: () => {},
  moveToWatched: () => {},
};

export const FavouriteContext = createContext<ContextType>(initState);

const FavouriteState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(favouriteReducer, initState);

  //TODO
  // useEffect(() => {
  //   localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  //   localStorage.setItem("watched", JSON.stringify(state.watched));
  // }, [state]);

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

  return (
    <FavouriteContext.Provider
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
    </FavouriteContext.Provider>
  );
};

export default FavouriteState;
