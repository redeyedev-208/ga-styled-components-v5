import { createGlobalStyle, ThemeProvider } from 'styled-components';
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

// We need to create a theme for the ThemeProvider.
// This is where we can store colors, fonts, etc.
// All we need to do is create an object with the values we want.
// So styled components will inject variables as props into our styled components.
const theme = {
  primaryColor: '#2a5298',
  secondaryColor: '#2c3e50',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
