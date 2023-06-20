import  { useContext } from 'react'
import styled from 'styled-components';
import iconmovie from "/assets/icon-category-movie.svg";
import bookmarkfull from '/assets/icon-bookmark-full.svg'

import bookmark from "/assets/icon-bookmark-empty.svg";
import { EnterteinmentContext } from './EntertainmentContext';



export default function Trendingsingle({movie}:any) {
    const { bookmarked, setBookmarked } = useContext(EnterteinmentContext);

    const isBookmarked = bookmarked.some((m: any) => m.id === movie.id);

    const addToBookmarked = () => {
        const isAlradyBookmarked = bookmarked.some((m:any)=> m.id === movie.id);
      
        if(!isAlradyBookmarked){
        setBookmarked((prevBookmarked: any) => [...prevBookmarked, movie]);
        }
      };
  return (

    <Sec key={movie.id}>
    <Photodiv>
      <Image src={movie.thumbnail.regular.medium} alt="" />

      <Divi onClick={addToBookmarked}>
            {!isBookmarked ? (
                <BookmarkImg src={bookmark} alt="" />
              ) :(
                <BookmarkImg src={bookmarkfull} />
    
              )}
  
    
      </Divi>

    
        <TitleDiv>
          <Category>
            <p>{movie.year}</p>

            <Comma></Comma>

            <p>
              <img src={iconmovie} alt="" />
            </p>
            <p>{movie.category}</p>

            <p>{movie.rating}</p>
          </Category>
          <h2>{movie.title}</h2>
        </TitleDiv>
    </Photodiv>
  </Sec>
    )
}



const Sec = styled.div`
  margin-right: 16px;
`;

const Photodiv = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

const Divi = styled.div`
  width: 32px;
  height: 32px;
  background-color: #10141e77;
  position: absolute;
  top: 10%;
  left: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
const BookmarkImg = styled.img`
  margin-left: auto;
  margin-right: auto;
`;

const TitleDiv = styled.div`
  position: absolute;
  bottom: 10%;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  margin-left: 1em;
`;

const Category = styled.div`
  margin-bottom: 5px;
  opacity: 70%;
  display: flex;
  align-items: center;
  & p {
    margin-right: 7px;
  }
`;

const Comma = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #ffff;
  margin-right: 10px;
`;



const Image = styled.img`
  width: 240px;
  height: 140px;
  border-radius: 8px;
  opacity: 90%;
`;

