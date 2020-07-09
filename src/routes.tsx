import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Theme
import { DefaultTheme, ThemeProvider } from 'styled-components'
import usePersistedState from './services/utils/hooks/usePersistedState/usePersistedState'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import GlobalStyle from './styles/global'

// Pages & Shared Components
import Header from './components/shared/Header/Header'
import Home from './pages/Home/Home'
import SearchedMoviesPage from './pages/Movies/SearchedMoviesPage'
import NotFound from './pages/NotFound/NotFound'


const Routes: any = () => {

    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)

    const toggleTheme = () => {
        setTheme(theme.title === 'dark' ? light : dark)
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
                <Header toggleTheme={toggleTheme} />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/search/:query' component={SearchedMoviesPage} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default Routes