import {useState, useRef, useEffect, useMemo} from "react"
import { useParams} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import styled  from "styled-components/macro"
import { FlexStyle, PaddingStyle } from "../../styles/globalStyles"
import useMediaQuery from "../../hooks/useMediaQuery/useMediaQuery"
import MobileModal from "./components/Modal"
import ReservationComponent from "./components/ReservationComponent/ReservationComponent" 
import "../../styles/propertyDetails.css"
import PropertyName from "./components/PropertyName"
import PropertyImage from "./components/PropertyImage"
import PropertyHeader from "./components/PropertyHeader"
import PropertyDescription from "./components/PropertyDescription"
import PropertyAmenities from "./components/PropertyAmenities"
import {PropertyCalender} from "./components/PropertyCalender"
import PropertyRules from "./components/PropertyRules"
import { SkeletonLoader } from "../../components/Loader/Skeleton"
import Backdrop from "../../components/Backdrop"
import {Reservation} from "../../export"
import { getReservationUpdate } from "../../redux/actionCreators/actionCreators"


const Reservations = styled.div `
    margin: max(1vw, 2rem) 0;
    transition: all 0.8s;
    position: relative;

    @media screen and (min-width: 769px) {
        margin: 0;
        grid-column: 5/7;
        grid-row: 1/4;
        position: ${({position}) => position};
    }
    
`

const ReservationBody = styled.div `
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    filter: none;
    height: 400px;

    .reserveContent {
        /* ${FlexStyle} */
        height: 100%;
        padding: 1rem;

        div {
            margin: max(.8vw, .3rem) 0;
        }
    }
`

const Section  = styled.section `
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const Main = styled.div `
    ${PaddingStyle}

    @media screen and (min-width: 769px) {
        padding-top: 2rem;
    }
`

const Header = styled.div `
    position: relative; 

`

const BodyContainer = styled.div `
    margin-bottom: max(1vw, 1rem);    

`

const BodyContent = styled.div `
    

    @media screen and (min-width: 769px) {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 2rem;
    }
`

const initiateState = {cleaning: "", pickup: "" }

const PropertyDetails = () => {
    const dispatch = useDispatch();
    const Query = useMediaQuery("(min-width: 769px)")
    const Id = useParams().id
    const cached = JSON.parse(localStorage.getItem('getReservation'))

    const {status} = useSelector(state => state.propertyDetails)
    const {proceess} = useSelector(state => state.paymentState)
    const {checkInDate, checkOutDate} = useSelector(state => state.ComponentState)
    const {reservation: {summary_details }} = useSelector(state => state.reservationState)
    const {reserve} = useSelector(state => state.reservationState)


    const [openGuest, setOpenGuest] = useState(false)
    const [openService, setOpenService] = useState(false)
    const [show, setshow] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [checkboxes, setCheckboxes] = useState(initiateState)
    const [openCar, setOpenCar] = useState(false)
    const [selectedCar, setSelectedCar] = useState(null)
    const [driver, setDriver] = useState(false)
    const [carlength, setCarlength] = useState(false)
    const [carlengthValue, setCarlengthValue] = useState(0)
    const [carType, setCarType] = useState('')
    const [driverlengthValue, setDriverlengthValue] = useState(0)
    const [radio, setRadio] = useState(null)

    const modalRef = useRef()
    const staylength = cached ? cached?.summary_details[0]?.stay_length :  summary_details ? summary_details[0]?.stay_length : 1;



    //* HIDE SCROLL BAR WHILE HEADER IMAGE IS STILL LOADING AT HOME PAGE
    useEffect(() => {
        if(show) {
            document.body.style.overflow = 'hidden'
        } 
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [show])

    useEffect(() => {
        if(proceess === 'succeeded') {
            setShowModal(true)
        }
    }, [proceess]);

    
    useMemo(() => 
        dispatch(getReservationUpdate({checkOutDate, checkInDate, selectedCar, carlengthValue, radio, driverlengthValue, checkboxes,Id})), 
    [dispatch, checkInDate, checkOutDate, selectedCar, carlengthValue, radio, driverlengthValue, checkboxes, Id])



    useEffect(() => {
        if(showModal) {

            // document.body.style.overflow = 'hidden'
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [showModal])

    return (
        <>
            {openService  && <Backdrop onClick={()=> setOpenService(false)} zIndex="10" /> }
            {showModal  && <Backdrop onClick={()=> setShowModal(false)} theme="rgba(0, 0, 0, .5)" /> }
            {!Query && <MobileModal show={show} setshow={setshow}/>}
            {showModal && (
                <Reservation  setShowModal={setShowModal}/>
            )}
            <Section>
                <Main paddingleft='true' paddingRight='true'>
                    <Header>
                        {status === 'loading' ?  <SkeletonLoader />  : <PropertyName status={status} />}
                        <PropertyImage status={status}/> 
                        <BodyContainer>
                            <BodyContent>
                                <PropertyHeader status={status}/>
                                <PropertyDescription status={status} />
                                {reserve === 'loading' ? (
                                    <Reservations>
                                        <ReservationBody>
                                            <div className="reserveContent">
                                                <div>
                                                    <span>{reserve === 'loading' && <SkeletonLoader height='20px' />}</span>
                                                </div>
                                                <div>
                                                    <span>{reserve === 'loading' && <SkeletonLoader height='50px' />}</span>
                                                </div>
                                                <div>
                                                    <span>{reserve === 'loading' && <SkeletonLoader  height='50px'/>}</span>
                                                </div>
                                                <div>
                                                    <span>{reserve === 'loading' && <SkeletonLoader height='50px' />}</span>
                                                </div>
                                                <div>
                                                    <span>{reserve === 'loading' && <SkeletonLoader height='50px' />}</span>
                                                </div>
                                                <div>
                                                    <span>{reserve === 'loading' && <SkeletonLoader height='50px' />}</span>
                                                </div>
                                            </div>
                                        </ReservationBody>
                                    </Reservations>
                                    ) : reserve === 'succeeded' &&  (
                                    <ReservationComponent 
                                        setOpenGuest={setOpenGuest}
                                        openGuest={openGuest}
                                        modalRef={modalRef}
                                        openService={openService}
                                        setOpenService={setOpenService}
                                        setshow={setshow}
                                        show={show}
                                        Query={Query}
                                        id={Id}
                                        setCheckboxes={setCheckboxes}
                                        checkboxes={checkboxes}
                                        setOpenCar={setOpenCar}
                                        openCar={openCar}
                                        setSelectedCar={setSelectedCar}
                                        selectedCar={selectedCar}
                                        setDriver={setDriver}
                                        driver={driver}
                                        setCarlength={setCarlength}
                                        carlength={carlength}
                                        setCarlengthValue={setCarlengthValue}
                                        carlengthValue={carlengthValue}
                                        setCarType={setCarType}
                                        setDriverlengthValue={setDriverlengthValue}
                                        driverlengthValue={driverlengthValue}
                                        setRadio={setRadio}
                                        radio={radio}
                                        reserve={reserve}
                                    />
                                )}            
                                <PropertyAmenities  status={status}/>
                            </BodyContent>
                        </BodyContainer>
                    </Header>
                    <PropertyCalender status={status} lenghtstay={staylength}  margin="max(3vw,2rem) 0"/> 
                    <PropertyRules  status={status}/>
                </Main> 
            </Section>
        </>
    )
}

export default PropertyDetails


