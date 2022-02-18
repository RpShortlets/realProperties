import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {FiSearch} from "react-icons/fi"
import { FlexStyle } from '../../styles/globalStyles';
import {MapPinIcon} from "../../Svg/svg"
import { motion } from "framer-motion";
import { saveSearchValue } from '../../redux/actions/componentState';
import { useDispatch, useSelector } from 'react-redux';



const Container = styled.div `
    background: var(--color-white);
`

const Wrapper = styled.div `

    .destinationStay {
        border-bottom: 2px solid var(--color-dark);
        ${FlexStyle}
        justify-content: space-between;
        padding: 5px 0;

        span {
            font-size: var(--font-small);
            color: var(  --color-dark-gray);
        }

        svg {
            color: var( --color-primary);
            font-size: var(--font-medium);
        }
    }

    .destinationPlace {
        margin-top: max(1.3vh, 1rem);

        > div:first-child span {
            font-size: var(--font-small);
            font-weight: 600;
        }
    }

    .destinationPlaceItems {
        ${FlexStyle}
        margin: 1rem 0;
        cursor: pointer;

        > div:first-child { 
            width: 1.8rem;
            justify-content: center;
            ${FlexStyle}
            height: 1.8rem;

            span {
                justify-content: center;
                ${FlexStyle}
                width: 100%;
                height: 100%;
                background: #fff;
                border-radius: 32px;
                border: 1px solid var(--color-dark-gray);
            }

            svg {
                font-size: var(  --font-xtra-small);
            }
        }

        > div:last-child {
            margin-left: .6rem;
        }

        label {
            font-size: var(--font-small);
        }
    }

    .isActive {
        background: var(--color-secondary);
        padding: 8px 8px;
        border-radius: 10px;
    }

`

const MobileDesitination = () => {
    const dispatch = useDispatch();
    const ikoyiRef = useRef(null)
    const lekkiRef = useRef(null)
    const [value, setValue] = useState('')
    const {searchValue} = useSelector(state => state.ComponentState)



    const handleOption = (e) => {
        setValue(e.target.value) 
        dispatch(saveSearchValue(e.target.value))
        
    }

    console.log(value)


    return(
        <Container 
            as={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y:0 }}
            exit={{ opacity: 0, y: 50  }} 
            transition={{ duration: .3 }} 
        >
            <Wrapper>
                <div className='destinationStay'>
                    <span>{searchValue ? searchValue : 'Where do you want to stay?'}</span>
                    <FiSearch />
                </div>
                <div className='destinationPlace'>
                    <div>
                        <span>Place where we have shortlet</span>
                    </div>
                    <div>
                        {/* {Destlocation.map((data, i)  =>  */}
                            <motion.div 
                                className={`${value === "Ikoyi, Nigeria" ? `isActive` : ''} destinationPlaceItems` } 
                                whileHover={{ scale: 1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <div>
                                    <span className={`${value === "Ikoyi, Nigeria" ? `isActive` : ''}`}>{MapPinIcon}</span>
                                </div>
                                <div>
                                    <label htmlFor='ikoyi'>Ikoyi, Nigeria
                                        <input ref={ikoyiRef} id='ikoyi' name='ikoyi' value='Ikoyi, Nigeria' onChange={handleOption}  type="checkbox" style={{display: 'none'}} />
                                    </label>
                                </div>
                            </motion.div>
                            <motion.div 
                                className={`${value === "Lekki, Nigeria" ? `isActive` : ''} destinationPlaceItems` }
                                whileHover={{ scale: 1 }}
                                whileTap={{ scale: 0.9 }}
                                
                            >
                                <div>
                                    <span className={`${value === "Lekki, Nigeria" ? `isActive` : ''}` }>{MapPinIcon}</span>
                                </div>
                                <div>
                                    <label htmlFor='lekki'>Lekki, Nigeria
                                        <input ref={lekkiRef} id='lekki' name='lekki' value='Lekki, Nigeria' onChange={handleOption}  type="checkbox" style={{display: 'none'}} />
                                    </label>
                                </div>
                            </motion.div>
                        {/* )} */}
                    </div>
                </div>
            </Wrapper>
        </Container>
    )
};

export default MobileDesitination;
