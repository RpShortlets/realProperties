import { FlexStyle, ModalStyle } from '../styles/globalStyles';
import styled from 'styled-components'
import Button from "./Button/Button"
import { FiMinus } from "react-icons/fi"
import { IoMdAdd } from "react-icons/io"
import Backdrop from './Backdrop';




const GuestDropdown = styled.div `
    padding: 1rem;
`

const AdultDiv = styled.div `
    display: flex;
    align-items: baseline;
    justify-content: space-between;


    div:first-child {
        h3 {
            font-size: var(--font-small-screen);
            font-weight: 600;
            margin: 0;

        }

        span {
            font-size: var(--font-xtraLarge-small);
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
    font-size: var(--font-xtra-small-screen);
    color: var(--color-dark)!important;    

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


const OpenGuestDropdown = ({width,left, top, setOpenGuest,openGuest,border,countAdultMinus, zIndex, countAdultAdd,countMinusChild, countAddChild, myRef, adultcount, styles, MinusAdult, childrencount, AddAdult, MinusChildren, AddChildren}) => {
    
    return (
        <>
            {openGuest  && <Backdrop onClick={()=> setOpenGuest(false)} zIndex={zIndex} /> }
            {openGuest && (
                <ModalDiv  width={width} top={top} border={border} left={left} ref={myRef} show={openGuest} setShow={setOpenGuest}>
                    <GuestDropdown>
                        <AdultDiv>
                            <div style={{color: 'var(--color-primary)'}}>
                                <h3>Adults</h3>
                                <span>Ages 18 and above</span>
                            </div>
                            <div>
                                <Button 
                                    disabled={adultcount < countAdultMinus} 
                                    classNames={adultcount < countAdultMinus ? styles.CountNotActive : styles.CountActive} 
                                    onClicks={MinusAdult} 
                                    icon={<FiMinus color='var(--color-primary-dark)' />} 
                                    display="flex" 
                                    padding="5px"  
                                    background="transparent"
                                />
                                    <SpanCount>{adultcount}</SpanCount>
                                <Button  
                                    classNames={adultcount < countAdultAdd ? styles.CountActive : styles.CountNotActive} 
                                    onClicks={AddAdult} 
                                    icon={<IoMdAdd  color='var(--color-primary-dark)'/>} 
                                    background="transparent" 
                                    padding="5px" 
                                    display="flex" 
                                />
                            </div>
                        </AdultDiv>
                        <AdultDiv>
                            <div style={{color: 'var(--color-primary)'}}>
                                <h3>Children</h3>
                                <span>Age 0 - 1</span>
                            </div>
                            <div>
                                <Button disabled={childrencount < countMinusChild}  classNames={childrencount < countMinusChild ? styles.CountNotActive : styles.CountActive} onClicks={MinusChildren} icon={<FiMinus  color='var(--color-primary-dark)' />} display="flex" padding="5px" background="#fff" />
                                    <SpanCount>{childrencount}</SpanCount>
                                <Button classNames={childrencount < countAddChild ? styles.CountActive : styles.CountNotActive} onClicks={AddChildren} icon={<IoMdAdd  color='var(--color-primary-dark)' />} background="#fff" padding="5px" display="flex" />
                            </div>
                        </AdultDiv>
                    </GuestDropdown>
                </ModalDiv>
            )}  
        </>
    )
}

export default OpenGuestDropdown
