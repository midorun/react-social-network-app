import React, { FC } from 'react'
import styled from 'styled-components/macro'
import { Wrapper as DialogItemOpenWrapper } from '../routes/Messenger/DialogItemOpen/styled'
import { Wrapper as DialogItemWrapper } from '../routes/Messenger/DialogItem/styled'

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
    width: 100%;
    border-radius: ${({ rounded }) => rounded ? '50%' : 0}
  }

  ${DialogItemOpenWrapper} & {
    width: 30px;
    height: 30px;
  }
`

export default Image
