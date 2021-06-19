import React from 'react'
import styled from 'styled-components/macro';
import LoupeIcon from '../components/Icons/LoupeIcon';
import { Wrapper as DialogListWrapper } from '../routes/Messenger/DialogList/DialogList'
const SearchBar = () => {
  return (
    <Wrapper>
      <LoupeIcon />
      <Input type="text" placeholder="Search" />
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  width: 230px;
  height: 32px;
  margin-right: 30px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background: #edeef0;

  ${DialogListWrapper} & {
    padding-right: 70px;
    width: var(--dialog-list-width);
    height: 50px;
    border-radius: 4px;
    border-bottom: 2px solid var(--color-main);
    background-color: #fff;
  }
`;

export const Input = styled.input`
    width:100%;
    border: none;
    outline: none;
    background: none;
    font-size: 13px;
`;
export default SearchBar
