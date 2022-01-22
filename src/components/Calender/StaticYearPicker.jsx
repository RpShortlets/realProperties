import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DatePicker';
import '../../styles/utilities.css'
import styled from "styled-components"



const InputForm = styled.input `
    
    background: #FFFFFF;
    border: 1px solid ${({error}) => error ? 'red' : '#2193B0'};
    color: var(--color-primary);
    font-size: var(--font-xtra-small-screen);
    outline: 0;
    padding: 10px;
    padding-left: ${props => props.Icon ? "max(4vw, 2rem)" : ""};
    border-radius: 4px;
    width: 100%;
    height: 45px;
    margin-top: ${({marginTop}) => marginTop ? marginTop : '7px'};
    transition: all .2s;
    

    :focus-within {
        border: 2px solid ${({error}) => error ? 'red' : '#2193B0'};
    }

    :focus {
        border: 2px solid ${({error}) => error ? 'red' : '#2193B0'};
    }

    ::placeholder {
        color: var(--color-primary);
    }

`

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
            <InputForm readOnly={readOnly} ref={inputRef} {...inputProps} label="Date of Birth"  value={value?.toLocaleDateString('en-CA')}  onChange={() => console.log('dates')} />
          </div>
        )}
      />
    </LocalizationProvider>
  );
}
