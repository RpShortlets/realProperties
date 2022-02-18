import styled from "styled-components/macro"
import * as React from 'react';
import { SkeletonLoader } from "../../../components/Loader/Skeleton";
import  "../../../styles/utilities.css"
import StaticCalender from "../../../components/Calender/StaticCalender";
import { motion } from 'framer-motion';
import useMediaQuery from "../../../hooks/useMediaQuery/useMediaQuery";
// import Button from "../../../components/Button/Button"
// import { useDispatch } from 'react-redux';



const Calenders = styled.div `
    margin: ${({ margin}) => margin};
    width: 100%;

    h2 {
        font-size: var(--font-small-screen);
        font-weight: 600;
        margin: 0;
        margin-bottom: 5px;
    }

    p {
        font-size: var(--font-xtra-small-screen);
        color: rgba(109, 109, 109, 1);
        margin: 0;
    }

`



export const PropertyCalender = ({status, lenghtstay, margin, checkOutD, checkInD}) => { 
    const Medium = useMediaQuery("(max-width: 768px)");


    // const handleReset = () => {
    //     checkInD = null
    //     checkOutD = null
    //     console.log('dates')
    // }

    return (
        <Calenders 
            as={ motion.div}
            margin={margin}
        >
            <div>
                <h2>{status === 'loading' ? <SkeletonLoader width='20%'/> :  lenghtstay ? `${lenghtstay} ${lenghtstay > 1 ? `nights`: `night`}` : 'Select check-in date'}</h2>
                <p>{status === 'loading' ? <SkeletonLoader width='40%' height='20' /> : 'Select your check-in date for exact pricing'}</p>
            </div>
            <StaticCalender calendars={Medium ? 1 : 2} disablebooked='true' status={status} />
            {/* <div>
                <Button  onClicks={handleReset} title="Clear dates" background="transparent" border='none' fontSize='var(--font-xtra-small-screen)'/>
            </div> */}
        </Calenders>
    )
}


