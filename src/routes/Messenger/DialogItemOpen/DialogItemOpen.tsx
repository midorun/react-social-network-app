import React from 'react'
import { FC } from 'react';
import styled from 'styled-components/macro';

interface DialogItemOpenProps {
  itemId: string | null
}

const DialogItemOpen: FC<DialogItemOpenProps> = ({ itemId }) => {
  return (
    <Wrapper>
      {itemId}
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  width: 400px;
  height: 40px;
  background-color: var(--color-main);
`;

export default DialogItemOpen
