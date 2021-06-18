import React, { FC, ReactNode } from 'react'
import styled from 'styled-components/macro'
import { Main } from '../containers/Main/styled'

const Row: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Wrapper >
      {children}
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

`

export default Row
