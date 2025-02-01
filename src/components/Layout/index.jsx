import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Main = styled.main`
  min-height: calc(100vh - 70px); // Adjust based on header height
  background: #f8f9fa;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout; 