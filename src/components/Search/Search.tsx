import React, { useState } from "react";
import { useQuery } from "react-query";
import Results from "../Results/Results";

import {
  Container,
  Status,
  Form,
  Input,
  Select,
  Option,
  Button,
  ResultsContainer,
} from "./Search.styles";

const searchMovie = async (
  page: number,
  title: string | null,
  year: number | null,
  type: string
) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${title}&plot=full&page=${page}&y=${year}&type=${type}&apikey=ba1bc38c`
  );

  return response.json();
};

// ID SEARCH
//"http://www.omdbapi.com/?i=tt3896198&apikey=ba1bc38c"
// ?t= szukanie po tytulach

const Search: React.FC = () => {
  //! state
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchYear, setSearchYear] = useState<number | null>(null);

  const [title, setTitle] = useState<string>(""); // tytół szukanego filmu
  const [year, setYear] = useState<number | null>(null); // opcjonalne pole szukania po roku
  const [type, setType] = useState<string>("movie");
  const [page, setPage] = useState<number>(1);

  //! query
  const { data, status } = useQuery(["movies", page, title, year, type], () =>
    searchMovie(page, title, year, type)
  );

  //! submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTitle(searchTitle);
    setYear(searchYear);
    setPage(1);
  };

  //! change
  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setType(event.currentTarget.value);
    setPage(1);
  };

  if (data) {
    console.log(data);
  }

  return (
    <Container>
      {status === "loading" && <Status>Loading...</Status>}
      {!title && <Status>Search some {type}...</Status>}
      {data &&
        data.Error !== "Incorrect IMDb ID." &&
        data.Response === "False" && <Status>{type} not found!</Status>}
      {data && data.Response === "True" && (
        <Status>
          we are found {data.totalResults}&nbsp;
          {type}
          {type === "series" ? "" : "s"}
        </Status>
      )}

      <Form onSubmit={(event) => handleSubmit(event)}>
        <Input
          minLength={3}
          maxLength={60}
          required
          type="text"
          placeholder={`${type} title`}
          value={searchTitle}
          inputWidth={200}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTitle(event.target.value)
          }
        />
        <Input
          inputWidth={70}
          type="number"
          placeholder="year"
          min={1888}
          max={new Date().getFullYear()}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchYear(+event.target.value)
          }
        />

        <Select value={type} onChange={handleChange} inputWidth={80}>
          <Option value="movie">Movie</Option>
          <Option value="series">Series</Option>
          <Option value="game">Game</Option>
        </Select>

        <Button>Search</Button>
      </Form>
      <ResultsContainer>
        {data && title && data.Response !== "False" && (
          <Results data={data} page={page} setPage={setPage} />
        )}
      </ResultsContainer>
    </Container>
  );
};

export default Search;
