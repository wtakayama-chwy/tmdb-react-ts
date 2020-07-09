import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { ModalContainer } from './styles'
import ReactDOM from 'react-dom'

const Modal = forwardRef((props: any, ref) => {

    const [display, setDisplay] = useState<boolean>(false)

    useImperativeHandle(ref, () => {
        return {
            open: () => openModal(),
            close: () => closeModal()
        }
    })

    const openModal = (): void => {
        setDisplay(true)
    }

    const closeModal = (): void => {
        setDisplay(false)
    }

    if (display) {
        return ReactDOM.createPortal(
            <ModalContainer>
                <div onClick={closeModal} className="modal-backdrop" />
                <div className="modal-box">
                    {props.children}
                </div>
            </ModalContainer>
            , (document.getElementById('modal-root') as HTMLElement)
        )
    }

    return null
})

export default Modal;