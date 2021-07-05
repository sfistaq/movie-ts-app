import { Data } from "./types";
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

interface Props {
  data: Data;
  page: number;
  setPage: (num: number) => void;
  buttons: boolean;
}

const Results: React.FC<Props> = ({ data, page, setPage, buttons }) => {
  const searchResultsLength = +data.totalResults;
  const pagesNumber =
    searchResultsLength <= 10 ? 1 : Math.floor(+data.totalResults / 10) + 1;

  return (
    <Container>
      <ResultsItems>
        {data.Search.map((item, index) => (
          <Card key={item.imdbID} to={`/details/${item.imdbID}`}>
            <Image
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
