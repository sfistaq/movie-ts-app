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
  const { watchlist, addToFavourite, removeFromFavourite } =
    useContext(FavouriteContext);
  const history = useHistory();

  //! query
  const { data } = useQuery(["details", id], () => detailsQuery(id));

  const addToWatchlist = () => {
    addToFavourite(data);
    history.push("/watchlist");
  };

  const removeFromWatchlist = () => {
    removeFromFavourite(data.imdbID);
    history.push("/watchlist");
  };

  let added: boolean = false;
  if (data) {
    const find = watchlist.find((item) => item.imdbID === data.imdbID);
    if (find?.imdbID === data.imdbID) {
      added = true;
    }
  }

  return (
    <Container>
      {data && (
        <Wrapper>
          <Left>
            <Image src={data.Poster} alt={data.Title} />
            {added ? (
              <Button onClick={removeFromWatchlist}>
                Remove From Watchlist
              </Button>
            ) : (
              <Button onClick={addToWatchlist}>Add To Watchlist</Button>
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
