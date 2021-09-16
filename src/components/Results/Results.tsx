import { Data, MovieDataResponse } from "../../types/types";
import {
  Wrapper,
  ResultsItems,
  ButtonsContainer,
  Pages,
} from "./Result.styles";
import Button from "../Button/Button";
import blankPosterImage from "../../assets/images/blank-poster.jpeg";
import Card from "../Card/Card";

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
    <Wrapper center={buttons}>
      <ResultsItems>
        {data.Search.map((item: MovieDataResponse) => (
          <div key={item.imdbID}>
            <Card
              link={`/details/${item.imdbID}`}
              image={item.Poster === "N/A" ? blankPosterImage : item.Poster}
              imageAlt={item.Title}
              title={item.Title}
            />
          </div>
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
    </Wrapper>
  );
};

export default Results;
