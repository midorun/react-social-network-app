import ArrowDownIcon from '../../Icons/ArrowDownIcon';
import BellIcon from '../../Icons/BellIcon';
import LogoIcon from '../../Icons/LogoIcon';
import LoupeIcon from '../../Icons/LoupeIcon';
import MusicIcon from '../../Icons/MusicIcon';

import ProfileImg from './profile-img.jpg'
import { HeaderStyled } from './styled';

const Header = () => {
  return (
    <HeaderStyled className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <LogoIcon />
          </div>
          <div className="header__searchbar">
            <LoupeIcon />
            <input className="header__input" type="text" placeholder="Search" />
          </div>
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
      </div>
    </HeaderStyled>

  )
}

export default Header
