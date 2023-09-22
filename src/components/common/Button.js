import styled from 'styled-components';

// Back ticks are called template literals.
// They allow you to embed variables and expressions
// into a string by wrapping them in ${}.
// It is a different way to call a function.
const Button = styled.button`
  color: white;
  background: #f8049c;
  font-weight: bold;
  padding: 8px;
  border-radius: 4px;
  box-shadow: none;
  font-size: 1em;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

// Explanation of the above: But with a component that is
// Styled components allow us not to have to write
// what is below. It is a function that returns a component.
// const Button2 = ({children}) => {
//   return (
//     <Button>{children}</Button>
//   );
// }

// This is a named export. It is a way to export multiple things
export { Button };
