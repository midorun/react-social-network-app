import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Main } from '../containers/Main/styled'

const Row: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Wrapper >
      {children}
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

    ${Main} & {
    display: grid;
    grid-template-columns: 163px auto;
  }
`

export default Row
