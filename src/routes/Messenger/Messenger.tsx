import DialogList from "./DialogList"
import styled from 'styled-components/macro'
import { Route, useHistory } from 'react-router-dom'

import dialogImgVorozheykin from '../../assets/Img/dialog-img-vorozheykin.jpg'
import dialogImgPetrov from '../../assets/Img/dialog-img-petrov.jpg'
import dialogImgChirkova from '../../assets/Img/dialog-img-chirkova.jpg'
import { useState } from "react"
import DialogItemOpen from "./DialogItemOpen"
export type DialogItemType = {
  id: number
  src: string
  name: string
  text: string
}

const state = {
  dialogList: [
    {
      id: 1,
      src: dialogImgVorozheykin,
      name: 'Dmitriy Vorozheykin',
      text: 'Wall Post'
    },
    {
      id: 2,
      src: dialogImgChirkova,
      name: 'Liza Chirkova',
      text: 'Все'
    },
    {
      id: 3,
      src: dialogImgPetrov,
      name: 'Alexey Petrov',
      text: 'Пхахпхаххпхпхп'
    }
  ],
  messages: [
    {
      sender: 2,
      recipient: 1,
      text: 'Пхаха'
    },
    {
      sender: 2,
      recipient: 1,
      text: 'Не буду'
    },
    {
      sender: 2,
      recipient: 1,
      text: 'Не сцы'
    },
    {
      sender: 1,
      recipient: 2,
      text: 'Ну смотри'
    },
  ]
}

const Messenger = () => {
  const [selectedDialogItemId, setSelectedDialogItemId] = useState<string | null>(null)
  const history = useHistory();

  const onDialogItemSelected = (id: number) => {
    setSelectedDialogItemId(id.toString())
    history.push(id.toString())
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
        render={() => <DialogItemOpen itemId={selectedDialogItemId} />}
      />
    </Styled>
  )
}

export const Styled = styled.div`
  height: 100vh;
`

export default Messenger
