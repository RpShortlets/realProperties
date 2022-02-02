import React from "react";
// import DatePicker from "react-datepicker";
import "../../styles/Input.css"
import {Asterik} from "../../Svg/svg"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import styled from "styled-components"



const InputContainer = styled.div`
    position: relative;

    label {
        display: block;
        font-size: var( --font-small-screen) !important;
        color: #fff;
        color: var(--color-dark);
    }


    label svg {
        margin-left: 5px;
        margin-bottom: 3px;
    }

    span {
        position: relative;
        z-index: 1;
        left: 15px;
        top: -37px;
        transform: translateY(5%);
        color: var(--color-primary);

        svg {
            font-size: var(--font-small);
        }
    }

`

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

    :-internal-autofill-selected {
        appearance: menulist-button;
        background-image: none !important;
        background-color: -internal-light-dark(white) !important;
        color: -internal-light-dark(black, white) !important;
    }

    :disabled {
        background-color: #ccc;
    }

`


export const Input = ({Blur, asterik, disabled, Focus,type, error, label, placeholder, name, Icon, value, formdata, handleChange, marginTop, ref, readOnly}) => {
    return (
        <InputContainer Icon={Icon}>
            {label && <label> {label}{!asterik && Asterik}</label>}
            <InputForm disabled={disabled} onFocus={Focus} onBlur={Blur} error={error} readOnly={readOnly} type={type} placeholder={placeholder} name={name} value={value} onChange={handleChange} marginTop={marginTop} Icon={Icon} ref={ref} />
            <span>{Icon}</span>
        </InputContainer>
    )
}



export const InputSelect = ({label, disabled, style, ref, setDropdown, value, options, dropdown, name, Icon, defaultV}) => {
    return (
        <div className="input-container">
            <label>{label}{Asterik} 
                <select disabled={disabled} ref={ref} name={name} value={value} onChange={(e) => setDropdown({...dropdown, [name]: e.target.value})} style={style}>
                    <option defaultChecked >{defaultV}</option>
                    {options.map((option, i) => {
                        return (
                            <>
                                <option key={i} value={option}>{option}</option>
                            </>
                        )
                    })}
                </select>
                {Icon && <span>{Icon}</span>}
            </label>
        </div>
    )
}


export const PhoneType = ({phn, setPhone, label, handlePhone}) => {
    return (
        <div className="input-container">
            <label>{label} {Asterik}
                <PhoneInput
                    country={'ng'}
                    value={phn}
                    onChange={(e) => setPhone(e)}
                    inputProps={{
                        name: 'phone',
                        required: true,
                        autoComplete: 'off',
                        placeholder: '+234 805 4124 7788',
                    }}
                />
            </label>
        </div>
    )
}



