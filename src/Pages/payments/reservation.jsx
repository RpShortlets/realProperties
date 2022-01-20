import { useState } from "react"
import styled from "styled-components"
import {PaddingStyle} from "../../styles/globalStyles"
import  "../../styles/card.css"
import Button from "../../components/Button/Button"
import { Country } from "../../Data/Country"

import Names from "./components/Names"
import Email from "./components/Email"
import Nationality from "./components/Nationality"
import Identification from "./components/Identification"
//import ReCaptchaV2 from 'react-google-recaptcha'
import validator from 'validator'


const id = ['International Passport', 'Driver\'s License', 'Voter\'s Card', 'National ID', 'Others'];


const Section = styled.div `
    background: #fff;
    width: 100%;
    height: 100%;
`

const Main = styled.div `
    ${PaddingStyle}
    padding-top: max(4vw, 2rem);
    padding-bottom: max(4vw, 2rem);

    h1 {
        font-size: var(--font-medium);
        font-weight: 600;
        margin: 0;
    }

    .reservationHeader {
        margin-bottom: max(4vw, 2rem);
    }

`

const Reservation = () => {
    const [formdata, setFormData] = useState({firstname: "", lastname: "", email: "", idnumber: "", dateofBirth: ''})
    const [dropdown, setDropdown] = useState({identification: "", nationality: ""})
    const [value, setValue] = useState(new Date());
    const [phn, setPhone] = useState("")
    const [validated, setValidated] = useState(false)
    const [emailerror, setEmailError] = useState(false)
    // const [captcha, setCaptcha] = useState(false)
    const countryList = Country.map((x) => x.name)


    var regmm = '^([0|+[0-9]{1,5})?([7-9][0-9]{9})$';
    var regmob = new RegExp(regmm)

    //* Validate Email
    const checkEmail = value => {
        if(validator.isEmail(value)) {
            setFormData({...formdata, email: value })
            setValidated(true)
            setEmailError(false)
        }
        else {
            setFormData({...formdata, email: value })
            setValidated(false)
            setEmailError(true)
        }
    }

    const submitFormReservation = (e) => {
        e.preventDefault();
        if(validated) {
            console.log('valid')
            console.log(formdata, dropdown, phn, value)
        }
        else {
            alert('Not valid')
        }
        

    }

    return (
        <Section>
            <Main paddingleft="true" paddingRight="true">
                <div className="reservationHeader">
                    <h1>Contact Information</h1>
                </div>
                <form onSubmit={submitFormReservation}>
                    <Names formdata={formdata} setFormData={setFormData} />
                    <Email checkEmail={checkEmail} error={emailerror} phn={phn} setPhone={setPhone} formdata={formdata} setFormData={setFormData}  /> 
                    <Nationality dropdown={dropdown} setDropdown={setDropdown} countryList={countryList} formdata={formdata} setFormData={setFormData} value={value} setValue={setValue}  />
                    <Identification  dropdown={dropdown} setDropdown={setDropdown} id={id} formdata={formdata} setFormData={setFormData}/> 
                    <Button  title= 'Proceed to payment' border="0" background="var(--linear-primary)" color="var(--color-white)" width="50%" padding="20px" fontSize="var(--font-xtra-small)" />
                </form>
            </Main>
        </Section>
    )
}

export default Reservation
