import styled from 'styled-components';
import logo from '/assets/logo.svg';
import root from '/assets/icon-nav-home.svg';
import tv from '/assets/icon-nav-tv-series.svg';
import bookmark from '/assets/icon-nav-bookmark.svg';
import user from '/assets/image-avatar.png';
import movie from '/assets/icon-category-movie.svg'
import { Link, useLocation } from 'react-router-dom';


export default function Header() {
  const { pathname } = useLocation();

  return (
    <Head>
      <Link to={`/`}>
      <div className="logo">
        <img src={logo} alt="/" />
      </div>
      </Link>
    

      <div className="category">

      <Link
        to={`/`}
      >
         <SvgIcon src={root} className={pathname === '/' ? 'active' : ''} />

      </Link>


      <Link
        to={`/movie`}
      >
        <SvgIcon src={movie} className={pathname ==='/movie' ? 'active' : ''} />

      </Link>

      <Link to={`/tvseries`}>
      <SvgIcon src={tv} className={pathname==='/tvseries'? 'active' : ''} />

      </Link>
      <Link to={`/bookmarked`}>
      <SvgIcon src={bookmark} className={pathname=== '/bookmark' ? 'active' : ''} />
      
      </Link>
      </div>

      <div className="useerside">
        <Userimg
          src={user}
          alt=""
        />
      </div>

     
    </Head>
  );
}

const Head = styled.header`
  background-color: #161D2F;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  .category {
    display: flex;
    gap: 20px;
  }

  .svg-icon {
    fill: #fff; /* Default fill color */
    transition: fill 0.3s ease; /* Add a smooth transition effect */
  }

  .svg-icon:hover {
    fill: #1100ff; 
    background-color:red;/* Fill color for hover state */
  }
`;

const SvgIcon = styled.img`
  width: 24px;
  height: 24px;
  &.active {
    filter: invert();
  }
`;



const Userimg = styled.img`
  border: 1px solid white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`
