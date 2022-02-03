import { useState, useMemo } from "react"
import { useNavigate} from "react-router-dom"
import styled from "styled-components"
import {FlexStyle} from "../../styles/globalStyles"
import  "../../styles/card.css"
import Button from "../../components/Button/Button"
import { Country } from "../../Data/Country"
import {useDispatch, useSelector} from "react-redux"
import Names from "./components/Names"
import Email from "./components/Email"
import Nationality from "./components/Nationality"
import Identification from "./components/Identification"
//import ReCaptchaV2 from 'react-google-recaptcha'
import validator from 'validator'
import {saveCustomerInformation} from "../../redux/actionCreators/actionCreators"
import { motion } from "framer-motion"
import { CancelIcon } from "../../Svg/svg"
import { Pulse } from "../../components/Loader/Spinner"
import {useValidate, useValidateId, useValidateLast} from "../../hooks/useValidate/useValidate"
import { OpenNotificationWithIcon } from "../../components/Notification/Notification"


const id = ['International Passport', 'Driver\'s License', 'Voter\'s Card', 'National ID', 'Others'];


const SectionRight = styled.div `
    background: #fff;
    width: 40%;     
    z-index: 11; 
    height: 100vh;
    position: absolute; 
    /* top: 0;  */
    right: 0px;
    overflow-y: scroll;

`

const MainRight = styled.div `
    padding:  2rem 3rem;
    h1 {
        font-size: var(--font-small);
        font-weight: 600;
        margin: 0;
    }

    .reservationHeader {
        ${FlexStyle}
        justify-content: space-between;
        /* margin-bottom: max(4vw, 2rem); */
    }

    .FormHeader {
        margin: 2rem 0;
    }

`


const ReservationRight = ({setShowModal, proceess}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const {status} = useSelector(state => state.customerRecord)
    const {ongoingTransactions: {Ongoing_id, apartment_id}} = useSelector(state => state.paymentState)
    
    const [formdata, setFormData] = useState({firstname: "", lastname: "", email: "", idnumber: "", dateofBirth: ''})
    const [dropdown, setDropdown] = useState({identification: "", nationality: "", gender: ""})
    const [value, setValue] = useState(new Date());
    const [phn, setPhone] = useState("")
    const [validated, setValidated] = useState(false)
    const [emailerror, setEmailError] = useState(false)
    const [focus, setFocus] = useState(false)
    const [focusLast, setFocusLast] = useState(false)
    const [focusId, setFocusId] = useState(false)

    const name = formdata.firstname 
    const lastname = formdata.lastname;
    const Idnum = formdata.idnumber

    const {validatedName} = useValidate({name, focus})
    const {validatedLastName} =  useValidateLast({lastname, focusLast})
    const {validatedID} = useValidateId({Idnum, focusId})

    const Focus = (e) => {
        if(e.target.name) {
            setFocus(true)
        }
    }

    const FocusLastName = (e) => {
        if(e.target.name) {
            setFocusLast(true)
        }
    }

    const FocusID = (e) => {
        if(e.target.name) {
            setFocusId(true)
        }
    }



    // const [captcha, setCaptcha] = useState(false)
    const countryList = Country.map((x) => x.name)


    // var regmm = '^([0|+[0-9]{1,5})?([7-9][0-9]{9})$';
    // var regmob = new RegExp(regmm)



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
        const ongoingId = Ongoing_id[0]?.ongoing_id;
        const apartmentId = apartment_id[0]?.apartment_id 

        if(validatedName && formdata.firstname && validatedLastName  && formdata.lastname && dropdown.gender && validated && phn && value && dropdown.nationality && dropdown.identification && validatedID && formdata.idnumber.length > 11 ) {
            dispatch(saveCustomerInformation({formdata, dropdown, phn, value, ongoingId, apartmentId}))
            navigate(`/order-summary/ref/${Ongoing_id[0]?.ongoing_id}`)
            // dispatch(RetrieveTransaction({ongoingId}))
        }
        else {
            OpenNotificationWithIcon({
                type: 'warning',
                message: 'Please fill all credentials'
            })
        }

    }
    


    // useMemo(() => {
    //     if(status === 'succeeded') {
    //         navigate(`/order-summary/ref/${Ongoing_id[0]?.ongoing_id}`)
    //     }
        
    // }, [status, navigate, Ongoing_id]);

    

    return (
        <>
            
            <SectionRight 
                as={motion.section}
                initial={{opacity: 0, x: 500}}  
                animate={{ opacity: 1, x: 0 }}
                exit={{opacity: 0, x: 500}}
                // transition={{duration: 0.3}}
            >
                <MainRight>
                    <div className="reservationHeader">
                        <div>
                            <h1>Contact Information</h1>
                        </div>
                        <div>
                            <Button 
                                background="var(--color-white)" 
                                icon={CancelIcon} 
                                border= '2px solid #ccc' 
                                borderRadius= '32px'
                                width= '25px'
                                height= '25px'
                                display='flex'
                                alignT= 'center'
                                justify= 'center'
                                fontSize= '12px'
                                onClicks={() => setShowModal(false)}
                            />
                        </div>
                    </div>
                    <div className="FormHeader">
                        <form onSubmit={submitFormReservation} className="noselect" >
                            <Names proceess={proceess} formdata={formdata} Focus={Focus} dropdown={dropdown} setDropdown={setDropdown} setFormData={setFormData} error={validatedName} validatedLastName={validatedLastName} FocusLastName={FocusLastName}  />
                            <Email proceess={proceess}  checkEmail={checkEmail} error={emailerror} phn={phn} setPhone={setPhone} formdata={formdata} setFormData={setFormData}  /> 
                            <Nationality proceess={proceess}  dropdown={dropdown} setDropdown={setDropdown} countryList={countryList} formdata={formdata} setFormData={setFormData} value={value} setValue={setValue}  />
                            <Identification  proceess={proceess}  dropdown={dropdown} error={validatedID} setDropdown={setDropdown} id={id} formdata={formdata} setFormData={setFormData} FocusID={FocusID}/> 
                            <Button  disabled={status === 'loading'}  background='var(--linear-primary)'  disabledBG="var(--linear-primary)" title={status === 'loading' ?  <Pulse color="#fff"  size="10px"  loading={status}/>  : 'Proceed to payment'} border="0"  color='var(--color-white)' width='100%' padding='.7rem' fontSize='var(--font-xtra-small-screen)' />
                        </form>
                    </div>
                </MainRight>
            </SectionRight>
            
        </>
        
    )
}

export default ReservationRight

