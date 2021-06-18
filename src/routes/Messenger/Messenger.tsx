import DialogList from "./DialogList"
import styled from 'styled-components/macro'
import { Route } from 'react-router-dom'

const Messenger = () => {
  return (
    <Styled>
      <Route path="/Messenger">
        <DialogList />
      </Route>
    </Styled>
  )
}

export const Styled = styled.div`
  height: 100vh;
`

export default Messenger
