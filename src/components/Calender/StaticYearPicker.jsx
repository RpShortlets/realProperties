import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DatePicker';
import { Input } from "../../utils/FormElement/Input"
import '../../styles/utilities.css'

export default function CustomInput({value, setValue}) {
  const readOnly = true;
  const [isOpen, setIsOpen] =  React.useState(false)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        open={isOpen}
        label="Custom input"
        onAccept={() => setIsOpen(false)}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <div onClick={() => setIsOpen(!isOpen)}>
            <Input readOnly={readOnly} ref={inputRef} {...inputProps} label="Date of Birth" Icon={InputProps?.endAdornment} value={value?.toLocaleDateString('en-CA')}  handleChange={() => console.log('dates')} />
          </div>
        )}
      />
    </LocalizationProvider>
  );
}
