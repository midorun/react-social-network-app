import { Route, useHistory } from 'react-router-dom'
import { useState } from "react"
import styled from 'styled-components/macro'

import DialogList from "./DialogList"
import DialogItemOpen from "./DialogItemOpen"

import dialogImgVorozheykin from '../../assets/Img/dialog-img-vorozheykin.jpg'
import dialogImgPetrov from '../../assets/Img/dialog-img-petrov.jpg'
import dialogImgChirkova from '../../assets/Img/dialog-img-chirkova.jpg'
import { DialogItemType } from '../../types/types'

const state = {
  dialogList: [
    {
      id: 1,
      src: dialogImgVorozheykin,
      name: 'Dmitriy Vorozheykin',
      text: 'Wall Post',
      messages: []
    },
    {
      id: 2,
      src: dialogImgChirkova,
      name: 'Liza Chirkova',
      text: 'Все',
      messages: [
        {
          senderId: 2,
          recipientId: 1,
          text: 'Пхаха'
        },
        {
          senderId: 2,
          recipientId: 1,
          text: 'Не буду'
        },
        {
          senderId: 2,
          recipientId: 1,
          text: 'Не сцы'
        },
        {
          senderId: 1,
          recipientId: 2,
          text: 'Ну смотри'
        },
      ]
    },
    {
      id: 3,
      src: dialogImgPetrov,
      name: 'Alexey Petrov',
      text: 'Пхахпхаххпхпхп',
      messages: []
    }
  ],
}

const Messenger = () => {
  const [selectedDialogItemId, setSelectedDialogItemId] = useState<number>()
  const history = useHistory();

  const onDialogItemSelected = (id: number) => {
    setSelectedDialogItemId(id)
    history.push(`${id}`)
  }

  const getDialogItem = (dialogItemId: number | undefined) => {
    return state.dialogList.find(({ id }) => id === dialogItemId) || ([] as unknown) as DialogItemType
  }

  return (
    <Styled>
      <Route exact path="/Messenger">
        <DialogList
          dialogList={state.dialogList}
          onDialogItemSelect={onDialogItemSelected}
        />
      </Route>
      <Route
        path="/Messenger/:id"
        render={() => <DialogItemOpen dialogItem={getDialogItem(selectedDialogItemId)} />}
      />
    </Styled>
  )
}

export const Styled = styled.div`
  height: 100vh;
`

export default Messenger
