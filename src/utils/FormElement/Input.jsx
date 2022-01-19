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
    }


    input { 
        background: #FFFFFF;
        border: 1px solid #2193B0;
        color: var(--color-primary);
        font-size: var(--font-xtra-small-screen);
        outline: 0;
        padding: 10px;
        padding-left: ${props => props.Icon ? "max(4vw, 2rem)" : ""};
        border-radius: 4px;
        width: 100%;
        height: 45px;
        margin-top: 7px;
        transition: all .2s;
    }

    input:focus-within {
        border: 2px solid var(--color-primary);
    }

    input:focus {
        border: 2px solid var(--color-primary);
    }

    input::placeholder {
        color: var(--color-primary);
    }

    span {
        position: absolute;
        z-index: 1;
        left: 15px;
        top: 50%;
        transform: translateY(5%);
        /* font-size: var(--font-small); */
        color: var(--color-primary);
    }

`

export const Input = ({type, label, placeholder, name, Icon, value, formdata, handleChange}) => {
    return (
        <InputContainer Icon={Icon}>
            {label && <label> {label}</label>}
            <input type={type} placeholder={placeholder} name={name} value={value} formdata={formdata} onChange={handleChange} />
            <span>{Icon}</span>
        </InputContainer>
    )
}



export const InputSelect = ({label, style, ref, setDropdown, value, options, dropdown, name, Icon, defaultV}) => {
    return (
        <div className="input-container">
            <label>{label} 
                <select ref={ref} name={name} value={value} onChange={(e) => setDropdown({...dropdown, [name]: e.target.value})} style={style}>
                    <option defaultChecked disabled>{defaultV}</option>
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



