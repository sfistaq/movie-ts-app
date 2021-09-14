import React, { useContext } from "react";
import { FavContext } from "../../store/Favourite/FavState";
import { SearchContext } from "../../store/Search/SearchState";
import Results from "../Results/Results";
import { Container, Status, ResultsContainer } from "./Favourites.styles";

const Watched: React.FC = () => {
  const { watched } = useContext(FavContext);
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
