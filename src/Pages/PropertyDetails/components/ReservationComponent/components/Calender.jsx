import moment from 'moment';
import * as React from 'react';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/StaticDateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';


const Calenders = () => {
    const [value, setValue] = React.useState([null, null]);
    
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
                calendars={1}
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
    )
}

export default Calenders
