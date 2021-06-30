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

interface ReducerTypes {
  watchlist: DataTypes[];
  watched: DataTypes[];
}

type Action =
  | { type: "ADD_TO_WATCHLIST"; data: DataTypes }
  | { type: "REMOVE_FROM_WATCHLIST"; id: string }
  | { type: "ADD_TO_WATCHED"; data: DataTypes }
  | { type: "REMOVE_FROM_WATCHED"; id: string }
  | { type: "MOVE_TO_WATCHED"; data: DataTypes };

const favouriteReducer = (
  state: ReducerTypes,
  action: Action
): ReducerTypes => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.data, ...state.watchlist],
      };
    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter((item) => item.imdbID !== action.id),
      };
    case "ADD_TO_WATCHED":
      return {
        ...state,
        watched: [action.data, ...state.watched],
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((item) => item.imdbID !== action.id),
      };
    case "MOVE_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (item) => item.imdbID !== action.data.imdbID
        ),
        watched: [action.data, ...state.watched],
      };
    default:
      return state;
  }
};

export default favouriteReducer;
