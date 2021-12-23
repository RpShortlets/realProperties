import ReactDOM from "react-dom"
import React from "react"
import Backdrop from "./Backdrop"
import { CSSTransition } from "react-transition-group"
import  { CancelIcon } from "../Svg/svg"
import Button from "./Button"

import "../styles/utilities.css"



const ModalOverLay = props => {
    const content = (
        <div className="Modal">
            <div  style={{display:'flex', justifyContent: 'flex-end'}}>
                <Button icon={CancelIcon} onClicks={() => props.setShow(false)} className="Modal-btn" styles="Modal-Padding"/>
            </div>
            {props.children}
        </div>
        
        
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
