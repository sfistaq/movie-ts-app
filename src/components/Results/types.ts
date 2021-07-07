export interface MovieDataResponse {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface Data {
  Response: string;
  Search: MovieDataResponse[];
  totalResults: string;
}
