import { ReactComponent as CommunitiesIcon } from "../../assets/Icons/CommunitiesIcon.svg"
import { ReactComponent as FriendsIcon } from "../../assets/Icons/FriendsIcon.svg"
import { ReactComponent as MessengerIcon } from "../../assets/Icons/MessengerIcon.svg"
import { ReactComponent as MusicIcon } from "../../assets/Icons/MusicIcon.svg"
import { ReactComponent as NewsIcon } from "../../assets/Icons/NewsIcon.svg"
import { ReactComponent as ProfileIcon } from "../../assets/Icons/ProfileIcon.svg"
import * as ST from "./styled"

const Navbar = () => {
  return (
    <ST.Nav>
      <ST.NavList>
        <ST.Li to="/MyProfile" >
          <ProfileIcon />
          <ST.Text>My profile</ST.Text>
        </ST.Li>
        <ST.Li to="/News" >
          <NewsIcon />
          <ST.Text>News</ST.Text>
        </ST.Li>
        <ST.Li to="/Messenger/" >
          <MessengerIcon />
          <ST.Text>Messenger</ST.Text>
        </ST.Li>
        <ST.Li to="/Friends" >
          <FriendsIcon />
          <ST.Text>Friends</ST.Text>
        </ST.Li>
        <ST.Li to="/Communities" >
          <CommunitiesIcon />
          <ST.Text>Communities</ST.Text>
        </ST.Li>
        <ST.Li to="/Music">
          <MusicIcon />
          <ST.Text>Music</ST.Text>
        </ST.Li>
      </ST.NavList>
    </ST.Nav>
  )
}

export default Navbar
