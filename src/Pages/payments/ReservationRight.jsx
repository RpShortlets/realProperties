import { useState} from "react"
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
import Checkbox from "../../utils/FormElement/CheckBox"
import Agent from "./components/Agent"
//import ReCaptchaV2 from 'react-google-recaptcha'
import validator from 'validator'
import {saveCustomerInformation} from "../../redux/actionCreators/actionCreators"
import {useEncrypt} from "../../hooks/useEncryption/useEncryption"
import { motion } from "framer-motion"
import { CancelIcon } from "../../Svg/svg"
import { Pulse } from "../../components/Loader/Spinner"
import {useValidate, useValidateId, useValidateLast} from "../../hooks/useValidate/useValidate"
import { OpenNotificationWithIcon } from "../../components/Notification/Notification"
import useMediaQuery from "../../hooks/useMediaQuery/useMediaQuery"
import { Capitalize } from "../../hooks/useCapitalize/useCapitalize"
import { useCalculateAge } from "../../hooks/useCalculateAge/useCalculateAge"


const id = ['International Passport', 'Driver\'s License', 'Voter\'s Card', 'National ID',];


const SectionRight = styled.div `
    background: #fff;
    width: 100%;

    @media screen and (min-width: 769px) {
        width: 40%; 
        height: 100vh;
        z-index: 11; 
        position: absolute; 
        right: 0px;
        overflow-y: scroll;
    }


`

const MainRight = styled.div `
    padding:  1rem 2rem;

    h1 {
        font-size: var(--font-small);
        font-weight: 600;
        margin: 0;
    }

    .reservationHeader {
        ${FlexStyle}
        justify-content: space-between;
    }

    .FormHeader {
        margin: 2rem 0;
    }

    @media screen and (min-width: 769px) { 
        padding:  2rem 3rem;
    }

`


const ReservationRight = ({setShowModal, proceess}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const key = "@@TechnoRealProperty" 
    const {status} = useSelector(state => state.customerRecord)
    const {ongoingTransactions: {Ongoing_id, apartment_id}, proceess:loading} = useSelector(state => state.paymentState)
    const Query = useMediaQuery("(min-width: 769px)")

    const ongoing = loading === 'succeeded' && Ongoing_id[0]?.ongoing_id 

    const {encrypted} = useEncrypt(ongoing.toString(), key)
    const newEncrypted = encrypted.replace(/[^a-zA-Z ]/g, "")

    console.log(newEncrypted)

    const [formdata, setFormData] = useState({firstname: "", lastname: "", email: "", idnumber: "", agentName: '', agentContact: ''})
    const [dropdown, setDropdown] = useState({identification: "", nationality: "", gender: "", title: ''})
    const [value, setValue] = useState(null);
    const [phn, setPhone] = useState("")
    const [agentPhn, setAgentPhn] = useState("")
    const [validated, setValidated] = useState(false)
    const [emailerror, setEmailError] = useState(false)
    const [focus, setFocus] = useState(false)
    const [focusLast, setFocusLast] = useState(false)
    const [focusId, setFocusId] = useState(false)
    const [checkboxes, setCheckboxes] = useState({agent: false})
    const [checkbox, setcheckbox] = useState({individual: false})

    const age = useCalculateAge(value)

    const boxed = checkboxes.agent || checkbox.individual ? true : false;
    const name = formdata.firstname 
    const lastname = formdata.lastname;
    const Idnum = formdata.idnumber
    const {usedName: usedFirstname} = Capitalize(name)
    const {usedName: usedLastname} = Capitalize(lastname)



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

    const handleChange = (e) => {
        const { value, checked, name } = e.target;
        setCheckboxes({...checkboxes, [name]: checked ? value : ''})
        setcheckbox({checkbox: {}})
    }


    const handleBox = (e) => {
        const { value, checked, name } = e.target;
        setcheckbox({...checkbox, [name]: checked ? value : ''})
        setCheckboxes({checkboxes: {}}) 
    }


    // const [captcha, setCaptcha] = useState(false)
    const countryList = Country.map((x) => x.name)


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

        if(dropdown.title && validatedName && validatedLastName && dropdown.gender && validated && phn && age >= 18 && dropdown.nationality && dropdown.identification && validatedID && formdata.idnumber && boxed ) {
            if(checkboxes.agent) {
                if(formdata.agentName && agentPhn) {
                    dispatch(saveCustomerInformation({formdata, usedFirstname, usedLastname, dropdown, phn, value, ongoingId, apartmentId, agentPhn}))
                    navigate(`/order-summary/ref/${newEncrypted}`)
                } else {
                    if(!formdata.agentName) {
                        OpenNotificationWithIcon({
                            type: 'warning',
                            message: 'Please enter agent name',
                        })
                    }

                    else if(!agentPhn) {
                        OpenNotificationWithIcon({
                            type: 'warning',
                            message: 'Please enter agent phone number',
                        })
                    }
                }
            }
            else {
                dispatch(saveCustomerInformation({formdata, usedFirstname, usedLastname, dropdown, phn, value, ongoingId, apartmentId}))
                navigate(`/order-summary/ref/${newEncrypted}`)
            }
        }
        else {
            if(!dropdown.title) {
                OpenNotificationWithIcon({
                    type: 'warning',
                    message: 'Please select title',
                })
            }
            else if(!formdata.firstname ) {
                OpenNotificationWithIcon({
                    type: 'warning',
                    message: 'Please enter first name',
                })
            }
            else if(!formdata.lastname) { 
                OpenNotificationWithIcon({
                    type: 'warning',
                    message: 'Please enter last name',
                })
            }
            else if(!dropdown.gender) {
                OpenNotificationWithIcon({
                    type: 'warning',
                    message: 'Please select your gender',
                })
                
            }
            else if(!validated) {
                OpenNotificationWithIcon({
                    type: 'warning',
                    message: 'Please enter a valid email address',
                })
            }
            else if(!phn) {
                OpenNotificationWithIcon({
                    type: 'warning',
                    message: 'Please enter a valid phone number',
                })
            }
            else if(!value || age <= 18 ) {
                OpenNotificationWithIcon({
                    type: 'warning',
                    message: 'Age must be 18 or above',
                })
            }
            else if(!dropdown.nationality) {
                OpenNotificationWithIcon({
                    type: 'warning',
                    message: 'Please select your nationality',
                })
            }
            else if(!dropdown.identification) {
                OpenNotificationWithIcon({
                    type: 'warning',
                    message: 'Please select your identification',
                })
            }
            else if(!formdata.idnumber) {
                OpenNotificationWithIcon({
                    type: 'warning',
                    message: 'Please enter your id number',
                })
            }
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
                        {Query && (
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
                        )}
                    </div>
                    <div className="FormHeader">
                        <form onSubmit={submitFormReservation} className="noselect"  style={{marginBottom: '3rem'}}>
                            <div>
                                <Checkbox name="agent" checkboxes={checkboxes.agent} handleChange={handleChange} label="Booking done by Agent" />
                                <Checkbox name="individual" checkboxes={checkbox.individual} handleChange={handleBox} label="Booking done by individual" />
                            </div>
                            <Names proceess={proceess} formdata={formdata} Focus={Focus} dropdown={dropdown} setDropdown={setDropdown} setFormData={setFormData} error={validatedName} validatedLastName={validatedLastName} FocusLastName={FocusLastName}  />
                            <Email proceess={proceess}  checkEmail={checkEmail} error={emailerror} phn={phn} setPhone={setPhone} formdata={formdata} setFormData={setFormData}  /> 
                            <Nationality proceess={proceess}  dropdown={dropdown} setDropdown={setDropdown} countryList={countryList} formdata={formdata} setFormData={setFormData} value={value} setValue={setValue}  />
                            <Identification  proceess={proceess}  dropdown={dropdown} error={validatedID} setDropdown={setDropdown} id={id} formdata={formdata} setFormData={setFormData} FocusID={FocusID}/> 
                            {checkboxes.agent && (
                                <div>
                                    <Agent setAgentPhn={setAgentPhn} agentPhn={agentPhn} proceess={proceess} formdata={formdata} Focus={Focus} setFormData={setFormData} error={validatedName} validatedLastName={validatedLastName} FocusLastName={FocusLastName}  />
                                </div>
                            )}
                            <div>
                                <Button  disabled={status === 'loading'}  background='var(--linear-primary)'  disabledBG="var(--linear-primary)" title={status === 'loading' ?  <Pulse color="#fff"  size="10px"  loading={status}/>  : 'Proceed to payment'} border="0"  color='var(--color-white)' width='100%' padding='.7rem' fontSize='var(--font-xtra-small-screen)' />
                            </div>
                        </form>
                    </div>
                </MainRight>
            </SectionRight>
            
        </>
        
    )
}

export default ReservationRight

