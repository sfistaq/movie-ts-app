import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Results from "../Results/Results";

import { Container, Form, Input, Label, Select, Option } from "./Search.styles";



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
  // przenieś do context
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchYear, setSearchYear] = useState<number | null>(null);

  const [title, setTitle] = useState<string>(""); // tytół szukanego filmu
  const [type, setType] = useState<string>("movie"); // menu wyboru movie, series, game
  const [year, setYear] = useState<number | null>(null); // opcjonalne pole szukania po roku
  const [page, setPage] = useState<number>(1); 



  const { data, status, isLoading, error } = useQuery(
    ["movies", page, title, year, type],
    () => searchMovie(page, title, year, type)
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTitle(searchTitle);
    setYear(searchYear)
  };

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setType((event.currentTarget.value));
  };

 

  const currentYear= new Date().getFullYear(); 
  


  return (
    <Container>
      {status === "loading" && <div>Loading...</div>}
      {!title && <div>Search some {type}</div>}
      {data && data.Error === 'Movie not found!' && <div>{type} not found!</div>}
      
      <Form onSubmit={(event) => handleSubmit(event)}>
        <Input
          type="text"
          placeholder="title"
          value={searchTitle}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTitle(event.target.value)
          }
        />
        <Input type='number' placeholder='year' min={1888} max={currentYear}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchYear(+event.target.value)
        } />

        <Label >Chose Type</Label>
        <Select value={type} onChange={handleChange} >
          <Option value='movie'>Movie</Option>
          <Option value='series'>Series</Option>
          <Option value='game'>Game</Option>
        </Select>


        <button>Search</button>
      </Form>
      {data && title && data.Response !== "False" && (
           <Results data={data} page={page} setPage={setPage} />

       
      )}
    </Container>
  );
};

export default Search;
