import moment from 'moment';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkOutDate, checkInDate, newCheckInDate, newCheckOutDate } from "../../redux/actions/componentState";
import TextField from '@mui/material/TextField';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import  "../../styles/utilities.css"
import MuiDateRangePickerDay from "@mui/lab/DateRangePickerDay";
import { styled } from "@mui/material/styles";
import '../../styles/utilities.css'



const DateRangePickerDay = styled(MuiDateRangePickerDay)(
    ({ theme, isHighlighting, isStartOfHighlighting, isEndOfHighlighting }) => ({
    ...(isHighlighting && {
        borderRadius: 0,
        backgroundColor: 'rgba(33, 147, 176, 1)',
        color: theme.palette.common.black,
        "&:hover, &:focus": {
        backgroundColor: 'rgba(33, 147, 176, 1)',
        }
    }),
    ...(isStartOfHighlighting && {
        borderTopLeftRadius: "50%",
        borderBottomLeftRadius: "50%"
    }),
    ...(isEndOfHighlighting && {
        borderTopRightRadius: "50%",
        borderBottomRightRadius: "50%"
    })
    })
);





const StaticCalender = ({status, calendars, disablebooked}) => {
    const dispatch = useDispatch();
    const {PropertyDetails: {booked_dates}} = useSelector(state => state.propertyDetails)
    const {useCheckInDate, useCheckOutDate} = useSelector(state => state.ComponentState)
    const [value, setValue] = React.useState([null, null]);
    const dates = booked_dates?.map((data) => data.booked_dates)


        
    
    
    React.useEffect(() => {
        var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        const checkin = value[0]?.toLocaleDateString('en-CA');
        const checkout = value[1]?.toLocaleDateString('en-CA');
        const useCheckinDate = value[0]?.toLocaleDateString('en-US', options);
        const useCheckoutDate = value[1]?.toLocaleDateString('en-US', options);
    
        if(checkin && checkout) {
            dispatch(checkInDate(checkin))
            dispatch(checkOutDate(checkout))
            dispatch(newCheckInDate(useCheckinDate))
            dispatch(newCheckOutDate(useCheckoutDate))
        }
    
    }, [value, dispatch])

    const renderWeekPickerDay = (date, dateRangePickerDayProps) => {
        return <DateRangePickerDay {...dateRangePickerDayProps} />;
    };
    


    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDateRangePicker
                loading={status === 'loading'? true : false}
                disablePast
                // shouldDisableDate={date => {
                //     const day = moment(date).format('YYYY-MM-DD');
                //     return dates?.includes(day)
                // }}
                shouldDisableDate={disablebooked ?
                        date => {
                        const day = moment(date).format('YYYY-MM-DD');
                        return dates?.includes(day)
                }: null}
                renderDay={renderWeekPickerDay}
                
                displayStaticWrapperAs="desktop"
                value={useCheckInDate && useCheckOutDate ? [new Date(useCheckInDate), new Date(useCheckOutDate)] : value} 
                onChange={(newValue) => {
                setValue(newValue);
                }}
                calendars={calendars}
                renderInput={(startProps, endProps) => (
                <React.Fragment>
                    <TextField {...startProps} />
                    {/* <Box sx={{ mx: 2 }}> to </Box> */}
                    <TextField {...endProps} />
                </React.Fragment>
                )}
            />
        </LocalizationProvider> 
    )
}

export default StaticCalender
