import React, { FC, ReactNode } from 'react'
import * as ST from './styled'

interface Props {
  children: ReactNode
}

const Row: FC<Props> = ({ children }) => {
  return (
    <ST.Row >
      {children}
    </ST.Row>
  )
}

export default Row
