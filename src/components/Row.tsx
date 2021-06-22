import { FC, ReactNode } from 'react'
import styled from 'styled-components/macro'

const Row: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Wrapper >
      {children}
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: row;

`

export default Row
