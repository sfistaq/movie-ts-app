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

export interface SearchContextTypes {
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
