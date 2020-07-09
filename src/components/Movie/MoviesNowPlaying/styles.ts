import styled from 'styled-components'

export const MovieContainer = styled.div`
    margin-top: 2em;

    .movies-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, 14rem);
        justify-content: space-around;
        align-items: center;
        grid-gap: 1.5em;
        /* width: 100%; */
        margin: 0 1em;

        .movie-item {
            list-style: none;
            width: 14rem;
            height: 21rem;
            box-sizing: border-box;
            position: relative;

            .image-container {
                width: inherit;
                position: relative;
                background-color: #2A337C;
                overflow: hidden;
                height: inherit;

                &:hover {
                    cursor: pointer;
                }

                .movie-image {
                    width: 14rem;
                    opacity: 0.85;
                    object-fit: cover;

                    &:hover {
                        opacity: 0.2;
                    }
                }

                .movie-title {
                    position: absolute;
                    text-align: center;
                    width: inherit;
                    top: 50%;
                    font-weight: bold;
                    font-size: 1.2rem;
                    opacity: 0;
                    transition: .25s ease-in-out;
                    pointer-events: none;
                }
            }

            .image-container:hover .movie-title {
                opacity: 1;
                transform: translateY(0px);
                margin-bottom: -0.6rem;
            }
        }
    }

`