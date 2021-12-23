import React from "react";
import DatePicker from "react-datepicker";
import "../styles/Input.css"
import {Asterik} from "../Svg/svg"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "react-datepicker/dist/react-datepicker.css";


export const Input = ({type, label, placeholder, name, Icon, value, formdata, setFormData}) => {
    return (
        <div className="input-container">
            {label && <label> {label}{Asterik}</label>}
                <input type={type} placeholder={placeholder} name={name} value={value} formdata={formdata} onChange={(e) => setFormData({...formdata, [name]: e.target.value})} />
                <span>{Icon}</span>
            

        </div>
    )
}



export const InputSelect = ({label, style, setDropdown, value, options, dropdown, name, Icon,}) => {
    return (
        <div className="input-container">
            <label>{label} {Asterik}
                <select name={name} value={value} onChange={(e) => setDropdown({...dropdown, [name]: e.target.value})} style={style}>
                    {options.map((option, index) => {
                        return (
                            <option key={index} value={option}>{option}</option>
                        )
                    })}
                </select>
                <span>{Icon}</span>
            </label>
        </div>
    )
}


export const PhoneType = ({phn, setPhone, label}) => {
    return (
        <div className="input-container">
            <label>{label} {Asterik}
                <PhoneInput
                    country={'us'}
                    value={phn}
                    onChange={(phone) => setPhone(phone)}
                />
            </label>
        </div>
    )
}

export const DatePick = ({label, Icon, startDate, onChanges, endDate, select }) => {
    return (
        <div className="input-container">
            <label>{label} {Asterik}</label>
            <DatePicker selected={select} onChange={(date) => onChanges(date)}  startDate={startDate && startDate}
                endDate={endDate && endDate}
            />
            <span>{Icon}</span>
        </div>
    );
};