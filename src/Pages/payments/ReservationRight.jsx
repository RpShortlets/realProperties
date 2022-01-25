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
import {saveCustomerInformation, RetrieveTransaction} from "../../redux/actionCreators/actionCreators"
import { motion, AnimatePresence } from "framer-motion"
import { CancelIcon } from "../../Svg/svg"


const id = ['International Passport', 'Driver\'s License', 'Voter\'s Card', 'National ID', 'Others'];


const SectionRight = styled.div `
    background: #fff;
    width: 40%;     
    z-index: 11; 
    height: 100vh;
    position: absolute; 
    top: 0; 
    right: 100px;
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


const ReservationRight = ({setShowModal}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const {status} = useSelector(state => state.customerRecord)
    const {ongoingTransactions: {Ongoing_id, apartment_id}} = useSelector(state => state.paymentState)




    const [formdata, setFormData] = useState({firstname: "", lastname: "", email: "", idnumber: "", dateofBirth: ''})
    const [dropdown, setDropdown] = useState({identification: "", nationality: ""})
    const [value, setValue] = useState(new Date());
    const [phn, setPhone] = useState("")
    const [validated, setValidated] = useState(false)
    const [emailerror, setEmailError] = useState(false)
    const [focus, setFocus] = useState(false)
    const [error, seterror] = useState(false)


    // const [captcha, setCaptcha] = useState(false)
    const countryList = Country.map((x) => x.name)

    console.log(focus)

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

        if(validated) {
            dispatch(saveCustomerInformation({formdata, dropdown, phn, value, ongoingId, apartmentId}))
            dispatch(RetrieveTransaction({ongoingId}))
        }
        else {
            alert('Not valid')
        }

    }
    

    
    const Blur = (e) => {
        if(formdata.firstname.length < 1 ) {
            seterror(true)  
        }
        else {
            seterror(false)
        }
    }

    const Focus = (e) => {
        if(e.target.name) {
            setFocus(true)
        }
    }

    useMemo(() => {
        if(status === 'succeeded') {
            navigate('/order-summary')
        }
        
    }, [status, navigate]);


    return (
        <>
            <AnimatePresence initial={false}>
                <SectionRight 
                    as={motion.section}
                    initial={{x: '200'}}  
                    animate={{ x: 100 }}
                    transition={{ ease: "easeOut", duration: 1, type:{
                        type: 'spring'
                    }}}
                    exit={{x: 0}}
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
                            <form onSubmit={submitFormReservation}>
                                <Names formdata={formdata} setFormData={setFormData} Focus={Focus} Blur={Blur} error={error}  />
                                <Email checkEmail={checkEmail} error={emailerror} phn={phn} setPhone={setPhone} formdata={formdata} setFormData={setFormData}  /> 
                                <Nationality dropdown={dropdown} setDropdown={setDropdown} countryList={countryList} formdata={formdata} setFormData={setFormData} value={value} setValue={setValue}  />
                                <Identification  dropdown={dropdown} setDropdown={setDropdown} id={id} formdata={formdata} setFormData={setFormData}/> 
                                <Button  disabled={status === 'loading'}  background='var(--linear-primary)'  disabledBG="var(--linear-primary)" title={status === 'loading' ? 'Loading' : 'Proceed to payment'} border="0"  color='var(--color-white)' width='100%' padding='.7rem' fontSize='var(--font-xtra-small-screen)' />
                            </form>
                        </div>
                    </MainRight>
                </SectionRight>
            </AnimatePresence>
        </>
        
    )
}

export default ReservationRight

