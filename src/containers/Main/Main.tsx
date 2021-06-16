import { Route, Switch } from 'react-router'
import Messenger from '../../routes/Messenger'
import MyProfile from '../../routes/MyProfile'
import Navbar from '../Navbar'
import { MainStyled } from './styled'

const Main = () => {
  return (
    <MainStyled>
      <div className="container">
        <Navbar />
        <div className="main__content">
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
        </div>
      </div>
    </MainStyled>
  )
}

export default Main
