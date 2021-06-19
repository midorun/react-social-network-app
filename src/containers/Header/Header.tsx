import Container from '../../components/Container';
import { ReactComponent as ArrowDownIcon } from '../../assets/Icons/ArrowDownIcon.svg';
import { ReactComponent as BellIcon } from '../../assets/Icons/BellIcon.svg';
import { ReactComponent as LogoIcon } from '../../assets/Icons/LogoIcon.svg';
import { ReactComponent as MusicIcon } from '../../assets/Icons/MusicIcon.svg';
import ProfileImg from '../../assets/Img/profile-img.jpg'
import * as ST from './styled';
import SearchBar from '../../components/SearchBar';

const Header = () => {
  return (
    <ST.Header>
      <Container>
        <ST.Inner>
          <ST.LogoWrapper to="/">
            <LogoIcon />
          </ST.LogoWrapper>
          <SearchBar />
          <div className="header__icons">
            <BellIcon />
            <MusicIcon />
          </div>
          <div className="header__profile profile">
            <div className="profile__nickname">Dmitriy</div>
            <div className="profile__img-wrapper">
              <img className="profile__img" src={ProfileImg} alt="" />
            </div>
            <div className="profile__icon">
              <ArrowDownIcon />
            </div>
          </div>
        </ST.Inner>
      </Container>
    </ST.Header>

  )
}

export default Header
