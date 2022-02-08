import React from 'react';
import StaticCalender from "../Calender/StaticCalender";
import { motion } from "framer-motion";
import styled from 'styled-components';

import {useSelector} from 'react-redux'


const Para = styled.div `
    font-size: var( --font-small);
    margin: 0;
    text-align: center;
    font-weight: 600;
`

const Dates = styled.div `
    display: flex;
    justify-content: center;
    margin: 7px 0;
    
    span {
        color: var( --color-primary);
        font-size: var(--font-xtra-small);
    }

    span:first-child {
        margin-right: 10px;
    }

`
const MobileDates = () => {
    const {useCheckInDate, useCheckOutDate} = useSelector(state => state.ComponentState)
    const checKIn = useCheckInDate?.split(",")[1]
    const checkOut = useCheckOutDate?.split(",")[1]

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y:0 }}
            exit={{ opacity: 0, y: 50  }} 
            transition={{ duration: .3 }}
            style={{marginTop: '1rem'}} 
        >
            <div>
                <div>
                    <Para>When will you arrive?</Para>
                    <Dates>
                        <span>{checKIn}</span>
                        <span>{checkOut}</span>
                    </Dates>
                </div>
                <StaticCalender calendars={3} type/>
            </div>
        </motion.div>
    )
};

export default MobileDates;
