import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Container } from "./Details.styles";

const detailsQuery = async (id: string) => {
  const response = await fetch(
    `http://www.omdbapi.com/?i=${id}&apikey=ba1bc38c`
  );

  return response.json();
};

//"http://www.omdbapi.com/?i=tt3896198&apikey=ba1bc38c"

interface ParamTypes {
  id: string;
}

const Details: React.FC = () => {
  const { id } = useParams<ParamTypes>(); // params z linku z routera

  //! query
  const { data, status } = useQuery(["details", id], () => detailsQuery(id));

  if (data) {
    console.log(data);
  }

  return (
    <Container>
      {data && (
        <div>
          <h2>{data.Title}</h2>
          <img src={data.Poster} alt={data.Title} />
          <p>{data.Plot}</p>
        </div>
      )}
    </Container>
  );
};

export default Details;
