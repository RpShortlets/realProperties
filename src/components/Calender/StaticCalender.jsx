import moment from 'moment';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { useParams } from 'react-router-dom';
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





const StaticCalender = ({status, calendars, disablebooked, type}) => {
    const dispatch = useDispatch();
    // const { checkin, checkout} = useParams()
    // const checkInD = checkin?.slice(8);
    // const checkOutD = checkout?.slice(9);


    const {PropertyDetails: {booked_dates, temp_booked_dates}} = useSelector(state => state.propertyDetails)
    const {useCheckInDate, useCheckOutDate, checkInDate: checksIN, checkOutDate: checksOUT} = useSelector(state => state.ComponentState)
    const [value, setValue] = React.useState([null, null]);


    //*  GET DATES VALUE AND CONVERT TO US AND CANADA DATES
    var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const checkins = value[0]?.toLocaleDateString('en-CA');
    const checkouts = value[1]?.toLocaleDateString('en-CA');
    const useCheckinDate = value[0]?.toLocaleDateString('en-US', options);
    const useCheckoutDate = value[1]?.toLocaleDateString('en-US', options);
    const nextDay = new Date(checkins);
    nextDay.setDate(nextDay.getDate() + 1);
    const newCheckout = nextDay?.toLocaleDateString('en-CA')


    // console.log(checkins, checkouts, useCheckinDate, useCheckoutDate, newCheckout)

    //* GET TEMPORARY BOOKINGS AND BOOKING ALREADY CONFIRM: CONCAT 
    const tem = temp_booked_dates?.map((data) => data.temp_booked_dates) 
    const booked = booked_dates?.map((data) => data.booked_dates)
    const newBookedDate = booked?.concat(tem)
    const dates = newBookedDate?.map((data) => data)

    
    //* GET DATES BTW THE CHECK IN AND OUT CALANDER
    const listDate = []
    const startDate = checkins ? checkins : checksIN ? checksIN : null;
    const endDate = checkouts ? checkouts : checksOUT ? checksOUT : null;
    const dateMove = new Date(startDate);
    let strDate = startDate;


    while (strDate < endDate) {
        strDate = dateMove.toISOString().slice(0, 10);
        listDate.push(strDate);
        dateMove.setDate(dateMove.getDate() + 1);
    };

    
    const intersection = listDate?.filter(element => dates?.includes(element));
   // const checknextDay = dates?.filter(element => element.includes(newCheckout))
    

    //! MAIN FUNCTION
    React.useEffect(() => {
    
        //* ONLY RUN WHEN DISABLEBOOK IS TRUE
        if(disablebooked) {
            //* CHECK IF BOOKED IS AMONG THE DATES
            if(!intersection?.length > 0) {
            //     //* CHECK IS CHECKIN AND OUT ARE PRESENT
                if((checkins && checkouts) && checkins === checkouts) {
                    dispatch(checkInDate(checkins))
                    dispatch(checkOutDate(newCheckout))
                    dispatch(newCheckInDate(useCheckinDate))
                    dispatch(newCheckOutDate(newCheckout))
                } else {
                    if(checkins && checkouts) {
                        dispatch(checkInDate(checkins))
                        dispatch(checkOutDate(checkouts))
                        dispatch(newCheckInDate(useCheckinDate))
                        dispatch(newCheckOutDate(useCheckoutDate))
                    }
                }
                // if(checkins && checkouts) {
                //     dispatch(checkInDate(checkins))
                //     dispatch(checkOutDate(checkouts))
                //     dispatch(newCheckInDate(useCheckinDate))
                //     dispatch(newCheckOutDate(useCheckoutDate))
                // }
            }
            else {
                // if(intersection?.length > 0) {
                //     setValue([null, null])
                    // dispatch(checkInDate(null))
                    // dispatch(checkOutDate(null))
                    // dispatch(newCheckInDate(null))
                    // dispatch(newCheckOutDate(null)) 
                // }            
            }
        } else {
            if(checkins && checkouts) {
                dispatch(checkInDate(checkins))
                dispatch(checkOutDate(checkouts))
                dispatch(newCheckInDate(useCheckinDate))
                dispatch(newCheckOutDate(useCheckoutDate))
            }
        }


    }, [dispatch, checkins, checkouts, useCheckinDate, useCheckoutDate, intersection, newCheckout, disablebooked])

    //*  CHECK IF BOOKED DATES IS AMONG THE CHECK IN AND OUT DATES. TO DISABLE THE RESERVE BUTTON 
    // React.useEffect(() => {
    //     const nextDay = new Date(checkins);
    //     nextDay.setDate(nextDay.getDate() + 1);
    //     setNewCheckout(nextDay?.toLocaleDateString('en-CA'))
        
    // }, [checkins])

    const renderWeekPickerDay = (date, dateRangePickerDayProps) => {
        return <DateRangePickerDay {...dateRangePickerDayProps} />;
    };


    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDateRangePicker
                loading={status === 'loading'? true : false}
                DesktopDatePicker={true}
                disableHighlightToday={true}
                disableCloseOnSelect={true}
                disablePast
                shouldDisableDate={disablebooked ?
                    date => {
                    const day = moment(date).format('YYYY-MM-DD');
                    return dates?.includes(day)
                }: null}
                renderDay={renderWeekPickerDay}
                displayStaticWrapperAs={type ? 'mobile' : 'desktop' }
                value={ useCheckInDate && useCheckOutDate ? [new Date(useCheckInDate), new Date(useCheckOutDate)] : value} 
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