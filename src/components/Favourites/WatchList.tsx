import React, { useContext } from "react";
import { FavouriteContext } from "../../store/FavouriteState";
import { SearchContext } from "../../store/SearchState";

import Results from "../Results/Results";

import { Container, Status, ResultsContainer } from "./Favourites.styles";

const WatchList: React.FC = () => {
  const { watchlist } = useContext(FavouriteContext);
  const { page, setPageHandler } = useContext(SearchContext);

  const data = {
    Response: watchlist.length === 0 ? "empty" : "added",
    Search: watchlist,
    totalResults: watchlist.length.toString(),
  };

  //TODO pagniacja po 10ciu
  return (
    <Container>
      {data.Response === "empty" ? (
        <Status>Add some movies to watchlist</Status>
      ) : (
        <Status>
          {+data.totalResults} {+data.totalResults <= 1 ? "movie" : "movies"} in
          your watchlist
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

export default WatchList;
