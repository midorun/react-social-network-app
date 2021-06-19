import Container from '../../components/Container';
import ArrowDownIcon from '../../components/Icons/ArrowDownIcon';
import BellIcon from '../../components/Icons/BellIcon';
import LogoIcon from '../../components/Icons/LogoIcon';
import MusicIcon from '../../components/Icons/MusicIcon';
import SearchBar from '../../components/SearchBar';

import ProfileImg from '../../Img/profile-img.jpg'
import { HeaderStyled } from './styled';

const Header = () => {
  return (
    <HeaderStyled className="header">
      <Container>
        <div className="header__inner">
          <div className="header__logo">
            <LogoIcon />
          </div>
          <SearchBar />
          <div className="header__icons">
            <BellIcon />
            <MusicIcon className="header-icon" />
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
        </div>
      </Container>
    </HeaderStyled>

  )
}

export default Header
