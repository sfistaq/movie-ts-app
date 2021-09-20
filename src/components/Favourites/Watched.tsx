import React, { useContext } from "react";
import { FavContext } from "../../store/Favourite/FavState";
import { SearchContext } from "../../store/Search/SearchState";
import { Container } from "../../styles/global";
import Results from "../Results/Results";
import Status from "../Status/Status";
import Background from "../Background/Background";
import watched_bg from "../../assets/images/watched_bg.svg";

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
        <Status text="Add some movies to watched list..." />
      ) : (
        <Status
          text={`You have ${+data.totalResults}
        ${+data.totalResults <= 1 ? "title" : "titles"} in your wateched list`}
        />
      )}
      {watched.length === 0 ? (
        <Background image={watched_bg} />
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

export default Watched;
