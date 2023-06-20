import { Outlet, useLocation } from "react-router-dom";
import useSearch from "./hook";
import Header from "./Header";
import Searchfield from "./Searchfield";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Trending from "./Trending";

import Recommended from "./Recoomended";
import { useContext } from "react";
import { EnterteinmentContext } from "./EntertainmentContext";
import StyledMovie from "./styledmovie";
import { MovieSection } from "./Movie";

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


const theme = {
  color: "#973333",
};


function Root() {
  const { pathname } = useLocation();
  const { data } = useContext(EnterteinmentContext);

  const isTrending = data.filter((movie: any) => movie.isTrending === true);
  const { filterList, search } = useSearch(data);

  console.log(filterList);
  const placeholder = "Search for movie and Tv series";
  return (
    <ThemeProvider theme={theme}>
      <Globalstyle />

      <div>
        <Header />

        {pathname === "/" && (
          <Searchfield search={search} placeholder={placeholder} />
        )}

        {pathname === "/" && !filterList && (
          <div>
            <Trending isTrending={isTrending} />

            <Recommended data={data} />
          </div>
        )}

        {filterList && pathname === "/" && (
          <MovieSection>
            {filterList?.map((movie: movie) => (
              <StyledMovie movie={movie} key={movie.id} />
            ))}
          </MovieSection>
        )}

        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default Root;

const Globalstyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;700&display=swap');  }

 

  body{
    background-color: #10141E;
    font-family: 'Outfit', sans-serif;
    color: white;
    width: 100%;

  }
`;
