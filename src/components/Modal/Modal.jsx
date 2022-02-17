import ReactDOM from "react-dom"
import React from "react"
import Backdrop from "../Backdrop"
import  { CancelIcon } from "../../Svg/svg"
import Button from "../Button/Button"
import styled from "styled-components"
import {motion, AnimatePresence} from "framer-motion"

import "../../styles/utilities.css"


const MainModal = styled.div`
    z-index: 11;
    position: fixed;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    transform: translateX(-50%);
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 8px;
    padding: 1rem;
    overflow: ${({ overflow }) => overflow};
    


    /* @media screen and (max-width: 1024px) {
        width: 90%;
    } */

    div svg {
        opacity: 1;
        font-size: var(--font-small-screen);
        color: var(--color-primary);
    }

    div svg:hover {
        opacity: 0.5;
    }


`

// const dropIn = {
// hidden: {
//     y: "-100vh",
//     opacity: 0,
// },
// visible: {
//     y: "0",
//     opacity: 1,
//     transition: {
//     duration: 0.1,
//     type: "spring",
//     damping: 25,
//     stiffness: 500,
//     },
// },
// exit: {
//     y: "100vh",
//     opacity: 0,
// },
// };



const ModalOverLay = ({top, width, overFlow, right, height, left, initial, children, setShow, animate, transition, btn, show}) => {

    const content = (
        <AnimatePresence>
            {show && (
            <MainModal 
                as={motion.div}
                initial={initial}
                animate={animate}
                exit={{ opacity: 0 }}
                transition={transition}
                className="Modal" 
                top={top} 
                width={width} 
                left={left}
                overflow={overFlow}
                height={height}
                right={right}
            >
                {btn ? "" : (
                    <div  style={{display:'flex', justifyContent: 'flex-start', marginBottom: 'max(0.5vw, 1rem)'}}>
                        <Button borderRadius='27px' padding="3px" display='flex' alignT='center' justify='center' height='35px' width='35px' background='var(--color-primary)' border='none' icon={CancelIcon} onClicks={() => setShow(false)} className="Modal-btn" styles="Modal-Padding"/>
                    </div>
                )}
                {children}
            </MainModal>
            )}
        </AnimatePresence>
                
    )

    return ReactDOM.createPortal(content, document.getElementById("modal-portal"))
}


const Modal = (props) => {
    return (
        <>
            {props.show && <Backdrop onClick={()=> props.setShow(false)} theme={props.theme} /> }
            
            <ModalOverLay height={props.height} right={props.right} overFlow={props.overFlow} show={props.show} btn={props.btn} transition={props.transition} animate={props.animate} initial={props.initial} setShow={props.setShow} top={props.top} width={props.width} left={props.left}>
                {props.children}
            </ModalOverLay>
        </>
    )
}

export default Modal
