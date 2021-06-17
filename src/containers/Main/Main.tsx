import React from 'react'
import { Route, Switch } from 'react-router'
import Column from '../../components/Column'
import Container from '../../components/Container'
import Row from '../../components/Row'
import Messenger from '../../routes/Messenger'
import MyProfile from '../../routes/MyProfile'
import Navbar from '../Navbar'
import * as ST from './styled'

const Main = () => {
  return (
    <ST.Main>
      <Container>
        <Row>
          <Column>
            <Navbar />
          </Column>
          <Column>
            <Switch>
              <Route path="/MyProfile">
                <MyProfile />
              </Route>
              {/* <Route path="">
              <News />
            </Route> */}
              <Route path="/Messenger">
                <Messenger />
              </Route>
              {/* <Route path="">
              <Friends />
            </Route> */}
              {/* <Route path="">
              <Communities />
            </Route> */}
              {/* <Route path="">
              <Music />
            </Route> */}
            </Switch>
          </Column>
        </Row>
      </Container>
    </ST.Main>
  )
}

export default Main
