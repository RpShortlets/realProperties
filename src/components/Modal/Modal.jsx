import ReactDOM from "react-dom"
import React from "react"
import Backdrop from "../Backdrop"
import  { CancelIcon } from "../../Svg/svg"
import Button from "../Button/Button"
import styled from "styled-components"
import {motion, AnimatePresence} from "framer-motion"

import "../../styles/utilities.css"
import { useDispatch } from "react-redux"


const MainModal = styled.div`
    z-index: 11;
    position: fixed;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    transform: translateX(-50%);
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background: ${({ background }) => background ? background : 'var(--color-white)'};
    box-shadow: ${({boxShadow}) =>  boxShadow ? boxShadow : '0 2px 8px rgba(0, 0, 0, 0.26)'};
    border-radius:  ${({borderRadius}) => borderRadius ? borderRadius : "8px"};
    padding: ${({padding}) => padding ? padding : '1rem'};
    overflow: ${({ overflow }) => overflow};
    


    div svg {
        opacity: 1;
        font-size: var(--font-small-screen);
        color: var(--color-primary);
    }

    div svg:hover {
        opacity: 0.5;
    }


`

const ButtonContainer = styled.div `
    display: flex; 
    display: -webkit-flex;
    justify-content: ${({ justifyButton }) => justifyButton ? justifyButton : 'flex-end'}; 
    -webkit-box-align:  ${({ justifyButton }) => justifyButton ? justifyButton : 'end'};
    -webkit-box-pack: ${({ justifyButton }) => justifyButton ? justifyButton : 'end'};
    marginBottom: max(0.5vw, 1rem);

`



const ModalOverLay = ({justifyButton, ButtonBG, boxShadow, borderRadius, padding,top, exit, background, width, overFlow, right, height, left, initial, children, setShow, animate, transition, btn, show, setShowMobileReserveModal, reserveModal, dispatch}) => {

    const content = (
        <>
            <MainModal 
                as={motion.div}
                initial={initial}
                animate={animate}
                exit={exit ? exit : { opacity: 0 }}
                transition={transition}
                className="Modal" 
                padding={padding}
                top={top} 
                width={width} 
                left={left}
                overflow={overFlow}
                height={height}
                right={right}
                background={background}
                setShowMobileReserveModal={setShowMobileReserveModal}
                reserveModal={reserveModal}
                dispatch={dispatch}
                boxShadow={boxShadow}
                borderRadius={borderRadius}
            >
                {btn ? "" : (
                    <ButtonContainer
                        justifyButton={justifyButton}
                    >
                        <Button borderRadius='27px' padding="3px" display='flex' alignT='center' justify='center' height='35px' width='35px' background={ButtonBG ? ButtonBG : 'var(--color-primary)'} border='none' icon={CancelIcon}  onClicks={reserveModal ? () => dispatch(setShowMobileReserveModal(false)) : ()=> setShow(false)} className="Modal-btn" styles="Modal-Padding"/>
                    </ButtonContainer>
                )}
                {children}
            </MainModal>
            
    </>
                
    )

    return ReactDOM.createPortal(content, document.getElementById("modal-portal"))
}


const Modal = (props) => {
    const dispatch= useDispatch()
    return (
        <>
            {props.show && <Backdrop onClick={props.reserveModal ? () => dispatch(props.setShowMobileReserveModal(false)) : ()=> props.setShow(false)} theme={props.theme} /> }
            <AnimatePresence>
                {props.show && (
                    <ModalOverLay ButtonBG={props.ButtonBG}  justifyButton={props.justifyButton} dispatch={dispatch} boxShadow={props.boxShadow} borderRadius={props.borderRadius} reserveModal={props.reserveModal} setShowMobileReserveModal={props.setShowMobileReserveModal} height={props.height} background={props.background} right={props.right}  exit={props.exit} overFlow={props.overFlow} show={props.show} btn={props.btn} transition={props.transition} animate={props.animate} initial={props.initial} setShow={props.setShow} top={props.top} width={props.width} left={props.left} padding={props.padding}>
                        {props.children}
                    </ModalOverLay>
                )}
            </AnimatePresence>
            
        </>
    )
}

export default Modal
