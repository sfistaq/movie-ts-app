import React, { useContext } from "react";
import { FavContext } from "../../store/Favourite/FavState";
import { SearchContext } from "../../store/Search/SearchState";
import Results from "../Results/Results";
import { Container, Status, ResultsContainer } from "./Favourites.styles";

const WatchList: React.FC = () => {
  const { watchlist } = useContext(FavContext);
  const { page, setPageHandler } = useContext(SearchContext);

  const data = {
    Response: watchlist.length === 0 ? "empty" : "added",
    Search: watchlist,
    totalResults: watchlist.length.toString(),
  };

  return (
    <Container>
      {data.Response === "empty" ? (
        <Status>Add some movies to watchlist</Status>
      ) : (
        <Status>
          You have {+data.totalResults}{" "}
          {+data.totalResults <= 1 ? "title" : "titles"} in your watchlist
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
