import { styled } from "styled-components";

import Trendingsingle from "./Trendingsingle";

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

export default function Trending({ isTrending }: any) {
  return (
    <Trendingsector>
      <h2>Trending</h2>
      
      <Trend>
        {isTrending?.map((movie: movie) => (
          <Trendingsingle movie={movie}/>
        ))}
      </Trend>
    </Trendingsector>
  );
}

const Trendingsector = styled.div`
  margin-top: 1rem;
  color: white;
  margin-left: 16px !important;
  max-width: 100%;
  & h2 {
    font-weight: 300;
    font-size: 20px;
    line-height: 20.16px;
    letter-spacing: -0.31;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Trend = styled.div`
  display: flex;
  overflow-x: auto;
  color: white;
  margin-top: 16px;
`;

