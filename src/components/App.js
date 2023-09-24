import { createGlobalStyle } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Home from 'components/pages/Home';
import Login from 'components/pages/Login';

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
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/login'
          element={<Login />}
        />
      </Routes>
    </>
  );
}

export default App;
