import React, { useContext } from "react";
import { FavouriteContext } from "../../store/FavouriteState";
import { SearchContext } from "../../store/SearchState";

import Results from "../Results/Results";

import { Container, Status, ResultsContainer } from "./Favourites.styles";

const Watched: React.FC = () => {
  const { watched } = useContext(FavouriteContext);
  const { page, setPageHandler } = useContext(SearchContext);

  const data = {
    Response: watched.length === 0 ? "empty" : "added",
    Search: watched,
    totalResults: watched.length.toString(),
  };

  return (
    <Container>
      {data.Response === "empty" ? (
        <Status>Add some watched movies</Status>
      ) : (
        <Status>
          You watched {+data.totalResults}{" "}
          {+data.totalResults <= 1 ? "title" : "titles"}
        </Status>
      )}
      <ResultsContainer>
        <Results
          data={data}
          page={page}
          setPage={setPageHandler}
          buttons={false}
        />
      </ResultsContainer>
    </Container>
  );
};

export default Watched;
