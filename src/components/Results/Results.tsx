import React from 'react'
import {Container} from './Result.styles'

interface Response {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  }

interface Data {
    Response: string;
    Search: Response[];
    totalResults: string;
}

interface Props {
    data: Data;
    page: number;
    setPage: (num: number) => void;
}


const Results: React.FC<Props> = ({data, page, setPage}) => {
   
const searchResultsLength = +data.totalResults
const pagesNumber = searchResultsLength <= 10 ? 1 :  Math.floor(+data.totalResults / 10)


    return (
        <Container>
            {data.Search.map(item => (
                <div key={item.imdbID}>{item.Title}</div>
            ))}
            <span>
            {page} / {pagesNumber}
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              PREV
            </button>
            <button
              disabled={page === Math.floor(+data.totalResults / 10) || pagesNumber === 1}
              onClick={() => setPage(page + 1)}
            >
              NEXT
            </button>
          </span>
        </Container>
    )
}

export default Results
