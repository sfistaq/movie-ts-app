import React from "react";

import {
  Container,
  ResultsItems,
  Card,
  Image,
  Description,
  ButtonsContainer,
  Button,
  Pages,
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
}

//! JEZELI POSTER = 'N/A' DODAJ POSTER ZASTĘPCZY
const Results: React.FC<Props> = ({ data, page, setPage }) => {
  const searchResultsLength = +data.totalResults;
  const pagesNumber =
    searchResultsLength <= 10 ? 1 : Math.floor(+data.totalResults / 10);

  return (
    <Container>
      <ResultsItems>
        {data.Search.map((item) => (
          <Card
            onClick={() => console.log(item)}
            key={item.imdbID}
            to={`/details/${item.imdbID}`}
          >
            <Image
              src={item.Poster === "N/A" ? blankPosterImage : item.Poster}
              alt={item.Title}
            />
            <Description>{item.Title}</Description>
          </Card>
        ))}
      </ResultsItems>
      <ButtonsContainer>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREV
        </Button>
        <Pages>
          {page} / {pagesNumber}
        </Pages>
        <Button
          disabled={
            page === Math.floor(+data.totalResults / 10) || pagesNumber === 1
          }
          onClick={() => setPage(page + 1)}
        >
          NEXT
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Results;
