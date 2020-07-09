import styled from 'styled-components'

export const SearchContainer = styled.section`
    display: flex;
    flex-flow: column wrap;
    max-width: 100vw;

    .img-wrapper {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        background: url('https://i.imgur.com/oRDauZ1.jpg') no-repeat fixed;
        background-size: cover;
        opacity: .94;
        width: 100%;
        height: 40vh;
        margin: 2.5rem 0;

        h1, h2 {
            color: white;
        }
    }

    .search-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3em;
        margin-top: 2em;

        input {
            border-radius: 0.4em;
            width: 100%;
            min-width: 32vw;
            height: inherit;
            font-size: 1.2em;
            text-align: center;
            background: white;
            color: #333;

            &:focus {
                outline: 0;
                color: #333;
            }

            &::placeholder {
                color: rgb(173, 175, 177);
            }
        }

        button {
            height: inherit;
            margin-left: -0.6em;
            background-color: #1A75C5;
            padding: 0 1.5em;
            font-size: 1rem;
            border-radius: 0.4em;
            color: white;

            &:hover {
                cursor: pointer;
                background-color: #1F2830;
            }
        }
    }
`