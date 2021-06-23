import styled from 'styled-components/macro'

import Photo from '../../assets/Img/photo-1.jpg'
import Column from '../../components/Column'
import Row from '../../components/Row'
import Description from './Description'
import Photos from './Photos'
import Image from '../../components/Image'
import Posts from './Posts'
import PostsAdd from './PostsAdd'

const MyProfile = () => {
  return (
    <Wrapper>
      <Row>
        <Column>
          <ImageWrapper>
            <Image src={Photo} alt="profile image" />
          </ImageWrapper>
        </Column>
        <Column>
          <Description />
        </Column>
      </Row>
      <Row><Photos /></Row>
      <Row><PostsAdd /></Row>
      <Row><Posts /></Row>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  width: 795px;
`;

export const ImageWrapper = styled.div`
  
`;

export default MyProfile
