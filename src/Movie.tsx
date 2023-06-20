import  { useContext } from "react";
import useSearch from "./hook";
import StyledMovie from "./styledmovie";

import styled from "styled-components";
import Searchfield from "./Searchfield";
import { EnterteinmentContext } from "./EntertainmentContext";
interface movie {
  id: number;
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}



export default function Movie() {
  const {data} = useContext(EnterteinmentContext)

  const Movies = data.filter((movie:movie) => movie.category === "Movie");
  const { filterList, search } = useSearch(Movies);
  const placeholder = "search for movie";

  return (
    <div>
      <Searchfield search={search} placeholder={placeholder} />

      {filterList ? (
        <MovieSection>
        {filterList?.map((movie: movie) => (
            <StyledMovie movie={movie} key={movie.id} />
          ))}
        </MovieSection>
      ) : (
        <MovieSection>
          {Movies.map((movie:movie) => (
            <StyledMovie movie={movie} key={movie.id} />
          ))}

          {}
        </MovieSection>
      )}
    </div>
  );
}

export const MovieSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
