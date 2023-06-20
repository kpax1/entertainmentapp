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


export default function Bookmarked() {
  const {bookmarked} = useContext(EnterteinmentContext);
  return (
    <MovieSection>
      {bookmarked?.map((movie: movie) => (
        <StyledMovie movie={movie} key={movie.id}/>
      ))}
    </MovieSection>
  );
}
