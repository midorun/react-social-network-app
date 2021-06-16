import styled from 'styled-components'
import Img from '../../../components/Img';

export const DialogItem = styled.li`
  padding:10px 15px 10px 20px;
  height: 70px;
  display: flex;
  align-items: center;
`
export const DialogContent = styled.div`
    width: 100%;
`

export const DialogName = styled.div`
    margin: 3px 0 7px;
    font-size: 13px;
    color: #000000;
`;

export const DialogDate = styled.div`
  
`;

export const DialogImg = styled(Img)`
    padding: 11px 14px 7px 0;
`;

export const DialogText = styled.div`
  color: #626d7a;
`;