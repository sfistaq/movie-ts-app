import React, { useContext, useRef } from "react";
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

  const titleRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const { data, status, isLoading } = useQuery(
    ["movies", page, title, year, searchType],
    () => apiRequest(`?s=${title}&page=${page}&y=${year}&type=${searchType}`)
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: "SET_TITLE",
      payload: (titleRef.current as HTMLInputElement).value,
    });
    dispatch({
      type: "SET_YEAR",
      payload: (yearRef.current as HTMLInputElement).value,
    });
    dispatch({ type: "SET_PAGE", payload: 1 });
  };

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    event.preventDefault();
    if (!(titleRef.current as HTMLInputElement).value) {
      dispatch({ type: "SET_TITLE", payload: "" });
    }
    dispatch({ type: "SET_TYPE", payload: event.currentTarget.value });
    dispatch({ type: "SET_PAGE", payload: 1 });
  };

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
          ref={titleRef}
          autoFocus
          minLength={3}
          maxLength={60}
          required
          type="text"
          placeholder={`${searchType} title`}
          inputWidth={300}
        />
        <Input
          ref={yearRef}
          inputWidth={80}
          type="number"
          placeholder="year"
          min={1888}
          maxLength={4}
          minLength={4}
          max={new Date().getFullYear()}
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
