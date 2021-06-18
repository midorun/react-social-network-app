import styled from 'styled-components/macro'
import {Wrapper as ColumnWrapper} from '../../../components/Column';


export const Wrapper = styled.li`
  padding:10px 15px 10px 20px;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 3px solid var(--color-main);

  ${ColumnWrapper}{
    justify-content: center;
  }
`

export const Name = styled.div`
    margin: 3px 0 7px;
    font-weight: 700;
    font-size: 15px;
    color: #000000;
`;

export const Text = styled.div`
  font-size: 13px;
  color: #626d7a;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;