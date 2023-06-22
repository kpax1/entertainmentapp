import { MovieSection } from './Movie';
import StyledMovie from './styledmovie';
import { styled } from 'styled-components';


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


export default function Recommended({ data }: any) {

  return (

    <RecommendedContainer>
      <h2>Recommended</h2>
      <MovieSection>
        {data?.map((movie: movie) => (
          <StyledMovie movie={movie} key={movie.id} />
        ))}
      </MovieSection>
    </RecommendedContainer>
  );
}

const RecommendedContainer = styled.div`
margin: 0;
padding: 0;

  & h2 {
    font-weight: 300;
    font-size: 20px;
    line-height: 25.2px;
    letter-spacing: -0.31;
  }


`;
