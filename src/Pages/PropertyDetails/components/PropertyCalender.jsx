import styled from "styled-components/macro"
import moment from 'moment';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkOutDate, checkInDate } from "../../../redux/actions/componentState";
import TextField from '@mui/material/TextField';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import { SkeletonLoader } from "../../../components/Loader/Skeleton";




const Calenders = styled.div `
    margin: max(3vw,2rem) 0;
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



const PropertyCalender = ({status}) => {
    const dispatch = useDispatch();
    const {PropertyDetails: {booked_dates}} = useSelector(state => state.propertyDetails)
    const [value, setValue] = React.useState([null, null]);
    const dates = booked_dates?.map((data) => data.booked_dates)
    
    
    

    React.useEffect(() => {
        const checkin = value[0]?.toLocaleDateString('en-CA');
        const checkout = value[1]?.toLocaleDateString('en-CA');
    
        if(checkin && checkout) {
            dispatch(checkInDate(checkin))
            dispatch(checkOutDate(checkout))
            console.log(checkin, checkout)
        }
    
    }, [value, dispatch])



    
    return (
        <Calenders>
            <div>
                <h2>{status === 'loading' ? <SkeletonLoader width='20%'/> :  'Select check-in date'}</h2>
                <p>{status === 'loading' ? <SkeletonLoader width='40%' height='20' /> : 'Select your check-in date for exact pricing'}</p>
            </div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDateRangePicker
                    loading={status === 'loading'? true : false}
                    disablePast
                    shouldDisableDate={date => {
                        const day = moment(date).format('YYYY-MM-DD');
                        return dates?.includes(day)
                    }}
                    
                    displayStaticWrapperAs="desktop"
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps} />
                    </React.Fragment>
                    )}
                />
                </LocalizationProvider>
        </Calenders>
    )
}

export default PropertyCalender
