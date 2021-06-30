import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FavouriteContext } from "../../store/FavouriteState";
import {
  Container,
  Wrapper,
  Left,
  Image,
  Button,
  Right,
} from "./Details.styles";

const detailsQuery = async (id: string) => {
  const response = await fetch(
    `http://www.omdbapi.com/?i=${id}&plot=full&apikey=ba1bc38c`
  );

  return response.json();
};

interface ParamTypes {
  id: string;
}

const Details: React.FC = () => {
  const { id } = useParams<ParamTypes>(); // params z linku z routera
  const {
    watchlist,
    watched,
    addToWatchlist,
    removeFromWatchlist,
    addToWatched,
    removeFromWatched,
    moveToWatched,
  } = useContext(FavouriteContext);
  const history = useHistory();

  //! query
  const { data } = useQuery(["details", id], () => detailsQuery(id));

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

  // element moze byc na liscie watchlist i watched
  // element z watchlist mozna przenieśc do watched

  return (
    <Container>
      {data && (
        <Wrapper>
          <Left>
            <Image src={data.Poster} alt={data.Title} />
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
    </Container>
  );
};

export default Details;
