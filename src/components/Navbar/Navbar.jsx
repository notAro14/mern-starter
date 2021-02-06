import React from 'react';
import styled from 'styled-components';
import Link from '../Link/Link';

const NavbarContainer = styled.nav`
  align-items: center;
  display: flex;
  height: 150px;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem 0;
  }
`;

const Navigation = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 0;
  }
`;

const Logo = styled.span`
  display: block;
`;

const NavigationElement = styled.li``;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Your Logo</Logo>
      <Navigation>
        <NavigationElement>
          <Link to="/">Home</Link>
        </NavigationElement>
        <NavigationElement>
          <Link to="/installation">Installation</Link>
        </NavigationElement>
        <NavigationElement>
          <Link to="/404">Dead Link</Link>
        </NavigationElement>
      </Navigation>
    </NavbarContainer>
  );
};

export default Navbar;
