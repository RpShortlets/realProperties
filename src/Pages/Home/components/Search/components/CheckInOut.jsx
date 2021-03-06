import styled from "styled-components/macro"
import * as React from 'react';
import { useDispatch } from "react-redux";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import  "../../../../../styles/utilities.css"
import { checkOutDate, checkInDate, newCheckOutDate, newCheckInDate } from "../../../../../redux/actions/componentState";



const Input = styled.input`
    && {
        color: var(--color-dark);
        width: 100%;
        margin-bottom: 0;
        border: 0;
        outline: 0;
        background: transparent;
        font-size: var(--font-xtra-small-screen);
        font-weight: 500;

        &:focus {
            border: 0;
            outline: 0;
        }

        &::placeholder {
            color: var(--color-dark);
            font-size: var(--font-xtra-small-screen);
            font-weight: 600;
        }

    }
`


const CheckInOut = ({homeDateValue, setHomeDateValue, setIsOpenCalender, isOpenCalender}) => {
    const dispatch = useDispatch();
    
    

    React.useEffect(() => {
        var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        const checkin = homeDateValue[0]?.toLocaleDateString('en-CA');
        const checkout = homeDateValue[1]?.toLocaleDateString('en-CA');
        const useCheckinDate = homeDateValue[0]?.toLocaleDateString('en-US', options);
        const useCheckoutDate = homeDateValue[1]?.toLocaleDateString('en-US', options);

        
    
        if(checkin && checkout) {
            dispatch(checkInDate(checkin))
            dispatch(checkOutDate(checkout))
            dispatch(newCheckInDate(useCheckinDate))
            dispatch(newCheckOutDate(useCheckoutDate))
            setIsOpenCalender(false)
            
        } else {
            dispatch(checkInDate(null))
            dispatch(checkOutDate(null))
            dispatch(newCheckInDate(null))
            dispatch(newCheckOutDate(null))
        }
    
    }, [homeDateValue, dispatch, setIsOpenCalender])


    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
                isOpen={isOpenCalender}
                onAccept={() => setIsOpenCalender(false)}
                className="date-range-picker"
                label="Advanced keyboard"
                disablePast
                value={homeDateValue}
                onChange={(newValue) => setHomeDateValue(newValue)}
                renderInput={(startProps, endProps) => (
                <React.Fragment>

                    <div className="inputCalenderContainer" onClick={() => setIsOpenCalender(true)}>
                        <Input id="checkIn" ref={startProps.inputRef} {...startProps.inputProps} placeholder="Check in" />
                        <label  htmlFor="checkIn" onClick={() => setIsOpenCalender((prev) => !prev)} style={{cursor: 'pointer'}}>Add Dates</label>
                    </div>
                    <div className="inputCalenderContainer"  onClick={() => setIsOpenCalender(true)}>
                        <Input id="checkOut" ref={endProps.inputRef} {...endProps.inputProps} placeholder="Check out" />
                        <label  htmlFor="checkOut" onClick={() => setIsOpenCalender((prev) => !prev)} style={{cursor: 'pointer'}}>Add Dates</label>
                    </div>
                
                </React.Fragment>
                )}
            />
        </LocalizationProvider>
    )
}

export default CheckInOut
