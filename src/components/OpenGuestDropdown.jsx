import { FlexStyle, ModalStyle } from '../styles/globalStyles';
import styled from 'styled-components'
import Button from "./Button/Button"
import { FiMinus } from "react-icons/fi"
import { IoMdAdd } from "react-icons/io"



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


const OpenGuestDropdown = ({width,left, top, openGuest,border,countAdultMinus, countAdultAdd,countMinusChild, countAddChild, handleGuest, myRef, adultcount, styles, MinusAdult, childrencount, AddAdult, MinusChildren, AddChildren}) => {
    return (
        <>
            {openGuest && (
                <ModalDiv onClick={handleGuest} width={width} top={top} border={border} left={left} ref={myRef}>
                    <GuestDropdown>
                        <AdultDiv>
                            <div>
                                <h3>Adults</h3>
                                <span>Ages 13 and above</span>
                            </div>
                            <div>
                                <Button 
                                    disabled={adultcount < countAdultMinus} 
                                    classNames={adultcount < countAdultMinus ? styles.CountNotActive : styles.CountActive} 
                                    onClicks={MinusAdult} 
                                    icon={<FiMinus />} 
                                    display="flex" 
                                    padding="5px"  
                                    background="#fff"
                                />
                                    <SpanCount>{adultcount}</SpanCount>
                                <Button  
                                    classNames={adultcount < countAdultAdd ? styles.CountActive : styles.CountNotActive} 
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
                                <Button disabled={childrencount < countMinusChild}  classNames={childrencount < countMinusChild ? styles.CountNotActive : styles.CountActive} onClicks={MinusChildren} icon={<FiMinus />} display="flex" padding="5px" background="#fff" />
                                    <SpanCount>{childrencount}</SpanCount>
                                <Button classNames={childrencount < countAddChild ? styles.CountActive : styles.CountNotActive} onClicks={AddChildren} icon={<IoMdAdd />} background="#fff" padding="5px" display="flex" />
                            </div>
                        </AdultDiv>
                    </GuestDropdown>
                </ModalDiv>
            )}  
        </>
    )
}

export default OpenGuestDropdown
