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
            
        }
    
    }, [homeDateValue, dispatch,  ])


    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
                isOpen={isOpenCalender}
                onAccept={() => setIsOpenCalender(!isOpenCalender)}
                className="date-range-picker"
                label="Advanced keyboard"
                disablePast
                value={homeDateValue}
                onChange={(newValue) => setHomeDateValue(newValue)}
                renderInput={(startProps, endProps) => (
                <React.Fragment>

                    <div className="inputCalenderContainer" onClick={() => setIsOpenCalender(true)}>
                        <Input ref={startProps.inputRef} {...startProps.inputProps} placeholder="Check in" />
                        <span>Add Dates</span>
                    </div>
                    <div className="inputCalenderContainer"  onClick={() => setIsOpenCalender(true)}>
                        <Input ref={endProps.inputRef} {...endProps.inputProps} placeholder="Check out" />
                        <span>Add Dates</span>
                    </div>
                
                </React.Fragment>
                )}
            />
        </LocalizationProvider>
    )
}

export default CheckInOut
