import React, { useContext } from "react";
import { FavContext } from "../../store/Favourite/FavState";
import { SearchContext } from "../../store/Search/SearchState";
import { Container } from "../../styles/global";
import Results from "../Results/Results";
import Status from "../Status/Status";
import Background from "../Background/Background";
import watchlist_bg from "../../assets/images/watchlist_bg.svg";

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
        <Status text="Add some movies to watchlist" />
      ) : (
        <Status
          text={` You have ${+data.totalResults}
        ${+data.totalResults <= 1 ? "title" : "titles"} in your watchlist`}
        ></Status>
      )}
      {watchlist.length === 0 ? (
        <Background image={watchlist_bg} />
      ) : (
        <Results
          data={data}
          page={page}
          setPage={setPageHandler}
          buttons={false}
        />
      )}
    </Container>
  );
};

export default WatchList;
