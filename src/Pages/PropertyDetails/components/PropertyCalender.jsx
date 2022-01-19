import styled from "styled-components/macro"
import * as React from 'react';
import { SkeletonLoader } from "../../../components/Loader/Skeleton";
import  "../../../styles/utilities.css"
import StaticCalender from "../../../components/Calender/StaticCalender";



const Calenders = styled.div `
    margin: ${({ margin}) => margin};)};
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



export const PropertyCalender = ({status, lenghtstay, margin}) => {
    
    return (
        <Calenders margin={margin}>
            <div>
                <h2>{status === 'loading' ? <SkeletonLoader width='20%'/> :  lenghtstay ? `${lenghtstay} ${lenghtstay > 1 ? `nights`: `night`}` : 'Select check-in date'}</h2>
                <p>{status === 'loading' ? <SkeletonLoader width='40%' height='20' /> : 'Select your check-in date for exact pricing'}</p>
            </div>
            <StaticCalender calendars={2} disablebooked='true' />
        </Calenders>
    )
}


