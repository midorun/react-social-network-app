import { FC } from 'react'
import styled from 'styled-components/macro'
import { Wrapper as DialogItemOpenWrapper } from '../routes/Messenger/DialogItemOpen/styled'
import { ImageWrapper as MyProfileWrapper } from '../routes/MyProfile/MyProfile'
import { Wrapper as PostsAddWrapper } from '../routes/MyProfile/PostsAdd/PostsAdd'
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

  ${MyProfileWrapper} & {
    margin-right: 15px;
    padding: 15px;
    width: 230px;
    height: 230px;
    border-radius: 4px;
    background-color: #fff;

    img{
      border-radius: 4px;
    }
  }

  ${PostsAddWrapper} & {
    margin-right: 10px;
    width: 28px;
    height: 28px;
  }

`

export default Image
