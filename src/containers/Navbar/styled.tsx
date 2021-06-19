import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Nav = styled.nav`

  .nav__link {
    display: flex;
  }

  .nav-icon {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    color: var(--color-icon);
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
  padding: 0 6px;


  &:hover{
    background-color: var(--background--nav-link-hover);
  }
`

export const Text = styled.span`
  font-size: 14px;
`;