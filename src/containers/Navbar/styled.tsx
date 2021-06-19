import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`

  .nav__link {
    display: flex;
  }

  .nav-icon {
    width: 17px;
    height: 17px;
    margin-right: 13px;
    margin-left: 7px;
  }
`

export const NavList = styled.ul`
  margin-right: 10px;
`

export const Li = styled(Link)`
  width: 160px;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0 5px;


  &:hover{
    background-color: var(--background--nav-link-hover);
  }
`