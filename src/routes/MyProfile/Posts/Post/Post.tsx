import styled from 'styled-components/macro';

import Image from '../../../../components/Image'
import Column from '../../../../components/Column';
import Row from '../../../../components/Row';

import { ReactComponent as LikeIcon } from '../../../../assets/Icons/LikeIcon.svg'
import photo from '../../../../assets/Img/photo-1.jpg'

const Post = () => {
  return (
    <Wrapper>
      <Header>
        <Row>
          <Column>
            <PostImage>
              <Image src={photo} alt="" rounded />
            </PostImage>
          </Column>
          <Column>
            <Name>Dmitriy Vorozheykin made something</Name>
            <Date>11 Jan at 12:06 am</Date>
          </Column>
        </Row>
      </Header>
      <Content>
        Post content
      </Content>
      <Footer>
        <Row>
          <LikeIcon className="like-icon" />
          <LikeCount>1</LikeCount>
        </Row>
      </Footer>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  margin-top: 15px;

  .like-icon{
    margin-right: 5px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

export const Header = styled.div``;

export const PostImage = styled.div`
  margin-right: 15px;
  width: 50px;
  height: 50px;
`;

export const Content = styled.div`
  margin-top: 15px;
`;

export const Footer = styled.div`
  margin-top: 15px;
`;

export const LikeCount = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--color-gray-dark);
  font-weight: 700;
`;



export const Name = styled.span`
  
`;
export const Date = styled.span`
  
`;

export default Post
