import { FlexStyle, ModalStyle } from '../styles/globalStyles';
import { motion } from 'framer-motion';
import styled from 'styled-components'
import Button from "./Button/Button"
import { FiMinus } from "react-icons/fi"
import { IoMdAdd } from "react-icons/io"
import Backdrop from './Backdrop';
import useMediaQuery from '../hooks/useMediaQuery/useMediaQuery';




const GuestDropdown = styled.div `
    padding: 1rem;
`

const AdultDiv = styled.div `
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 1rem;


    div:first-child {
        flex: 2;
        h3 {
            font-size: var(--font-big);
            font-weight: 500;
            margin: 0;

        }

        span {
            font-size: var(--font-small);

        }
    }

    div:last-child {
        flex: 1;
        ${FlexStyle}
        /* min-width: 120px; */

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

    .adultButton {
        flex: 1;
        margin: 0 0.5rem;
    }

    @media (min-width: 768px) { 

        .adultButton {
            flex: 1;
            ${FlexStyle}
            justify-content: center;
        }

        div:first-child { 
            
            h3 {
                font-size: var(--font-small-screen);
            }

            span {
                font-size: var(--font-xtraLarge-small);
            }
        }
    

    }

`

const SpanCount = styled.div `
    font-size: var( --font-xtra-small); 
    color: var(--color-dark)!important;  
    ${FlexStyle}
    flex: 1;
    justify-content: center;  

    @media screen and (min-width: 768px) { 
        font-size: var(--font-xtra-small-screen);
    }

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


const OpenGuestDropdown = ({DisabledChild, AllowAdult, width,left, top, setOpenGuest,openGuest,border,countAdultMinus, zIndex, countAdultAdd,countMinusChild, countAddChild, myRef, adultcount, styles, MinusAdult, childrencount, AddAdult, MinusChildren, AddChildren}) => {
    const Query = useMediaQuery("(min-width: 769px)")
    return (
        <>
            {openGuest  && <Backdrop onClick={()=> setOpenGuest(false)} zIndex={zIndex} /> }
            {openGuest && (
                <ModalDiv  as={motion.div}
                animate={{ y: [0, 5, 0] }}
                transition={{ ease: "easeOut", duration: 1 }} width={width} top={top} border={border} left={left} ref={myRef} show={openGuest} setShow={setOpenGuest}>
                    <GuestDropdown>
                        <AdultDiv>
                            <div style={{color: 'var(--color-primary)'}}>
                                <h3>Adults</h3>
                                <span>Ages 18 and above</span>
                            </div>
                            <div>
                                <div className="adultButton">
                                    <Button 
                                        disabled={adultcount < countAdultMinus} 
                                        classNames={adultcount < countAdultMinus ? styles.CountNotActive : styles.CountActive} 
                                        onClicks={MinusAdult} 
                                        icon={<FiMinus color='var(--color-primary-dark)' />} 
                                        display="flex" 
                                        padding={Query ? "5px" : '10px'}  
                                        background="transparent"
                                    />
                                </div>
                                <SpanCount>{adultcount}</SpanCount>
                                <div className='adultButton'>
                                    <Button  
                                        classNames={adultcount < countAdultAdd ? styles.CountActive : styles.CountNotActive} 
                                        onClicks={AddAdult} 
                                        icon={<IoMdAdd  color='var(--color-primary-dark)'/>} 
                                        background="transparent" 
                                        padding={Query ? "5px" : '10px'}  
                                        display="flex" 
                                    />
                                </div>
                            </div>
                        </AdultDiv>
                        <AdultDiv>
                            <div style={{color: 'var(--color-primary)'}}>
                                <h3>Children</h3>
                                <span>Age 0 - 1</span>
                            </div>
                            <div>
                                <div className="adultButton">
                                    <Button disabled={DisabledChild}  classNames={childrencount < countMinusChild || DisabledChild ? styles.CountNotActive : styles.CountActive} onClicks={MinusChildren} icon={<FiMinus  color='var(--color-primary-dark)' />} display="flex"  padding={Query ? "5px" : '10px'} background="#fff" />
                                </div>
                                    <SpanCount>{AllowAdult ? adultcount === countAdultAdd ? 0 : childrencount : childrencount}</SpanCount>
                                <div className="adultButton">
                                    <Button disabled={DisabledChild} classNames={childrencount < countAddChild  ? styles.CountActive : styles.CountNotActive} onClicks={AddChildren} icon={<IoMdAdd  color='var(--color-primary-dark)' />} background="#fff"  padding={Query ? "5px" : '10px'}  display="flex" />
                                </div>
                            </div>
                        </AdultDiv>
                    </GuestDropdown>
                </ModalDiv>
            )}  
        </>
    )
}

export default OpenGuestDropdown
