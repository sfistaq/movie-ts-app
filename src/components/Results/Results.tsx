import { Data, MovieDataResponse } from "../../types/types";
import {
  Container,
  ResultsItems,
  Card,
  Image,
  Description,
  ButtonsContainer,
  Pages,
} from "./Result.styles";
import Button from "../Button/Button";
import blankPosterImage from "../../assets/images/blank-poster.jpeg";

interface Props {
  data: Data;
  page: number;
  setPage: (page: number) => void;
  buttons: boolean;
}

const Results: React.FC<Props> = ({ data, page, setPage, buttons }) => {
  const searchResultsLength = +data.totalResults;
  const pagesNumber =
    searchResultsLength <= 10 ? 1 : Math.floor(+data.totalResults / 10) + 1;
  return (
    <Container>
      <ResultsItems>
        {data.Search.map((item: MovieDataResponse) => (
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
          <div onClick={() => setPage(page - 1)}>
            <Button text="PREV" disabled={page === 1}></Button>
          </div>
          <Pages>
            {page} / {pagesNumber}
          </Pages>
          <div onClick={() => setPage(page + 1)}>
            <Button
              text="NEXT"
              disabled={
                page === Math.floor(+data.totalResults / 10) + 1 ||
                pagesNumber === 1
              }
            ></Button>
          </div>
        </ButtonsContainer>
      )}
    </Container>
  );
};

export default Results;
