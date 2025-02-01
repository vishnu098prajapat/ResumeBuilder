import React from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const HeaderContainer = styled.header`
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    color: #3498db;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: #666;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #3498db;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover, &.active {
    color: #3498db;

    &:after {
      transform: scaleX(1);
    }
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => props.$primary ? `
    background: #3498db;
    color: white;
    border: none;

    &:hover {
      background: #2980b9;
    }
  ` : `
    background: transparent;
    color: #3498db;
    border: 2px solid #3498db;

    &:hover {
      background: #f8f9fa;
    }
  `}
`;

const CreateButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #3498db;
  color: white;
  border: none;

  &:hover {
    background: #2980b9;
  }

  i {
    font-size: 0.9rem;
  }
`;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <i className="fas fa-file-alt"></i>
          ResumeBuilder
        </Logo>

        <NavLinks>
          <NavLink to="/templates" className={isActive('/templates') ? 'active' : ''}>
            Templates
          </NavLink>
          {user && (
            <NavLink to="/dashboard" className={isActive('/dashboard') ? 'active' : ''}>
              My Resumes
            </NavLink>
          )}
          {user && (
            <CreateButton onClick={() => navigate('/templates')}>
              <i className="fas fa-plus"></i>
              Create Resume
            </CreateButton>
          )}
        </NavLinks>

        <AuthButtons>
          {user ? (
            <>
              <span>Welcome, {user.name}</span>
              <Button onClick={handleLogout}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button onClick={() => navigate('/login')}>
                Log in
              </Button>
              <Button $primary onClick={() => navigate('/register')}>
                Sign up
              </Button>
            </>
          )}
        </AuthButtons>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 