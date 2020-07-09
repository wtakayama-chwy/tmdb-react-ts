import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Switch from 'react-switch'
import { shade } from 'polished'
import { ThemeContext } from 'styled-components'

import { Container } from './styles'
import logo from '../../../assets/logo-tmdb-main.svg'

interface Props {
    toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

    const { colors, title } = useContext(ThemeContext)

    return (
        <Container>
            <Link to="">
                <img className="main-logo" src={logo} alt="logo-tmdb" />
            </Link>
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={35}
                handleDiameter={15}
                offColor={colors.tertitary}
                onColor={shade(0.55, colors.primary)}
            />
        </Container>
    )
}

export default Header