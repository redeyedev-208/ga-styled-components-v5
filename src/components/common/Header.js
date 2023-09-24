import styled from 'styled-components';
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-color: #eeeeee;
`;

const Menu = styled.nav`
  display: flex;
  position: relative;
  width: initial;
  border-bottom: none;
  margin: auto 0 auto auto;
  font-family: 'Open Sans', sans-serif;
  background: none;
  left: initial;
  top: initial;
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
`;

export function Header() {
  const { pathname } = useLocation();
  return (
    <HeaderWrapper>
      <Menu>
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
