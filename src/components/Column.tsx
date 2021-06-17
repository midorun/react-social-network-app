import React, { FC, ReactNode } from 'react'
import styled from 'styled-components';

const Column: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Column
