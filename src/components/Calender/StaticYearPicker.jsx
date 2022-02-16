import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DatePicker';
import '../../styles/utilities.css'
import styled from "styled-components"
import { Asterik } from '../../Svg/svg';



const InputForm = styled.input `
    
    background: #FFFFFF;
    border: 1px solid ${({error}) => error ? 'red' : '#2193B0'};
    color: var(--color-primary);
    font-size: var(--font-small);
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

    
    :disabled {
      background-color: #ccc;
    }

    @media screen and (min-width: 768px) {
      font-size: var(--font-xtra-small-screen);
    }

`

const Label = styled.label `
  display: flex;
  align-items: center;
  font-size: var( --font-small) !important;
  color: #fff;
  color: var(--color-dark);

    
  svg {
    font-size: var(--font-small);
    margin-left: 5px;
  }

  @media screen and (min-width: 768px) {
    font-size: var(--font-small-screen);
  }

`

export default function CustomInput({value, setValue, label, disabled}) {
  const readOnly = true;
  const [isOpen, setIsOpen] =  React.useState(false)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        open={isOpen}
        disableHighlightToday={true}
        onAccept={() => setIsOpen(!isOpen)}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <div onClick={() => setIsOpen(!isOpen)}>
            <Label>{label}{Asterik}</Label>
            <InputForm disabled={disabled} readOnly={readOnly} ref={inputRef} {...inputProps} label="Date of Birth"  value={value?.toLocaleDateString('en-CA')}  onChange={() => console.log('dates')} />
          </div>
        )}
      />
    </LocalizationProvider>
  );
}
