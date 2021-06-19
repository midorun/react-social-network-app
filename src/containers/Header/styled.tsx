import styled from "styled-components";

export const HeaderStyled = styled.header`

  max-width: 100%;

  .header__inner {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
  }

  .header__logo {
    width: 170px;
    height: 100%;
    padding: 0 5px;
    display: flex;
    align-items: center;
    /* cursor: pointer; */
  }

  .header__icons {
    width: 96px;
    height: 48px;
    display: flex;
    align-items: center;
  }

  .header__icons> :not(:last-child) {
    margin-right: 30px;
  }

  .header__profile {
    width: 120px;
    height: 100%;
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  .profile__img-wrapper {
    width: 32px;
    height: 32px;
    margin-right: 5px;
    border-radius: 50%;
    background: #000;
  }

  .profile__nickname {
    margin-right: 10px;
    font-weight: 700;
  }

  .profile__img {
    width: 100%;
    border-radius: 50%;
  }

  .profile__icon {
    width: 10px;
    height: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .header-icon {
    width: 24px;
    height: 24px;
  }

  .logo-icon {
    width: 35px;
    height: 35px;
    cursor: pointer;
  }

`