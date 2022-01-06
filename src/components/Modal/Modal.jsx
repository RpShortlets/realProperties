import ReactDOM from "react-dom"
import React from "react"
import Backdrop from "../Backdrop"
import { CSSTransition } from "react-transition-group"
import  { CancelIcon } from "../../Svg/svg"
import Button from "../Button/Button"
import styled from "styled-components"

import "../../styles/utilities.css"


const MainModal = styled.div`
    z-index: 100;
    position: fixed;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 8px;


    @media screen and (max-width: 1024px) {
        width: 80%;
    }


`





const ModalOverLay = props => {
    const content = (
        <MainModal className="Modal">
            <div  style={{display:'flex', justifyContent: 'flex-end'}}>
                <Button icon={CancelIcon} onClicks={() => props.setShow(false)} className="Modal-btn" styles="Modal-Padding"/>
            </div>
            {props.children}
        </MainModal>
        
        
    )

    return ReactDOM.createPortal(content, document.getElementById("modal-portal"))
}


const Modal = (props) => {

    return (
        <>
            {props.show && <Backdrop onClick={()=> props.setShow(false)} /> }
            <CSSTransition in={props.show}
                mountOnEnter
                unmountOnExit 
                timeout={200}
                classNames="modal"
            >
                <ModalOverLay setShow={props.setShow}>
                    {props.children}
                </ModalOverLay>
            </CSSTransition>

        </>
    )
}

export default Modal
