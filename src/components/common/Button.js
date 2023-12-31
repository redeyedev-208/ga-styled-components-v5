import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const largeStyles = ({ large }) => {
  if (large) {
    return css`
      padding: 10px;
      border-radius: 5px;
      font-size: 1.5em;
    `;
  } else {
    return css`
      padding: 8px;
      border-radius: 4px;
      font-size: 1em;
    `;
  }
};

const Button = styled.button`
  color: white;
  background: ${(props) =>
    props.secondary ? props.theme.secondaryColor : props.theme.primaryColor};
  font-weight: bold;
  ${largeStyles}
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

// https://github.com/facebook/prop-types
// Annotating the props that the component accepts.
// This is not required, but it will help you and others
// Good luck figuring out what props a component accepts.
// You got this!
Button.propTypes = {
  large: PropTypes.bool,
  secondary: PropTypes.bool,
};

export { Button };
