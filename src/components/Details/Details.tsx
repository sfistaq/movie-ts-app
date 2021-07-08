import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FavContext } from "../../store/Favourite/FavState";
import {
  Container,
  Wrapper,
  Left,
  Image,
  Button,
  Right,
  Error,
} from "./Details.styles";

import { Spinner } from "../Spinner/Spinner";
import blankPosterImage from "../../images/blank-poster.jpeg";

const API_KEY = process.env.REACT_APP_API_KEY;

const detailsQuery = async (id: string) => {
  const response = await fetch(
    `https://www.omdbapi.com/?i=${id}&plot=full&apikey=${API_KEY}`
  );
  return response.json();
};

interface ParamTypes {
  id: string;
}

const Details: React.FC = () => {
  const { id } = useParams<ParamTypes>(); // params z linku routera
  const { data, error, status } = useQuery(["details", id], () =>
    detailsQuery(id)
  );

  const {
    watchlist,
    watched,
    addToWatchlist,
    removeFromWatchlist,
    addToWatched,
    removeFromWatched,
    moveToWatched,
  } = useContext(FavContext);
  const history = useHistory();

  const addToWatchlistHandler = () => {
    addToWatchlist(data);
    history.push("/watchlist");
  };

  const removeFromWatchlistHandler = () => {
    removeFromWatchlist(data.imdbID);
    history.push("/watchlist");
  };

  const addToWatchedHandler = () => {
    addToWatched(data);
    history.push("/watched");
  };

  const removeFromWatchedHandler = () => {
    removeFromWatched(data.imdbID);
    history.push("/watched");
  };

  const moveToWatchedHandler = () => {
    moveToWatched(data);
    history.push("/watched");
  };

  //REFAKTOR
  let addedToWatchlist: boolean = false;
  if (data) {
    const find = watchlist.find((item) => item.imdbID === data.imdbID);
    if (find?.imdbID === data.imdbID) {
      addedToWatchlist = true;
    }
  }

  let addedToWatched: boolean = false;
  if (data) {
    const find = watched.find((item) => item.imdbID === data.imdbID);
    if (find?.imdbID === data.imdbID) {
      addedToWatched = true;
    }
  }

  return (
    <Container>
      {data &&
        status !== "loading" &&
        !error &&
        data?.Error !== "Incorrect IMDb ID." && (
          <Wrapper>
            <Left>
              <Image
                src={data.Poster === "N/A" ? blankPosterImage : data.Poster}
                alt={data.Title}
              />
              {/* {dodaj lub usuń do watchlist} */}
              {addedToWatchlist ? (
                <Button onClick={removeFromWatchlistHandler}>
                  Remove From Watchlist
                </Button>
              ) : (
                <Button onClick={addToWatchlistHandler}>
                  Add To Watchlist {addedToWatched ? "Again" : null}
                </Button>
              )}
              {/* {jeeli dodane do watched = usuń z watched} */}
              {addedToWatched && (
                <Button onClick={removeFromWatchedHandler}>
                  Remove From Watched
                </Button>
              )}
              {/* {jezeli nie ma w watched i watchlist to dodaj do watched} */}
              {!addedToWatched && !addedToWatchlist && (
                <Button onClick={addToWatchedHandler}>Add To Watched</Button>
              )}
              {/* {jezeli nie ma w watched a jest w watchlist to przenieś do watched} */}
              {!addedToWatched && addedToWatchlist && (
                <Button onClick={moveToWatchedHandler}>Move To Watched</Button>
              )}
            </Left>
            <Right>
              <h2>{data.Title}</h2>
              <p>year: {data.Year}</p>
              <p>country: {data.Country}</p>
              <p>director: {data.Director}</p>
              <p>genre: {data.Genre}</p>
              <p>{data.Plot}</p>
            </Right>
          </Wrapper>
        )}
      {!data && status === "loading" && <Spinner />}
      {data?.Error === "Incorrect IMDb ID." && (
        <Error>Error, Incorrect IMDb ID.</Error>
      )}
    </Container>
  );
};

export default Details;
