import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import propTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';

const LayoutContainer = styled.div`
  height: 100vh;
  padding: 0 100px;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  html {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    scroll-behavior: smooth;
  }
  body {
    background-color: #eee;
  }
  ul {
    list-style-type: none;
  }
  h1 {
    margin-bottom: 1rem;
  }
`;

const Layout = ({ children }) => (
  <LayoutContainer>
    <GlobalStyles />
    <Navbar />
    {children}
  </LayoutContainer>
);

Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
