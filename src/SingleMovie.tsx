import { useContext } from "react";
import { useParams } from "react-router-dom";
import { EnterteinmentContext } from "./EntertainmentContext";
import styled from "styled-components";

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




export default function SingleMovie() {

  const params = useParams();
  const {data} = useContext(EnterteinmentContext);
  const movieId = Number(params.id);
  const Smovie:movie = data.find((element:movie) => element.id === movieId);

  return (
  <Singlemovie>
    <Singlmovieimg src={Smovie?.thumbnail.regular.large.substring(1)} alt="" />

    <Describe>
    <h1>{Smovie?.title}</h1>
    <p>Rating {Smovie.rating}</p>
    <p>Released Year {Smovie.year}</p>
    <p> {Smovie.isBookmarked}</p>
    </Describe>
    </Singlemovie>)
}


const Singlemovie = styled.div`
  display: flex;
  flex-direction: column;
  & h1{
    letter-spacing: 1px;
    font-weight: 300;
    font-size: 2em;
  }

`


const Singlmovieimg = styled.img`
  width: 330px;
  border-radius: 8px;
  align-self: center;
  margin-top: 1em;
  `


const Describe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
`