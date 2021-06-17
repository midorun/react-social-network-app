import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  src: string,
  alt: string,
  className?: string,
  rounded?: boolean
}

const Image: FC<Props> = ({ src, alt, className, rounded }) => {
  return (
    <Wrapper className={className} rounded={rounded}>
      <img src={src} alt={alt} />
    </Wrapper>
  )
}

export const Wrapper = styled.div<{ rounded?: boolean }>`
  img{
    /* width: 100%; */
    border-radius: ${({ rounded }) => rounded ? '50%' : 0}
  }
`

export default Image
