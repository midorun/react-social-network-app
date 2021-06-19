import React, { FC, ReactNode } from 'react'
import styled from 'styled-components/macro';

const Column: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}


export const Wrapper = styled.div`
  /* height: 100%; */
  /* width: auto; */
  display: flex;
  flex-direction: column;
`;

export default Column
