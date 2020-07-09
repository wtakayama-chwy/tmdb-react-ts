import styled from 'styled-components'

export const SearchedContainer = styled.section`
    margin-top: 1em;
    text-align: center;
    ul {
        li {
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            position: relative;
            max-width: 590px;
            margin: 0 auto;
            padding: 1em 0;

            .backdrop {
                position: relative;
                width: 50vw;
                max-width: 590px;

                .main-info {
                    position: absolute;
                    width: 590px;
                    max-width: 590px;
                    top: 50%;
                    opacity: 0;
                    transition: 0.5s ease-in-out;
                    pointer-events: none;

                    .searchedMovie-title {
                        display: flex;
                        flex-flow: column wrap;
                        text-align: center;
                        font-size: 1.2em;
                        font-weight: bold;
                        color: ${props => props.theme.colors.text};
                        line-height: 1.5em;
                    }

                    .searchedMovie-release-date, .searchedMovie-review {
                        font-size: 0.8em;
                        color: ${props => props.theme.colors.text};
                        line-height: 1.0em;
                    }
                }

                .searchedMovie-backdrop {
                    display: flex;
                    max-width: inherit;
                    height: auto;
                    transition: .25s ease-in-out;
                    cursor: pointer;

                    &:hover {
                        opacity: 0.2;
                    }
                }
            }

            .backdrop:hover .main-info {
                opacity: 1;
            }

            .overview {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-flow: column wrap;
                font-size: 0.9em;
                color: ${props => props.theme.colors.text};
                line-height: 1.8em;
                width: inherit;
                text-align: justify;
            }
        }
    }
`