import { Route, Switch } from 'react-router'
import Messendger from '../../routes/Messendger'
import MyProfile from '../../routes/MyProfile'
import Navbar from '../Navbar/Navbar'
import { MainStyled } from './styled'

const Main = () => {
  return (
    <MainStyled>
      <div className="container">
        <Navbar />
        <div className="main__content">
          <Switch>
            <Route path="">
              <MyProfile />
            </Route>
            <Route path="">
              {/* <News /> */}
            </Route>
            <Route path="">
              <Messendger />
            </Route>
            <Route path="">
              {/* <Friends /> */}
            </Route>
            <Route path="">
              {/* <Communities /> */}
            </Route>
            <Route path="">
              {/* <Music /> */}
            </Route>
          </Switch>
        </div>
      </div>
    </MainStyled>
  )
}

export default Main
