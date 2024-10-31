// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background: #333;
  padding: 10px;
  color: #fff;
`;

const Header = () => (
  <Nav>
    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
    <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</Link>
    <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
  </Nav>
);

export default Header;
