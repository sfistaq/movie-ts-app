import React, { createContext, useReducer } from "react";

interface RatingsType {
  Source: string;
  Value: string;
}

interface DataType {
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
  watchlist: DataType[];
  addToFavourite: (data: DataType) => void;
  removeFromFavourite: (id: string) => void;
}
type Action =
  | { type: "ADD_TO_FAVOURITE"; data: DataType }
  | { type: "REMOVE_FROM_FAVOURITE"; id: string };

const initState: ContextType = {
  watchlist: [],
  addToFavourite: () => {},
  removeFromFavourite: () => {},
};

const favouriteReducer = (state: ContextType, action: Action): ContextType => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        watchlist: [action.data, ...state.watchlist],
      };
    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        watchlist: state.watchlist.filter((item) => item.imdbID !== action.id),
      };
    default:
      return state;
  }
};

export const FavouriteContext = createContext<ContextType>(initState);

const FavouriteState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(favouriteReducer, initState);

  const addToFavourite = (data: DataType) => {
    dispatch({
      type: "ADD_TO_FAVOURITE",
      data: data,
    });
  };

  const removeFromFavourite = (id: string) => {
    dispatch({
      type: "REMOVE_FROM_FAVOURITE",
      id: id,
    });
  };

  return (
    <FavouriteContext.Provider
      value={{
        watchlist: state.watchlist,
        addToFavourite: addToFavourite,
        removeFromFavourite: removeFromFavourite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteState;
