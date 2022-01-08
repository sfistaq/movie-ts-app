import React, { useState, useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { apiRequest } from "../../api/apiRequest";
import { SearchContext } from "../../store/Search/SearchState";
import { selectOptions } from "./data";
import { SelectData } from "../../types/types";
import { Spinner } from "../Spinner/Spinner";
import { Container } from "../../styles/global";
import Results from "../Results/Results";
import Status from "../Status/Status";
import Button from "../Button/Button";
import Background from "../Background/Background";
import { Form, Input, Select } from "./Search.styles";
import { BiSearchAlt } from "react-icons/bi";
import search_bg from "../../assets/images/search_bg.svg";
import * as constants from "../../utils/constants";

const Search: React.FC = () => {
  const {
    dispatch,
    state: { title, year, page, searchType },
  } = useContext(SearchContext);

  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchYear, setSearchYear] = useState<string>("");

  const { data, status, isLoading } = useQuery(
    ["movies", page, title, year, searchType],
    () => apiRequest(`?s=${title}&page=${page}&y=${year}&type=${searchType}`)
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: "SET_TITLE", payload: searchTitle });
    dispatch({ type: "SET_YEAR", payload: searchYear });
    dispatch({ type: "SET_PAGE", payload: 1 });
  };

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    event.preventDefault();
    if (!searchTitle) {
      dispatch({ type: "SET_TITLE", payload: "" });
    }
    dispatch({ type: "SET_TYPE", payload: event.currentTarget.value });
    dispatch({ type: "SET_PAGE", payload: 1 });
  };

  useEffect(() => {
    setSearchTitle(title);
    setSearchYear(year);
  }, [title, year]);

  return (
    <Container>
      {status === "loading" && <Status text="Loading..." />}
      {!title && !isLoading && <Status text={`Search some ${searchType}...`} />}
      {data && data.Error !== constants.ERROR && data.Response === "False" && (
        <Status error text={`${searchType} not found !`} />
      )}
      {data && data.Response === "True" && (
        <Status
          text={` found: ${data.totalResults}
        ${searchType}${+data.totalResults > 1 ? "s" : ""}
       `}
        />
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
          inputWidth={300}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTitle(event.target.value)
          }
        />
        <Input
          inputWidth={80}
          type="number"
          placeholder="year"
          min={1888}
          maxLength={4}
          minLength={4}
          value={searchYear}
          max={new Date().getFullYear()}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchYear(event.target.value)
          }
        />

        <Select value={searchType} onChange={handleChange} inputWidth={80}>
          {selectOptions.map((item: SelectData) => (
            <option key={item.id} value={item.value}>
              {item.value}
            </option>
          ))}
        </Select>
        <Button text="search" icon={<BiSearchAlt />} />
      </Form>

      {data && data.Response !== "False" && (
        <Results data={data} buttons={true} />
      )}

      {status === "loading" && <Spinner />}
      {!data?.Search && status !== "loading" && (
        <Background image={search_bg} />
      )}
    </Container>
  );
};

export default Search;
