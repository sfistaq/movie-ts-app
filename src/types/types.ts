import * as ActionTypes from "../store/actionTypes";

export interface RatingsType {
  Source: string;
  Value: string;
}
export interface OMDBData {
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

export interface FavContextTypes {
  watchlist: OMDBData[];
  watched: OMDBData[];
  addToWatchlist: (data: OMDBData) => void;
  removeFromWatchlist: (id: string) => void;
  addToWatched: (data: OMDBData) => void;
  removeFromWatched: (id: string) => void;
  moveToWatched: (data: OMDBData) => void;
}

export interface FavReducer {
  watchlist: OMDBData[];
  watched: OMDBData[];
}

export type FavActions =
  | { type: "ADD_TO_WATCHLIST"; data: OMDBData }
  | { type: "REMOVE_FROM_WATCHLIST"; id: string }
  | { type: "ADD_TO_WATCHED"; data: OMDBData }
  | { type: "REMOVE_FROM_WATCHED"; id: string }
  | { type: "MOVE_TO_WATCHED"; data: OMDBData };

export interface NavLinks {
  id: number;
  text: string;
  link: string;
}

export interface SelectData {
  id: number;
  value: string;
}

export interface MovieData {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface ResponseData {
  Response: string;
  Search: MovieData[];
  totalResults: string;
}

export interface Breakpoints {
  xl: string;
  l: string;
  m: string;
  s: string;
}

export type SearchActions =
  | { type: typeof ActionTypes.SET_TITLE; payload: string }
  | { type: typeof ActionTypes.SET_YEAR; payload: string }
  | { type: typeof ActionTypes.SET_PAGE; payload: number }
  | { type: typeof ActionTypes.SET_TYPE; payload: string };

export interface SearchReducer {
  title: string;
  year: string;
  page: number;
  searchType: string;
}
export type Dispatch = (action: SearchActions) => void;

export interface SearchContextType {
  state: SearchReducer;
  dispatch: Dispatch;
}
