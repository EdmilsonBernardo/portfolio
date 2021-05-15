import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavbarBtnLink,
  Bars,
} from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
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
          >
            GitHub
          </NavbarBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}

export default Navbar;
