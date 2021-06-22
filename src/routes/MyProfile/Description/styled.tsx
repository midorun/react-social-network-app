import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px 20px;
  width:550px;
  height: 230px;
  border-radius: 4px;
  background-color: #fff;
`;

export const Head = styled.div`
  padding-bottom: 15px;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--color-white-dark);
`;

export const Name = styled.h1`
  width: 60%;
  font-size: 19px;
  font-weight: 500;
`;

export const Online = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* width: 15%; */
  font-size: 12px;
  color: var(--color-gray-medium);
`;

export const Status = styled.span`
  margin-top: 5px;
  font-size: 13px;
`;

export const Short = styled.div`
  
`;

export const Full = styled.div`
  
`;