import React, { useState, useContext, useEffect } from "react";
import { apiRequest } from "../../api/apiRequest";
import { SearchContext } from "../../store/Search/SearchState";
import { useQuery } from "react-query";
import Results from "../Results/Results";
import { Spinner } from "../Spinner/Spinner";
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
import * as constants from "../../utils/constants";

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
    () => apiRequest(`?s=${title}&page=${page}&y=${year}&type=${searchType}`)
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

  useEffect(() => {
    setSearchTitle(title);
    setSearchYear(year);
  }, [title, year]);

  return (
    <Container>
      {status === "loading" && <Status>Loading...</Status>}
      {!title && <Status>Search some {searchType}...</Status>}
      {data && data.Error !== constants.ERROR && data.Response === "False" && (
        <Status error>{searchType} not found!</Status>
      )}
      {data && data.Response === "True" && (
        <Status>
          we are found {data.totalResults}&nbsp;
          {searchType}
          {searchType === "series" ? "" : "s"}
        </Status>
      )}

      <Form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
          handleSubmit(event)
        }
      >
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
        {status === "loading" && <Spinner />}
      </ResultsContainer>
    </Container>
  );
};

export default Search;
