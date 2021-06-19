import CommunitiesIcon from "../../components/Icons/CommunitiesIcon"
import FriendsIcon from "../../components/Icons/FriendsIcon"
import MessengerIcon from "../../components/Icons/MessengerIcon"
import MusicIcon from "../../components/Icons/MusicIcon"
import NewsIcon from "../../components/Icons/NewsIcon"
import ProfileIcon from "../../components/Icons/ProfileIcon"
import * as ST from "./styled"

const Navbar = () => {
  return (
    <ST.Nav className="nav">
      <ST.NavList>
        <ST.Li to="/MyProfile" className="nav__link link" href="/">
          <div className="link__icon"><ProfileIcon /></div>
          <span className="link__text">My profile</span>
        </ST.Li>
        <ST.Li to="/News" className="nav__link link" href="/">
          <div className="link__icon"><NewsIcon /></div>
          <span className="link__text">News</span>
        </ST.Li>
        <ST.Li to="/Messenger/" className="nav__link link" href="/">
          <div className="link__icon"><MessengerIcon /></div>
          <span className="link__text">Messenger</span>
        </ST.Li>
        <ST.Li to="/Friends" className="nav__link link" href="/">
          <div className="link__icon"><FriendsIcon /></div>
          <span className="link__text">Friends</span>
        </ST.Li>
        <ST.Li to="/Communities" className="nav__link link" href="/">
          <div className="link__icon"><CommunitiesIcon /></div>
          <span className="link__text">Communities</span>
        </ST.Li>
        <ST.Li to="/Music" className="nav__link link" href="/">
          <div className="link__icon"><MusicIcon className="nav-icon" /></div>
          <span className="link__text">Music</span>
        </ST.Li>
      </ST.NavList>
    </ST.Nav>
  )
}

export default Navbar
