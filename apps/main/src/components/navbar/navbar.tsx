import React from 'react';
import styled from 'styled-components';
import {RiMenu3Line, RiCloseLine} from 'react-icons/all';
import logo from '../../assets/logo.svg';
import NavbarStyled from './navbar.styled';

const Navbar = () => {
  return (
    <NavbarStyled>
      <div className="gpt3-navbar-links">
        <div className="gpt3-navbar-links-logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="gpt3-navbar-links-container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wpt3">What is GPT3</a></p>
          <p><a href="#possibility">Open Ai</a></p>
          <p><a href="#feature">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>

        </div>
      </div>
    </NavbarStyled>
  );
}

export default Navbar;
