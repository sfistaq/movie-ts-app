export interface RatingsType {
  Source: string;
  Value: string;
}

export interface DataTypes {
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

export interface FavTypes {
  watchlist: DataTypes[];
  watched: DataTypes[];
  addToWatchlist: (data: DataTypes) => void;
  removeFromWatchlist: (id: string) => void;
  addToWatched: (data: DataTypes) => void;
  removeFromWatched: (id: string) => void;
  moveToWatched: (data: DataTypes) => void;
}

export interface FavReducer {
  watchlist: DataTypes[];
  watched: DataTypes[];
}

export type FavActions =
  | { type: "ADD_TO_WATCHLIST"; data: DataTypes }
  | { type: "REMOVE_FROM_WATCHLIST"; id: string }
  | { type: "ADD_TO_WATCHED"; data: DataTypes }
  | { type: "REMOVE_FROM_WATCHED"; id: string }
  | { type: "MOVE_TO_WATCHED"; data: DataTypes };

export interface SearchTypes {
  title: string;
  year: string;
  page: number;
  searchType: string;
  setTitleHandler: (title: string) => void;
  setYearHandler: (year: string) => void;
  setPageHandler: (page: number) => void;
  setTypeHandler: (type: string) => void;
}

export interface SearchReducer {
  title: string;
  year: string;
  page: number;
  searchType: string;
}

export type SearchActions =
  | { type: "SET_TITLE"; title: string }
  | { type: "SET_YEAR"; year: string }
  | { type: "SET_PAGE"; page: number }
  | { type: "SET_TYPE"; searchType: string };
