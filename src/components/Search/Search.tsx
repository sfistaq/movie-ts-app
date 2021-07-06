import React, { useState, useContext, useEffect } from "react";
import { SearchContext } from "../../store/Search/SearchState";
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
  SearchIcon,
  ResultsContainer,
} from "./Search.styles";

// TODO nie działa w netlify
//const API_KEY = process.env.REACT_APP_API_KEY;

const searchMovie = async (
  page: number,
  title: string,
  year: string,
  type: string
) => {
  const response = await fetch(
    `https://www.omdbapi.com/?s=${title}&page=${page}&y=${year}&type=${type}&apikey=ba1bc38c`
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
  } = useContext(SearchContext);

  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchYear, setSearchYear] = useState<string>("");

  const { data, status } = useQuery(
    ["movies", page, title, year, searchType],
    () => searchMovie(page, title, year, searchType)
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTitleHandler(searchTitle);
    setYearHandler(searchYear);
    setPageHandler(1);
  };

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    event.preventDefault();
    if (!searchTitle) {
      setTitleHandler("");
    }
    setTypeHandler(event.currentTarget.value);
    setPageHandler(1);
  };

  // treść wyszukiwania zostaje w inputach po rerenderze
  useEffect(() => {
    setSearchTitle(title);
    setSearchYear(year);
  }, [title, year]);

  return (
    <Container>
      {status === "loading" && <Status>Loading...</Status>}
      {!title && <Status>Search some {searchType}...</Status>}
      {data &&
        data.Error !== "Incorrect IMDb ID." &&
        data.Response === "False" && (
          <Status error>{searchType} not found!</Status>
        )}
      {data && data.Response === "True" && (
        <Status>
          we are found {data.totalResults}&nbsp;
          {searchType}
          {searchType === "series" ? "" : "s"}
        </Status>
      )}

      <Form onSubmit={(event) => handleSubmit(event)}>
        <Input
          autoFocus
          minLength={3}
          maxLength={60}
          required
          type="text"
          placeholder={`${searchType} title`}
          value={searchTitle}
          inputWidth={180}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTitle(event.target.value)
          }
        />
        <Input
          inputWidth={60}
          type="number"
          placeholder="year"
          min={1888}
          value={searchYear}
          max={new Date().getFullYear()}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchYear(event.target.value)
          }
        />

        <Select value={searchType} onChange={handleChange} inputWidth={80}>
          <Option value="movie">Movie</Option>
          <Option value="series">Series</Option>
          <Option value="game">Game</Option>
        </Select>

        <Button>
          Search
          <SearchIcon />
        </Button>
      </Form>
      <ResultsContainer>
        {data && data.Response !== "False" && (
          <Results
            data={data}
            page={page}
            setPage={setPageHandler}
            buttons={true}
          />
        )}
      </ResultsContainer>
    </Container>
  );
};

export default Search;
