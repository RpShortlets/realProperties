import React, {useState, useEffect, useRef} from 'react'
import { useParams } from 'react-router'
import styled from "styled-components"
import { PaddingStyle } from "../../styles/globalStyles"
import { useDispatch, useSelector } from 'react-redux'
import Backdrop from "../../components/Backdrop"
import useMediaQuery from '../../hooks/useMediaQuery/useMediaQuery'
import { getComingSoonDetails, saveCustomerComingDetails } from '../../redux/actionCreators/actionCreators'
import validator from 'validator'
import Button from '../../components/Button/Button'

import DetailComponent from './components/Details'
import ImagesComponent from "./components/Images"
import FacilityComponent from './components/Facility'
import AmenityComponent from "./components/Amenity"
import ImageModal from "../../components/Image Modal/ImageModal";
import { Input, PhoneType } from '../../utils/FormElement/Input'
import { Envelop, Person, SearchNotFoundIcon } from '../../Svg/svg'
import { OpenNotificationWithIcon } from '../../components/Notification/Notification'
import { ClearSaveCustomer } from '../../redux/actions/comingSoonReducer'
import Error from '../../components/Error/Error'




const Section = styled.section `
    width: 100%;
    height: 100%;
    background: var(--color-white);
`

const Main  = styled.main `
    ${PaddingStyle}
    padding-top: 4vw;
    padding-bottom: 4vw;
`

const Container  = styled.div `
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;

    @media screen and (min-width: 991px) {
        grid-template-columns: repeat(2, 1fr);
    }

`

const FormComponent = styled.div `
    margin: max(6vw, 3rem)  0 0 ;
    h2 {
        font-size: var(--font-medium);
        font-weight: 600;
        margin: 0;
    }

    form {
        width: 100%;
        margin-top: 1rem;
    }

    @media screen and (min-width: 769px) {
        h2 {
            font-size: 2rem;
        }
    }


    @media screen and (min-width: 701px) {
        form {
            width: 60%;
        }
    }

`


const ComingDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch();
    const ref = useRef();

    
    const [show, setShow] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [formdata, setFormData] = useState({firstname: "", lastname: "", email: ""})
    const [phn, setPhone] = useState("")
    const [validated, setValidated] = useState(false)
    const [emailerror, setEmailError] = useState(false)

    const [currentImageIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const {proceess, comingDetails, saveCustomer, requesting } = useSelector(state => state.comingsoonReducer)
    const [showAmenity, setShowAmenity] = useState(false)
    const Query = useMediaQuery("(min-width: 769px)")

    console.log(comingDetails, proceess)

    const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

    const gotoNext = () =>
        currentImageIndex + 1 < images.length &&
        setCurrentIndex(currentImageIndex + 1);

    
    const showPictures = (id) => {
        setIsOpen(true)
        // setCurrentIndex(0)
    }


    let newImages = proceess === "succeeded" && comingDetails?.pictures
    let images = []

    //* TRANSFORM IMAGES TO ARRAY OF OBJECTS
    for (var i = 0; i < newImages?.length; i++) {
        // images = newImages
        // slice small pictures from the array and create new array object
        images = newImages?.slice(4)?.map(image => ({
            src: image.picture,
            loading: 'lazy',
        }))
    }

   

    const scrollToPosition = () => {
        setShowForm(!showForm)
    }


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

    //* submitReservation prevent the page from refreshing
    const submitReservation = (e) => {
        e.preventDefault()
        if(formdata.firstname && formdata.lastname && validated && phn) { 
            dispatch(saveCustomerComingDetails({formdata, phn, id}))
        } else {
            OpenNotificationWithIcon({
                type: 'warning',
                message: 'Please enter all fields'
            })
        }
    }


    //* FETCH APARTMENT DETAILS ON COMPONENT MOUNT
    useEffect(() => {
        dispatch(getComingSoonDetails(id))     
    }, [id, dispatch])

    //* ALLOW USER TO SCROLL DOWN TO RESERVATION FORM
    useEffect(() => {
        if(showForm) {
            if(ref?.current) {
                ref?.current?.scrollIntoView({behavior: 'smooth'})
            } else {
                return () => ref.current = null
            }
        }  
    }, [showForm])

    //* CLEAR CUSTOMER DETAILS/RESET FORM
    useEffect(() => {
        if(requesting === 'succeeded' && saveCustomer?.title === 'Customer Info saved ') {
            OpenNotificationWithIcon({
                message: 'Booking Successful',
                type: 'success'
            })
            setFormData({firstname: '', lastname: '', email: ''})
            setPhone(null)
            return () => {
                dispatch(ClearSaveCustomer())
            }
        } else {
            if(requesting === 'failed') {
                OpenNotificationWithIcon({
                    message: 'Something went wrong',
                    type: 'error'
                })
            }
        }
    }, [requesting, saveCustomer, dispatch])


    if(proceess === 'failed') {
        return (
            <Error title="Something went wrong. Please try again" Icon={SearchNotFoundIcon} />
        )
    }
    

    return (
        <>
            {isOpen  && <Backdrop onClick={()=> setIsOpen(!isOpen)} zIndex="4" theme="rgba(0, 0, 0, .9)" /> }
            <ImageModal 
                isOpen={isOpen} 
                gotoPrevious={gotoPrevious} 
                gotoNext={gotoNext} 
                images={images} 
                currentImageIndex={currentImageIndex} 
                setIsOpen={setIsOpen} 
                Query={Query} 
            />
            <Section data-testid="comingDetails">
                <Main paddingleft="true" paddingRight="true">
                    <Container>
                        <DetailComponent 
                            show={show} 
                            setShow={setShow}
                            loading={proceess}
                            data={comingDetails} 
                            showForm={showForm}
                            setShowForm={setShowForm}
                            scrollToPosition={scrollToPosition}
                        />
                        <ImagesComponent 
                            loading={proceess}
                            data={comingDetails} 
                            showPictures={showPictures}
                        />
                        <FacilityComponent />
                        <AmenityComponent 
                            PropertyDetails={comingDetails}
                            showAmenity={showAmenity}
                            setShowAmenity={setShowAmenity}
                            Query={Query}
                            loading={proceess}
                        />
                        
                    </Container>
                    {showForm && (
                        <FormComponent id="comingForm" ref={ref}>
                            <div>
                                <h2>Make A Reservation</h2>
                                <form onSubmit={submitReservation} autoComplete="Off" autoSave='Off'>
                                    <Input placeholder="First Name" name="firstname" Icon={Person}  value={formdata.firstname} formdata={formdata} handleChange={(e) => setFormData({...formdata, firstname: e.target.value.replace(/[^\w\s]/gi, "") })} label="First Name" />
                                    <Input type="text" label="Last Name"  marginTop="0px" placeholder="Last Name" name="lastname" Icon={Person} value={formdata.lastname} formdata={formdata} handleChange={(e) => setFormData({...formdata, lastname: e.target.value.replace(/[^\w\s]/gi, "")})} />
                                    <Input disabled={proceess === 'failed'} error={emailerror} type="email" label="Email" placeholder="Name@Example.com" name="email" Icon={Envelop} value={formdata.email} formdata={formdata} handleChange={(e) => checkEmail(e.target.value)}/>
                                    <PhoneType phn={phn} setPhone={setPhone} label="Phone Number"/>
                                    <div style={{marginTop: "2rem"}}>
                                        <Button 
                                            title={requesting === "loading" ? "Sending" : "Submit Reservation"}
                                            disabled={requesting === "loading" ? true : false} 
                                            border="0" 
                                            color="var(--color-white)" 
                                            background={requesting === "loading" ? "var(--color-primary-dark)" : "var(--linear-primary)"}
                                            width={"100%"}
                                            padding=".8rem"
                                        />
                                    </div>
                                </form>
                            </div>
                        </FormComponent>
                    )}            
                </Main>
            </Section>
        </>
    )
}

export default ComingDetails