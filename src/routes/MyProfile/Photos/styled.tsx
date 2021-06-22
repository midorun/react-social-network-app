import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px 20px;
  margin-top: 15px;
  width: 100%;
  height: 190px;
  background-color: #fff;
  border-radius: 4px;
`;

export const Header = styled.div`
  display: flex;
  font-size: 14px;
`;

export const Text = styled.span`
  margin-right: 5px;
`;

export const Count = styled.span`
  color: var(--color-gray-medium);
`;

export const List = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.div`
  width: 123px;
  height: 123px;
  background-color: var(--color-gray-light);
  border-radius: 4px;
`;
