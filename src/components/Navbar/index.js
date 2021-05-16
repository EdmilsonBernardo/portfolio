import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavbarBtnLink,
  Bars,
} from './NavbarElements'
import { DiGithubBadge } from 'react-icons/di';
import Ed from '../../images/myPicture.svg';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src={ Ed }
            alt="ed"
            height={50}
            style={{
              borderRadius: '50%',
            }}  
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/contacts" activeStyle>
            Contacts
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavbarBtnLink
            href="https://github.com/EdmilsonBernardo"
            target="_blank"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            GitHub <DiGithubBadge />
          </NavbarBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}

export default Navbar;
