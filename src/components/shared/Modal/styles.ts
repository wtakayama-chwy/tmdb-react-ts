import styled from 'styled-components'

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background-color: ${props => props.theme.colors.fifth}
    }

    .modal-box {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 90vh;
        width: 90%;
        overflow-y: auto;
        background-color: ${props => props.theme.colors.background};
        box-shadow: 0 0 2em ${props => props.theme.colors.background};
        z-index: 101;
        padding: 3em;

        .modal-title {
            color: ${props => props.theme.colors.text}
        }
    }
`