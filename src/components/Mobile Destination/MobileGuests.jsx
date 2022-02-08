import React from 'react';
import styled from "styled-components";
import { FlexStyle } from '../../styles/globalStyles';
import Button from "../../components/Button/Button";
import { useSelector, useDispatch } from 'react-redux';
import { incrementAdult, decrementAdult, incrementChildren, decrementChildren } from "../../redux/actions/componentState"
import { FiMinus } from "react-icons/fi"
import { IoMdAdd } from "react-icons/io"
import styles from "../../styles/home.module.css"
import { motion } from "framer-motion";



const GuestDropdown = styled.div `
    margin-top: 2rem;
    p {
        font-size: var( --font-small);
        margin: 0;
        text-align: center;
        font-weight: 600;
    }
`

const AdultDiv = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;


    div:first-child {
        h3 {
            font-size: var( --font-big);
            font-weight: 600;
            margin: 0;

        }

        span {
            font-size: var(--font-small);
        }
    }

    div:last-child {
        ${FlexStyle}


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
    font-size: var(   --font-medium);
    color: var(--color-dark)!important;    

`

const MobileGuests = () => {
    const dispatch = useDispatch();
    const {adultcount, childrencount} = useSelector(state => state.ComponentState)
    const countAdultMinus = 1;
    const countAdultAdd = 9;
    const countAddChild = 5;
    const countMinusChild = 1;

    const AddAdult = () => {
        if(adultcount < countAdultAdd) {
            dispatch(incrementAdult())
        }
    }

    const MinusAdult = () => {
        if(adultcount === countAdultMinus) {
            return;
        } else {
            dispatch(decrementAdult())
        }
    }

    
    const AddChildren = () => {
        if(childrencount < countAddChild) {
            dispatch(incrementChildren())
        }
    }

    const MinusChildren = () => {
        if(childrencount === countMinusChild) {
            return;
        } else {
            dispatch(decrementChildren())
        }
    }

    return (
        <GuestDropdown
            as={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y:0 }}
            exit={{ opacity: 0, y: 50  }} 
            transition={{ duration: .3 }}
        
        >
            <p>How many guest are you bringing?</p>
            <AdultDiv>
                <div style={{color: 'var(--color-primary)'}}>
                    <h3>Adults</h3>
                    <span>Ages 18 and above</span>
                </div>
                <div>
                    <Button 

                        classNames={adultcount < countAdultMinus ? styles.CountNotActive : styles.CountActive} 
                        onClicks={MinusAdult} 
                        icon={<FiMinus color='var(--color-primary-dark)' />} 
                        display="flex" 
                        padding="5px"  
                        background="transparent"
                        fontSize="var(--font-medium)"
                    />
                        <SpanCount>{adultcount}</SpanCount>
                    <Button  
                        classNames={adultcount < countAdultAdd ? styles.CountActive : styles.CountNotActive} 
                        onClicks={AddAdult} 
                        icon={<IoMdAdd  
                        color='var(--color-primary-dark)'/>} 
                        background="transparent" 
                        padding="5px" 
                        display="flex" 
                        fontSize="var(--font-medium)"
                    />
                </div>
            </AdultDiv>
            <AdultDiv>
                <div style={{color: 'var(--color-primary)'}}>
                    <h3>Children</h3>
                    <span>Age 0 - 1</span>
                </div>
                <div>
                    <Button   
                        classNames={childrencount < countMinusChild ? styles.CountNotActive : styles.CountActive} 
                        onClicks={MinusChildren} 
                        icon={<FiMinus  color='var(--color-primary-dark)' />} 
                        display="flex" 
                        padding="5px" 
                        background="#fff"  
                        fontSize="var(--font-medium)"
                    />
                        <SpanCount>{childrencount }</SpanCount>
                    <Button  
                        classNames={childrencount < countAddChild  ? styles.CountActive : styles.CountNotActive} 
                        onClicks={AddChildren} 
                        icon={<IoMdAdd  color='var(--color-primary-dark)' />} 
                        background="#fff" 
                        padding="5px" display="flex"  
                
                        fontSize="var(--font-medium)"
                    />
                </div>
            </AdultDiv>
        </GuestDropdown>
    )
};

export default MobileGuests;
