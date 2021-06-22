import styled from 'styled-components/macro'

export const Wrapper = styled.li`
  padding-left: 20px;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: #fff;
  cursor: pointer;

  &:hover{
    background-color: var(--color-white-light)
  }
`

export const ImageWrapper = styled.div`
    padding: 11px 14px 7px 0;
`;

export const Name = styled.div`
    margin: 3px 0 7px;
    position: relative;
    font-weight: 700;
    font-size: 15px;
    color: #000000;

    &:after{
      content: 'today';
      position: absolute;
      right: 40px;
      font-size: 12px;
      font-weight: 400;
      color: var(--color-gray-light)
    }
`;

export const Text = styled.div`
  margin-top: 4px;
  font-size: 13px;
  color: #626d7a;
`;

export const Content = styled.div`
  padding-top: 10px;
  width: 466px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-white-dark);
`;