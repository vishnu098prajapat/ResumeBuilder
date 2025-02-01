import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

const NavLink = styled(Link)`
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: #3498db;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Resume Builder</Logo>
        <NavLinks>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/templates">Templates</NavLink></li>
          <li><NavLink to="/builder">Create Resume</NavLink></li>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 