import { Button } from 'components/common';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
// This is how we apply global styles.
body {
  background: white;
  min-height: 100vh;
  margin: 0;
  color: black;
  font-family: 'Kaushan Script', cursive;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>App</h1>
      <Button>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button large>Large</Button>
    </>
  );
}

export default App;
