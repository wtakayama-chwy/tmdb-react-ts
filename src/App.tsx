import React from 'react'
import Routes from './routes'
import GlobalStyle from './styles/global'

import { DefaultTheme, ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import usePersistedState from './services/utils/usePersistedState';

import Header from './components/shared/Header/Header'

function App() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <div className="App">
        <GlobalStyle />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
