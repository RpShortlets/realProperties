import React from "react";
// import DatePicker from "react-datepicker";
import "../styles/Input.css"
import {Asterik} from "../Svg/svg"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import moment from 'moment';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export const Input = ({type, label, placeholder, name, Icon, value, formdata, setFormData, handleChange}) => {
    return (
        <div className="input-container">
            {label && <label> {label}{Asterik}</label>}
            <input type={type} placeholder={placeholder} name={name} value={value} formdata={formdata} onChange={handleChange} />
            <span>{Icon}</span>
        </div>
    )
}



export const InputSelect = ({label, style, setDropdown, value, options, dropdown, name, Icon, defaultV}) => {
    return (
        <div className="input-container">
            <label>{label} {Asterik}
                <select name={name} value={value} onChange={(e) => setDropdown({...dropdown, [name]: e.target.value})} style={style}>
                    <option defaultChecked disabled>{defaultV}</option>
                    {options.map((option, i) => {
                        return (
                            <>
                                <option key={i} value={option}>{option}</option>
                            </>
                        )
                    })}
                </select>
                <span>{Icon}</span>
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

export const DatePick = ({label,  placeholder, setArrivalDeparture}) => {


    function disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    }
    
    return (
        <div className="input-container input-range-picker">
            <label>{label} {Asterik}</label>
            <RangePicker   
                disabledDate={disabledDate}  
                onChange={(date, dateString) => setArrivalDeparture(dateString)}
            />
        </div>
        
    )
}

export const DateBirth = ({label,  placeholder, setDateofBirth }) => {

    return (
        <div className="input-container">
            <label>{label} {Asterik}</label>
                <DatePicker onChange={(date, dateString) => setDateofBirth(dateString)} placeholder={placeholder} />
        </div>
        
    )
}

