import { useState, useEffect } from "react"
import  "../../styles/card.css"
import { Country } from "../../Data/Country"
import Modal  from "../Modal"
import Button from "../Button"
import Image from "../../Svg/pana.svg"
import Names from "./components/Names"
import Email from "./components/Email"
import Nationality from "./components/Nationality"
import Dates from "./components/Date"
import Identification from "./components/Identification"
import Numbers from "./components/Numbers"
import ReCaptchaV2 from 'react-google-recaptcha'
import validator from 'validator'
import { Reservation } from "../../api"
import axios from "axios"


const id = ['International Passport', 'Driver\'s License', 'Voter\'s Card', 'National ID', 'Others']
const number = ['1', '2', '3', '4', '5']
const rooms = ['A4', 'C4']

const SiteKey = process.env.REACT_APP_RECAPTCHA_KEY
const Card = () => {
    const [formdata, setFormData] = useState({firstname: "", lastname: "", email: "", idnumber: ""})
    const [dropdown, setDropdown] = useState({identification: "", adultno: "", childno: "", roomno:"", nationality: ""})
    const [phn, setPhone] = useState("")
    const [dateofbirth, setDateofBirth] = useState("");
    const [arrivalDeparture, setArrivalDeparture] = useState([])
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const [validated, setValidated] = useState(false)
    const [emailerror, setEmailError] = useState(false)
    const [captcha, setCaptcha] = useState(false)
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



    //* RECAPTCHA 
    function handleRecapha(value) {
        axios.get(`https://tranquil-tundra-47751.herokuapp.com/recaptha`,
        {
            params: {token: value}
        }).then(res => {
            setCaptcha(res?.data)
        })
    } 
   // validated && formdata.idnumber && dropdown.identification && dropdown.adultno && dropdown.childno && dropdown.roomno && dropdown.nationality && regmob.test(phn) &&  dateofbirth && arrivalDeparture.length > 0 && captcha
    
    //formdata.firstname && formdata.lastname && formdata.email && formdata.idnumber && dropdown.identification && dropdown.adultno && dropdown.childno && dropdown.roomno && dropdown.nationality && phn.length > 10 && dateofbirth && arrivalDeparture.length > 0
    //* FORM SUBMISSION HANDLER
    const handleSubmission = (e) => {
        e.preventDefault();
        if(formdata.firstname && formdata.lastname  && validated && formdata.idnumber && dropdown.identification && dropdown.adultno && dropdown.childno && dropdown.roomno && dropdown.nationality && regmob.test(phn) && dateofbirth && arrivalDeparture.length > 0) {
            setLoading(true)
            Reservation(formdata, dropdown, phn, dateofbirth,arrivalDeparture).then((res) => {
                if(res === 'Your Booking was successfully Sent') {
                    setLoading(false)
                    setShow(true)
                    setFormData({firstname: "", lastname: "", email: "", idnumber: ""})
                    setDropdown({identification: "", adultno: "", childno: "", roomno:"", nationality: ""})
                    setPhone(null)
                    setDateofBirth("")
                    setArrivalDeparture([])
                } else {
                    alert(res)
                    setLoading(false)
                }
                
            })  
        }
        else {
            alert('Please fill valid credentials')
            setLoading(false)
        }
    }

    //* HIDE OVERFLOW ON MODAL OPEN
    useEffect(() => {
        if(show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [show])


    return (
        <>
            <Modal  show={show} setShow={setShow}>
                <div className="Modal-content">
                    <div className="Modal-svg">
                        <img src={Image} alt="" />
                    </div>
                    <div className="Modal-header">
                        <h2>Your reservation has been booked</h2>
                    </div>
                    <div>
                        <Button  text="Continue" onClicks={() => setShow(false)} style={{width: '50%'}} styles={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}/>
                    </div>
                </div>
            </Modal>
            <div className="card-container">
                <div className="card">
                    <h1 className="card-h1">Make a Reservation</h1>
                    <form onSubmit={handleSubmission}>
                        <Names formdata={formdata} setFormData={setFormData} />
                        <Email checkEmail={checkEmail} validator={emailerror} phn={phn} setPhone={setPhone} formdata={formdata} setFormData={setFormData}  />
                        <Nationality dropdown={dropdown} setDropdown={setDropdown} countryList={countryList} setDateofBirth={setDateofBirth} />
                        <Identification  dropdown={dropdown} setDropdown={setDropdown} id={id} formdata={formdata} setFormData={setFormData}/>
                        <Dates number={number} dropdown={dropdown} setDropdown={setDropdown} setArrivalDeparture={setArrivalDeparture}/>
                        <Numbers rooms={rooms} number={number} dropdown={dropdown} setDropdown={setDropdown} />
                        <div style={{display: 'flex', justifyContent: 'center', margin: '2rem 0 0 0'}}>
                            <ReCaptchaV2 sitekey={SiteKey}  onChange={handleRecapha}/>
                        </div>
                        <Button  disabled={!captcha} text={loading ? 'Sending Reservation..' : 'Book Reservation'}  styles={{margin: '2rem 0  1rem'}}/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Card
