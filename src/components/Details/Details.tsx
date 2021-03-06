import React, { useContext } from "react";
import { apiRequest } from "../../api/apiRequest";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { FavContext } from "../../store/Favourite/FavState";
import { OMDBData } from "../../types/types";
import { Container } from "../../styles/global";
import { Spinner } from "../Spinner/Spinner";
import Button from "../Button/Button";
import Status from "../Status/Status";
import {
  Wrapper,
  Poster,
  Image,
  ButtonsWrapper,
  Description,
  Error,
} from "./Details.styles";
import * as constants from "../../utils/constants";
import blankPosterImage from "../../assets/images/blank-poster.jpeg";

const Details: React.FC = () => {
  const { id } = useParams<string>();

  const { data, error, status } = useQuery(["details", id], () =>
    apiRequest(`?i=${id}&plot=full`)
  );
  const {
    dispatch,
    state: { watchlist, watched },
  } = useContext(FavContext);
  const navigate = useNavigate();

  const addToWatchlistHandler = () => {
    dispatch({ type: "ADD_TO_WATCHLIST", payload: data });
    navigate("/watchlist");
  };

  const removeFromWatchlistHandler = () => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: data.imdbID });
    navigate("/watchlist");
  };

  const addToWatchedHandler = () => {
    dispatch({ type: "ADD_TO_WATCHED", payload: data });
    navigate("/watched");
  };

  const removeFromWatchedHandler = () => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: data.imdbID });
    navigate("/watched");
  };

  const moveToWatchedHandler = () => {
    dispatch({ type: "MOVE_TO_WATCHED", payload: data });
    navigate("/watched");
  };

  const isOnFavList = (fav: OMDBData[]) => {
    return fav.some((item: OMDBData) => item?.imdbID === data?.imdbID);
  };

  return (
    <Container>
      {data &&
        status !== "loading" &&
        !error &&
        data?.Error !== constants.ERROR && (
          <Wrapper>
            <Poster>
              <Image
                src={data.Poster === "N/A" ? blankPosterImage : data.Poster}
                alt={data.Title}
              />
              <ButtonsWrapper>
                {isOnFavList(watchlist) ? (
                  <div onClick={removeFromWatchlistHandler}>
                    <Button text="Remove From Watchlist" />
                  </div>
                ) : (
                  <div onClick={addToWatchlistHandler}>
                    <Button
                      text={`  Add To Watchlist ${
                        isOnFavList(watched) ? "Again" : ""
                      }`}
                    />
                  </div>
                )}
                {isOnFavList(watched) && (
                  <div onClick={removeFromWatchedHandler}>
                    <Button text="Remove From Watched" />
                  </div>
                )}
                {!isOnFavList(watched) && !isOnFavList(watchlist) && (
                  <div onClick={addToWatchedHandler}>
                    <Button text="Add To Watched" />
                  </div>
                )}
                {!isOnFavList(watched) && isOnFavList(watchlist) && (
                  <div onClick={moveToWatchedHandler}>
                    {" "}
                    <Button text="Move To Watched" />
                  </div>
                )}
              </ButtonsWrapper>
            </Poster>
            <Description>
              <h2>{data.Title}</h2>
              <p>
                <strong>year:</strong> {data.Year}
              </p>
              <p>
                <strong>country:</strong> {data.Country}
              </p>
              <p>
                <strong>director:</strong> {data.Director}
              </p>
              <p>
                <strong>genre:</strong> {data.Genre}
              </p>
              <p>{data.Plot}</p>
            </Description>
          </Wrapper>
        )}

      {!data && status === "loading" && (
        <>
          <Status text="Loading..." />
          <Spinner />
        </>
      )}

      {data?.Error === constants.ERROR && (
        <Error>Error, Incorrect IMDb ID.</Error>
      )}
    </Container>
  );
};

export default Details;
