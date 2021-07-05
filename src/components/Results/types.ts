export interface Response {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface Data {
  Response: string;
  Search: Response[];
  totalResults: string;
}
