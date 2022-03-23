import React from "react";
// import DatePicker from "react-datepicker";
import "../../styles/Input.css"
import {Asterik} from "../../Svg/svg"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import styled from "styled-components"
import { InputStyle } from "../../styles/globalStyles";



const InputContainer = styled.div`
    position: relative;

    label {
        display: flex;
        align-items: center;
        font-size: var( --font-small) !important;
        color: #fff;
        color: ${({theme}) => theme === "dark" ? "var(--color-white)" : "var(--color-dark);"}
    }


    label svg {
        margin-left: 5px;
        /* margin-bottom: 3px; */
    }

    span {
        position: relative;
        z-index: 1;
        left: 10px;
        top: -37px;
        transform: translateY(5%);
        color: var(--color-primary);

        svg {
            font-size: var( --font-big);
        }
    }

    @media screen and (min-width: 768px) {
        label {
            font-size: var(--font-small-screen);
        }

        span {
            svg {
                font-size: var( --font-small);
            }
        }
    }

`

const InputForm = styled.input `
    ${InputStyle}
`


export const Input = ({ theme, className, min, Blur, asterik, disabled, Focus,type, error, label, placeholder, name, Icon, value, formdata, handleChange, marginTop, ref, readOnly}) => {
    return (
        <InputContainer Icon={Icon} className={className} theme={theme}>
            {label && <label> {label}{!asterik && Asterik}</label>}
            <InputForm min={min} disabled={disabled} onFocus={Focus} onBlur={Blur} error={error} readOnly={readOnly} type={type} placeholder={placeholder} name={name} value={value} onChange={handleChange} marginTop={marginTop} Icon={Icon} ref={ref} />
            <span>{Icon}</span>
        </InputContainer>
    )
}



export const InputSelect = ({ theme, className, label, disabled, style, ref, setDropdown, value, options, dropdown, name, Icon, defaultV}) => {
    return (
        <div className={`input-container ${className}`} >
            <label style={{color: theme === "dark" && 'var(--color-white)'}}>{label}{Asterik} 
                <select disabled={disabled} ref={ref} name={name} value={value} onChange={(e) => setDropdown({...dropdown, [name]: e.target.value})} style={style}>
                    <option defaultChecked >{defaultV}</option>
                    {options.map((option, i) => {
                        return (
                            <option key={i} value={option}>{option}</option>
                        )
                    })}
                </select>
                {Icon && <span>{Icon}</span>}
            </label>
        </div>
    )
}


export const PhoneType = ({phn, setPhone, label, theme}) => {
    return (
        <div className="input-container">
            <label style={{color: theme === "dark" && 'var(--color-white)'}}>{label} {Asterik}
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



