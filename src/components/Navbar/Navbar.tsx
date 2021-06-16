import CommunitiesIcon from "../../Icons/CommunitiesIcon"
import FriendsIcon from "../../Icons/FriendsIcon"
import MessengerIcon from "../../Icons/MessengerIcon"
import MusicIcon from "../../Icons/MusicIcon"
import NewsIcon from "../../Icons/NewsIcon"
import ProfileIcon from "../../Icons/ProfileIcon"

import { Link } from "react-router-dom"
import { NavStyled } from "./styled"

const Navbar = () => {
  return (

    <NavStyled className="nav">
      <ul>
        <li className="nav__li">
          <Link to="MyProfile" className="nav__link link" href="/">
            <div className="link__icon"><ProfileIcon /></div>
            <span className="link__text">My profile</span>
          </Link>
        </li>
        <li className="nav__li">
          <Link to="News" className="nav__link link" href="/">
            <div className="link__icon"><NewsIcon /></div>
            <span className="link__text">News</span>
          </Link>
        </li>
        <li className="nav__li">
          <Link to="Messenger" className="nav__link link" href="/">
            <div className="link__icon"><MessengerIcon /></div>
            <span className="link__text">Messenger</span>
          </Link>
        </li>
        <li className="nav__li">
          <Link to="Friends" className="nav__link link" href="/">
            <div className="link__icon"><FriendsIcon /></div>
            <span className="link__text">Friends</span>
          </Link>
        </li>
        <li className="nav__li">
          <Link to="Communities" className="nav__link link" href="/">
            <div className="link__icon"><CommunitiesIcon /></div>
            <span className="link__text">Communities</span>
          </Link>
        </li>
        <li className="nav__li">
          <Link to="Music" className="nav__link link" href="/">
            <div className="link__icon"><MusicIcon className="nav-icon" /></div>
            <span className="link__text">Music</span>
          </Link>
        </li>
      </ul>
    </NavStyled>
  )
}

export default Navbar
