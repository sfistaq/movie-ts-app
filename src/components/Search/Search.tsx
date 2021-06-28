import React, { useState, useContext, useRef, useEffect } from "react";
import { MovieContext } from "../../store/GlobalState";
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
  title: string,
  year: number | null,
  type: string
) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${title}&page=${page}&y=${year}&type=${type}&apikey=ba1bc38c`
  );
  return response.json();
};

const Search: React.FC = () => {
  const {
    title,
    year,
    page,
    searchType,
    setTitleHandler,
    setYearHandler,
    setPageHandler,
    setTypeHandler,
  } = useContext(MovieContext);

  //! state
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchYear, setSearchYear] = useState<number | null>(null);
  const titleRef = useRef<HTMLInputElement>(null);

  //! query
  const { data, status } = useQuery(
    ["movies", page, title, year, searchType],
    () => searchMovie(page, title, year, searchType)
  );

  //! submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTitleHandler(searchTitle);
    setYearHandler(searchYear);
    setPageHandler(1);
  };

  //! change
  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setTypeHandler(event.currentTarget.value);
    setPageHandler(1);
  };

  console.log(titleRef.current?.value);

  return (
    <Container>
      {status === "loading" && <Status>Loading...</Status>}
      {!title && <Status>Search some {searchType}...</Status>}
      {data &&
        data.Error !== "Incorrect IMDb ID." &&
        data.Response === "False" && <Status>{searchType} not found!</Status>}
      {data && data.Response === "True" && (
        <Status>
          we are found {data.totalResults}&nbsp;
          {searchType}
          {searchType === "series" ? "" : "s"}
        </Status>
      )}

      <Form onSubmit={(event) => handleSubmit(event)}>
        <Input
          minLength={3}
          maxLength={60}
          required
          type="text"
          placeholder={`${searchType} title`}
          value={searchTitle}
          inputWidth={200}
          ref={titleRef}
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

        <Select value={searchType} onChange={handleChange} inputWidth={80}>
          <Option value="movie">Movie</Option>
          <Option value="series">Series</Option>
          <Option value="game">Game</Option>
        </Select>

        <Button>Search</Button>
      </Form>
      <ResultsContainer>
        {data && data.Response !== "False" && (
          <Results data={data} page={page} setPage={setPageHandler} />
        )}
      </ResultsContainer>
    </Container>
  );
};

export default Search;
