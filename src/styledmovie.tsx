import { Link } from "react-router-dom";
import { styled } from "styled-components";
import bookmark from "/assets/icon-bookmark-empty.svg";
import iconmovie from "/assets/icon-category-movie.svg";
import { useContext } from "react";
import { EnterteinmentContext } from "./EntertainmentContext";
import bookmarkfull from '/assets/icon-bookmark-full.svg'
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

interface MovieProps {
  movie: movie;
}

const StyledMovie = ({ movie }: MovieProps) => {
  const { bookmarked, setBookmarked } = useContext(EnterteinmentContext);

  const addToBookmarked = () => {
    const isAlradyBookmarked = bookmarked.some((m:movie)=> m.id === movie.id);

    if(!isAlradyBookmarked){
    setBookmarked((prevBookmarked: any) => [...prevBookmarked, movie]);
    }
  };

  
  const isBookmarked = bookmarked.some((m: movie) => m.id === movie.id);

  return (
    <StyledImagetamplate>
      <Photodiv>
        <Image src={movie.thumbnail.regular.medium} alt="" />
          <Divi onClick={addToBookmarked}>
          {!isBookmarked ? (
            <BookmarkImg src={bookmark} alt="" />
          ) :(
            <BookmarkImg src={bookmarkfull} />

          )}
        
          </Divi>
      </Photodiv>

      <CategoryAndYear>
        <span style={{ marginRight: "4px" }}>{movie.year}</span>
        <img src={iconmovie} alt="" />
        <span style={{ marginLeft: "4px" }}>{movie.category}</span>
        <span style={{ marginLeft: "4px" }}>{movie.rating}</span>
      </CategoryAndYear>
      <Styledlik
        to={`/${movie.category.split(" ").join("").toLocaleLowerCase()}/${movie.id}`}
      >
        <Title>{movie.title}</Title>
      </Styledlik>
    </StyledImagetamplate>
  );
};


export default StyledMovie;

const StyledImagetamplate = styled.div`
width: 160px;
margin: 0.7rem;
`
const Photodiv = styled.div`
  position: relative;
  width: 164px;
  height: 110px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const Divi = styled.div`
  width: 32px;
  height: 32px;
  background-color: #10141e77;
  position: absolute;
  top: 8%;
  left: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
const BookmarkImg = styled.img`
  margin-left: auto;
  margin-right: auto;
`;

const CategoryAndYear = styled.div`
  font-weight: 300;
  font-size: 14px;
  display: flex;
  justify-content: start;
  align-items: center;
  color: white;
  opacity: 75%;
  width: 160px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17.64px;
  color: #fff;
  width: 160px;
`;

 const Styledlik = styled(Link)`
  text-decoration: none;
`;
