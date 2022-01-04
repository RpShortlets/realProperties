import { FiMinus } from "react-icons/fi"
import { IoMdAdd } from "react-icons/io"
import {useDispatch, useSelector} from "react-redux"
import { incrementAdult, decrementAdult, incrementChildren, decrementChildren } from "../../../../../redux/actions/componentState"
import Button from "../../../../../components/Button/Button"
import styles from "../../../../../styles/home.module.css"
import { FlexStyle, ModalStyle } from '../../../../../styles/globalStyles';
import styled from 'styled-components'


const GuestDropdown = styled.div `
    padding: 1rem;
`

const AdultDiv = styled.div `
    display: flex;
    align-items: baseline;
    justify-content: space-between;


    div:first-child {
        h3 {
            font-size: var(--font-xtra-small);
            font-weight: 600;
            margin: 0;

        }

        span {
            font-size: var(--font-small-screen);
        }
    }

    div:last-child {
        ${FlexStyle}
        min-width: 120px;

        span {
            padding: 5px;
            border-radius: 33px;
            ${FlexStyle}
            justify-content: center;
            height: 25px;
            width: 25px;

            :disabled {
                background: #333;
            }
        }
    }


`

const SpanCount = styled.div `
    margin: 0 1rem;
    font-size: 1.1rem;    

`

const ModalDiv = styled.div`
    ${ModalStyle}

    label {
        display: block;
        color: #333;
        cursor: pointer;
        padding: 8px 15px;
    }

    label:hover {
        background: #eee;
    }

`



const GuestDropdowns = ({openGuest, handleGuest, myRef }) => {
        const dispatch = useDispatch();
        const {adultcount, childrencount} = useSelector(state => state.ComponentState)

        const AddAdult = () => {
            if(adultcount < 9) {
                dispatch(incrementAdult())
            }
        }

        const MinusAdult = () => {
            if(adultcount === 1) {
                return;
            } else {
                dispatch(decrementAdult())
            }
        }

        
        const AddChildren = () => {
            if(childrencount < 5) {
                dispatch(incrementChildren())
            }
        }

        const MinusChildren = () => {
            if(childrencount === 1) {
                return;
            } else {
                dispatch(decrementChildren())
            }
        }

    return (
        <>
        {/* <CSSTransition in={openGuest}
                    mountOnEnter
                    unmountOnExit 
                    timeout={200}
                    classNames="search"
                >
                    <> */}
                    
            {openGuest && (
                <ModalDiv onClick={handleGuest} width= "28vw" left="-65px" ref={myRef}>
                    <GuestDropdown>
                        <AdultDiv>
                            <div>
                                <h3>Adults</h3>
                                <span>Ages 13 and above</span>
                            </div>
                            <div>
                                <Button 
                                    disabled={adultcount < 1} 
                                    classNames={adultcount < 1 ? styles.CountNotActive : styles.CountActive} 
                                    onClicks={MinusAdult} 
                                    icon={<FiMinus />} 
                                    display="flex" 
                                    padding="5px"  
                                    background="#fff"
                                />
                                    <SpanCount>{adultcount}</SpanCount>
                                <Button  
                                    classNames={adultcount < 9 ? styles.CountActive : styles.CountNotActive} 
                                    onClicks={AddAdult} 
                                    icon={<IoMdAdd />} 
                                    background="#fff" 
                                    padding="5px" 
                                    display="flex" 
                                />
                            </div>
                        </AdultDiv>
                        <AdultDiv>
                            <div>
                                <h3>Children</h3>
                                <span>Age 2 - 12</span>
                            </div>
                            <div>
                                <Button disabled={childrencount < 1}  classNames={childrencount < 1 ? styles.CountNotActive : styles.CountActive} onClicks={MinusChildren} icon={<FiMinus />} display="flex" padding="5px" background="#fff" />
                                    <SpanCount>{childrencount}</SpanCount>
                                <Button classNames={childrencount < 5 ? styles.CountActive : styles.CountNotActive} onClicks={AddChildren} icon={<IoMdAdd />} background="#fff" padding="5px" display="flex" />
                            </div>
                        </AdultDiv>
                    </GuestDropdown>
                </ModalDiv>
            )}
                    
        </>
    )
}

export default GuestDropdowns
