import React from 'react'
import styled from 'styled-components/macro'
import DialogItem from '../DialogItem'
import SeacrchBar from '../../../components/SearchBar'

const DialogList = () => {
  return (
    <Wrapper>
      <SeacrchBar />
      <DialogItem />
      <DialogItem />
      <DialogItem />
      <DialogItem />
    </Wrapper>
  )
}

export const Wrapper = styled.ul`
    width: var(--dialog-list-width);
`

export default DialogList
