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
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <FaHome
            style={{
              width: '40px',
              height: '40px',
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
          <NavLink to="/skills" activeStyle>
            Skills
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
            GitHub
            <DiGithubBadge
              style={{
                width: '20px',
                height: '20px',
              }}
            />
          </NavbarBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}

export default Navbar;
