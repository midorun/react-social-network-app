import React, { FC } from 'react'
import * as ST from './styled'

interface Props {
  src: string,
  alt: string,
  className?: string,
  rounded?: boolean
}

const Img: FC<Props> = ({ src, alt, className, rounded }) => {
  return (
    <ST.Wrapper className={className} rounded={rounded}>
      <img src={src} alt={alt} />
    </ST.Wrapper>
  )
}

export default Img
