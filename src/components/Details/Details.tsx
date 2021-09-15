import React, { useContext } from "react";
import { apiRequest } from "../../api/apiRequest";
import { useQuery } from "react-query";
import { useParams, useHistory } from "react-router-dom";
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
import { ParamTypes, DataTypes } from "../../types/types";
import blankPosterImage from "../../assets/images/blank-poster.jpeg";
import * as constants from "../../utils/constants";

const Details: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const { data, error, status } = useQuery(["details", id], () =>
    apiRequest(`?i=${id}&plot=full`)
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

  //prettier-ignore
  const isInWatchlist = watchlist.some((item: DataTypes) => item?.imdbID === data?.imdbID);
  //prettier-ignore
  const isInWatchedlist = watched.some((item: DataTypes) => item?.imdbID === data?.imdbID);

  return (
    <Container>
      {data &&
        status !== "loading" &&
        !error &&
        data?.Error !== constants.ERROR && (
          <Wrapper>
            <Left>
              <Image
                src={data.Poster === "N/A" ? blankPosterImage : data.Poster}
                alt={data.Title}
              />
              {isInWatchlist ? (
                <Button onClick={removeFromWatchlistHandler}>
                  Remove From Watchlist
                </Button>
              ) : (
                <Button onClick={addToWatchlistHandler}>
                  Add To Watchlist {isInWatchedlist ? "Again" : null}
                </Button>
              )}
              {isInWatchedlist && (
                <Button onClick={removeFromWatchedHandler}>
                  Remove From Watched
                </Button>
              )}
              {!isInWatchedlist && !isInWatchlist && (
                <Button onClick={addToWatchedHandler}>Add To Watched</Button>
              )}
              {!isInWatchedlist && isInWatchlist && (
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
      {data?.Error === constants.ERROR && (
        <Error>Error, Incorrect IMDb ID.</Error>
      )}
    </Container>
  );
};

export default Details;
