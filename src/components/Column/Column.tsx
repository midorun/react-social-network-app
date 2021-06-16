import React, { FC, ReactNode } from 'react'
import * as ST from './styled'

interface Props {
  children: ReactNode
}

const Column: FC<Props> = ({ children }) => {
  return (
    <ST.Column>
      {children}
    </ST.Column>
  )
}

export default Column
