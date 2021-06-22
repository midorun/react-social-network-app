import styled from 'styled-components/macro'
import DialogItem from '../DialogItem'
import SeacrchBar from '../../../components/SearchBar'
import { FC } from 'react'
import { DialogItemType } from '../../../types/types'

interface Props {
  dialogList: DialogItemType[]
  onDialogItemSelect: (selectedDialogItemId: number) => void
}

const DialogList: FC<Props> = ({ dialogList, onDialogItemSelect }) => {

  // По клику на айтем, запрос на сервер с айди айтема и загружать данные этого самого айтема

  return (
    <Wrapper>
      <SeacrchBar />
      {dialogList.map((dialogItem) =>
      (
        <DialogItem
          key={dialogItem.id}
          dialogItem={dialogItem}
          onDialogItemSelect={onDialogItemSelect}
        />
      ))}
    </Wrapper>
  )
}

export const Wrapper = styled.ul`
    width: var(--messenger-content-width);
`

export default DialogList
