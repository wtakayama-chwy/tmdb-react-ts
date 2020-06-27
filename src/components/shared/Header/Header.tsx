import React, { useContext } from 'react';
import { Container } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

    const { colors, title } = useContext(ThemeContext)

    return (
        <Container>
            Hello World
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
    );
}

export default Header;