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
              <Route path="/MyProfile" render={() => <MyProfile />} />
              <Route path="/Messenger" render={() => <Messenger />} />
              {/* <Route path="/News" render={()=> <News/>}/>
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
