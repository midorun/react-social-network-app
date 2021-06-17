import React, { ReactNode } from 'react'
import { FC } from 'react';
import styled from 'styled-components';

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 990px;
`;

export default Container