import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text.primary};
`;

const Main = styled.main`
  flex: 1;
  background: ${props => props.theme.background};
  padding: 2rem 0;
`;

const StyledHeader = styled.header`
  background-color: ${props => props.theme.surface};
  border-bottom: 1px solid ${props => props.theme.border};
`;

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: white;
  
  &:hover {
    background-color: ${props => props.theme.primary}dd;
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout; 