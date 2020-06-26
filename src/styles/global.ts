import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #e4e4e4;
        font-size: 14px;
        color: #333;
        font-family: sans-serif;
    }
`