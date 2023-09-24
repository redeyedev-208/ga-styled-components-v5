import { useState } from 'react';
import styled from 'styled-components';
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';

// Gradients taken from https://uigradients.com/#Rastafari
// Alternatively you can use: https://coolors.co/colors to find a color palette.
// These are just my suggestions but feel free to use any resource you like.
const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, #005aa7, #fffde4);
  border-bottom: 3px solid #005aa7;
`;

const Menu = styled.nav`
  display: ${(props) => (props.open ? 'block' : 'none')};
  font-family: 'Open Sans', sans-serif;
  position: absolute;
  width: 100%;
  left: 0;
  top: 60px;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid #005aa7;
  background: white;

  // Add the media query styles here.
  // Using our mobile first approach, we will add the styles for mobile screens
  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    margin: auto 0 auto auto;
    border-bottom: none;
    position: relative;
    width: initial;
  }
`;

// There is a caveat when the is-active class is applied to the Link component.
// The Link component will render an anchor tag, which will not inherit the
// styles from the Menu component. To fix this, we can use the isActive prop to
// render a different component.

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterLink {...props}>{children}</ReactRouterLink>;
};

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  color: black;
`;

// Custom styled component for the hamburger menu icon.
const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  // We want to target the divs inside the MobileMenuIcon component.
  // These are the divs that will be the hamburger menu.
  // Also known as the children of the MobileMenuIcon component.
  > div {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }

  // This hides the hamburger menu icon on screens larger than 768px.
  @media (min-width: 768px) {
    display: none;
  }
`;

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuIsOpen((m) => !m)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuIsOpen}>
        <StyledLink
          to='/'
          isActive={pathname === '/'}
        >
          Home
        </StyledLink>
        <StyledLink
          to='/login'
          isActive={pathname === '/login'}
        >
          Login
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  );
}
