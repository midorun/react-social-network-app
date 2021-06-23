import styled from 'styled-components/macro';


import Image from '../../../components/Image'
import Photo from '../../../assets/Img/photo-1.jpg'

const PostsAdd = () => {
  return (
    <Wrapper>
      <Image src={Photo} alt="input image" rounded />
      <Input type="text" placeholder="What's new?" />
      <Submit>Add</Submit>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  margin-top: 15px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 50px;
  background-color: #fff;
  border-bottom: 1px solid var(--color-white-dark);
  border-radius: 4px;
`;

export const Input = styled.input`
  padding-right: 15px;
  width: 100%;
`;

export const Submit = styled.button`
  width: 150px;
  height: 30px;
  background-color: var(--color-white-dark);
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default PostsAdd
