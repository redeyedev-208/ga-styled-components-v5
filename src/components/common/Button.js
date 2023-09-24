import styled, { css } from 'styled-components';

// Back ticks are called template literals.
// They allow you to embed variables and expressions
// into a string by wrapping them in ${}.
// This allows us access to the props that are passed to the component.
// It is a different way to call a function.
// Note: Also when we add props to a componen
// Note: It actually is adding an attribute to the component and not a prop.

// Explanation of what is the main benefit of Styled Components: But with a component that is
// Styled components allow us not to have to write
// what is below. It is a function that returns a component.
// const Button2 = ({children}) => {
//   return (
//     <Button>{children}</Button>
//   );
// }

const Button = styled.button`
  color: white;
  background: ${(props) => (props.secondary ? '#2c3e50' : '#2a5298')};
  /* background: #f8049c; */
  font-weight: bold;
  // Don't write compost like this, no syntax highlighting is available.
  // It also looks ugly.
  // Css helper functions are available to accomplish this.
  /* ${(p) => (p.large ? 'padding:8px; font-size:1.5em;' : '')} */
  /* CSS Helpers Example: */
  ${(p) =>
    p.large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}
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

// This is a named export. It is a way to export multiple things
export { Button };
