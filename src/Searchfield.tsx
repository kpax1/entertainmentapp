import React from "react";
import { styled } from "styled-components";
import searchimg from "/assets/icon-search.svg";
interface props {
  search: React.FormEventHandler<HTMLFormElement>;
  placeholder: string
}


export default function Search({ search, placeholder }: props) {
  
  return (
    <Searchfield>
      <img src={searchimg} alt="" />
      <form onChange={search}>
        <Input type="search" placeholder={placeholder} />
      </form>
    </Searchfield>
  );
}

const Searchfield = styled.div`
  margin-top: 26px;
  display: flex;
  align-items: center;
  margin-left: 19px;
`;

const Input = styled.input`
  margin-left: 19px;
  background-color: #10141e;
  width: 100%;
  height: 20px;
  border: none;
  color: white;
  font-weight: 300;
  font-size: 16px;
  line-height: 20.16px;

  &::placeholder {
    color: white;
    opacity: 50%;
    font-size: 16px;
    line-height: 20.16px;
    font-weight: 300;
  }
`
