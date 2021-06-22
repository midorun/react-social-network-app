import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  border: 1px solid var(--color-white-dark);
  border-radius: 4px;
`;

export const Header = styled.div`
  width: var(--messenger-content-width);
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid var(--color-white-dark);
`;

export const Back = styled(Link)`
  padding-left: 15px;
  width: 148px;
  height: inherit;
  display: flex;
  align-items: center;
  
  &:hover{
    background: linear-gradient(to right, #edeef0 50%,#ffffff);
  }
`;

export const BackText = styled.span`
  padding-left: 13px;
  font-size: 14px;
  color: var(--color-gray-medium);
`;


export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 255px;
  height: inherit;
`;

export const Name = styled.span`
  font-size: 13px;
  font-weight: 700;
`;

export const ImageWrapper = styled.div`
  padding-right: 20px;
  width: 151px;
  height: inherit;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Messages = styled.div`
  width: inherit;
  height: 412px;
  background-color: var(--color-white);
  overflow: auto;

  .MessagesInner{
    width: 550px;
    /* height: 100vh; */
    /* background-color: var(--color-gray-light); */
  }
`;

export const InputSection = styled.div`
  width: inherit;
  height: 77px;
  background-color: var(--color-white);
  border: 1px solid var(--color-white-dark);
`;
