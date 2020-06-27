import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            tertitary: string;
            forth: string;
            fifth: string;

            background: string;
            text: string;
        }
    }
}