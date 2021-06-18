import React, { FC } from 'react'
import styled from 'styled-components/macro'
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
    /* width: 100%; */
    border-radius: ${({ rounded }) => rounded ? '50%' : 0}
  }

  ${DialogItemWrapper} & {
    padding: 11px 14px 7px 0;
  }

`

export default Image
