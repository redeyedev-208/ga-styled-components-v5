// This is a regular styled component.
// This is also going to be rendering a few other styled components.
import { useState } from 'react';
import styled from 'styled-components';
import { Input } from './Input';

const PasswordInputWrapper = styled.div`
  display: flex;
  // We want to target the next sibling of the PasswordInputWrapper component.
  ~ div {
    margin-bottom: 8px;
  }
`;
// Using the same type of input is ok but there might be situations where you want to use a different type of input.
// We can leverage the attrs method to add a type and placeholder to the input.
// By adding the attrs we can then just pass down the props to the PasswordInput component.
// So this is great because even though you may be using the Input component,
// you can still pass down the props to the PasswordInput component.
// Doing it this way also provides the password input with the hidden password dots.
const PasswordInputStyled = styled(Input).attrs(() => ({
  type: 'password',
  placeholder: 'Password',
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: black;
`;

export function PasswordInput(props) {
  const [displayPassword, setDisplayPassword] = useState(false);

  return (
    <>
      <PasswordInputWrapper>
        <PasswordInputStyled {...props} />
        <ToggleButton onClick={() => setDisplayPassword((sdpw) => !sdpw)}>
          {displayPassword ? 'Hide' : 'Show'}
        </ToggleButton>
      </PasswordInputWrapper>
      <div>
        {
          // This is a ternary operator. To check if the displayPassword is true or false.
          displayPassword ? props.value : ''
        }
      </div>
    </>
  );
}
