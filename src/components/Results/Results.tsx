import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { FavouriteContext } from "../../store/FavouriteState";

import {
  Container,
  ResultsItems,
  Card,
  Image,
  Description,
  ButtonsContainer,
  Button,
  Pages,
  Status,
} from "./Result.styles";

import blankPosterImage from "../../images/blank-poster.jpeg";

interface Response {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

interface Data {
  Response: string;
  Search: Response[];
  totalResults: string;
}

interface Props {
  data: Data;
  page: number;
  setPage: (num: number) => void;
  buttons: boolean;
}

const Results: React.FC<Props> = ({ data, page, setPage, buttons }) => {
  const { watchlist, watched } = useContext(FavouriteContext);
  const location = useLocation();

  const searchResultsLength = +data.totalResults;
  const pagesNumber =
    searchResultsLength <= 10 ? 1 : Math.floor(+data.totalResults / 10) + 1;

  return (
    <Container>
      <ResultsItems>
        {data.Search.map((item, index) => (
          <Card key={item.imdbID} to={`/details/${item.imdbID}`}>
            {/* {watchlist[index]?.imdbID === item.imdbID &&
              location.pathname === "/" && (
                <Status top="10" color={"#f05454"}>
                  @WATCHLIST
                </Status>
              )}
            {watched[index]?.imdbID === item.imdbID &&
              location.pathname === "/" && (
                <Status top="50" color={"#f05454"}>
                  @WATCHED
                </Status>
              )} */}
            <Image
              onClick={() => console.log(item)}
              src={item.Poster === "N/A" ? blankPosterImage : item.Poster}
              alt={item.Title}
            />
            <Description>{item.Title}</Description>
          </Card>
        ))}
      </ResultsItems>
      {buttons && (
        <ButtonsContainer>
          <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
            PREV
          </Button>
          <Pages>
            {page} / {pagesNumber}
          </Pages>
          <Button
            disabled={
              page === Math.floor(+data.totalResults / 10) + 1 ||
              pagesNumber === 1
            }
            onClick={() => setPage(page + 1)}
          >
            NEXT
          </Button>
        </ButtonsContainer>
      )}
    </Container>
  );
};

export default Results;
