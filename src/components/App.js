import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Home from 'components/pages/Home';
import Login from 'components/pages/Login';
import LightTheme from 'themes/lightTheme';
import DarkTheme from 'themes/darkTheme';

const GlobalStyle = createGlobalStyle`
// This is how we apply global styles.
body {
  background: ${(props) => props.theme.bodyBackgroundColor};
  min-height: 100vh;
  margin: 0;
  /* padding-top: 5px; */
  margin-top: 5px;
  color: ${(props) => props.theme.bodyFontColor};
  font-family: 'Kaushan Script', cursive;
}
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((s) => (s.id === 'lightTheme' ? DarkTheme : LightTheme));
        },
      }}
    >
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
