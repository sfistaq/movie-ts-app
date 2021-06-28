import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
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

  //! query
  const { data } = useQuery(["details", id], () => detailsQuery(id));

  //TODO funkcje dodaj do context
  const addToWatchlist = () => {
    console.log(data);
  };

  const addToWatched = () => {
    console.log(data);
  };

  return (
    <Container>
      {data && (
        <Wrapper>
          <Left>
            <Image src={data.Poster} alt={data.Title} />
            <Button onClick={addToWatchlist}>Add To Watchlist</Button>
            <Button onClick={addToWatched}>Add To Watched</Button>
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
