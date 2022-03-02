import {useState, useRef, useEffect} from "react"
import { useParams, useNavigate} from "react-router-dom"
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
import { getReservationUpdate, ongoingTransaction, ShortletDetails } from "../../redux/actionCreators/actionCreators"
import { AnimatePresence } from "framer-motion"
import Error from "../../components/Error/Error"
import { SearchNotFoundIcon } from "../../Svg/svg"
import { OpenNotificationWithIcon } from "../../components/Notification/Notification"



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
    const navigate = useNavigate()

    const Query = useMediaQuery("(min-width: 769px)")
    const {Id, checkin, checkout} = useParams()


    const {status} = useSelector(state => state.propertyDetails)
    const {proceess} = useSelector(state => state.paymentState)
    const {checkInDate, checkOutDate, showMobileReserveModal} = useSelector(state => state.ComponentState)
    const {reservation: {summary_details, price }} = useSelector(state => state.reservationState)
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
    const [carlengthValue, setCarlengthValue] = useState(1)
    // const [carType, setCarType] = useState('')
    const [driverlengthValue, setDriverlengthValue] = useState(0)
    const [radio, setRadio] = useState('driver')
    const [AddtionalServices, setTotalAdditional]  = useState()  
    const [carDriverTotal, setCarDriverTotal]  = useState()  

    const modalRef = useRef()
    const BenZ = useRef(null);
    const Suv = useRef(null);
    const Camry = useRef(null);



    const staylength = summary_details ? summary_details[0]?.stay_length : null;    
    const CleaningFee =  reserve === 'succeeded' && summary_details[0]?.total_cleaning_price ? parseInt(summary_details[0]?.total_cleaning_price) : 0;
    const PickupFee =  reserve === 'succeeded' && summary_details[0]?.total_pickup_dropoff_price ? parseInt(summary_details[0]?.total_pickup_dropoff_price): 0;
    const carPrice =reserve === 'succeeded'&&  summary_details[0]?.total_car_price ? parseInt( summary_details[0]?.total_car_price) : 0;
    const driverPrice = reserve === 'succeeded'&& summary_details[0]?.total_driver_price ?  parseInt(summary_details[0]?.total_driver_price) : 0;
    const checkInD = checkin.slice(8);
    const checkOutD = checkout.slice(9);


    //* HANDLE CHECKBOX CHANGE
    const handleChange = (e) => {
        const { value, checked, name } = e.target;
        setCheckboxes({...checkboxes, [name]: checked ? value : ''})
        setOpenService(false)
    }


    const handlecheckbox = (e) => {
        const { value} = e.target;
        setRadio(value)
    }
    //* END OF HANDLE CHECKBOX CHANGE


    const handleBenz = () => {
        alert('Hello')
    }

    const resetData = () => {
        setCarlengthValue(0)
        setCarlength(false)
        setSelectedCar(null)
        setDriverlengthValue(0)
        setRadio(null)
    }

    const showBenzRef = (id) => {
        if(BenZ?.current) {
            // const value = BenZ?.current?.childNodes[1]?.value;
            const name = BenZ?.current?.childNodes[1]?.name;
            // setCarType(value)
            setSelectedCar(name)
            setOpenCar(false)
            setCarlength(true)
            setDriver(true)
        }
    }

    const showSuvRef = (id) => {
        if(Suv?.current) {
            // const value = Suv?.current?.childNodes[1]?.value;
            const name = Suv?.current?.childNodes[1]?.name;
            // setCarType(value)
            setSelectedCar(name)
            setOpenCar(false)
            setCarlength(true)
            setDriver(true)
        }
    }

    const showCamryRef = (id) => {
        if(Camry?.current) {
            const name = Camry?.current?.childNodes[1]?.name;
            setSelectedCar(name)
            setOpenCar(false)
            setCarlength(true)
            setDriver(true)
        }
    }

    
    const addDays = () => {
        const days = summary_details[0]?.stay_length && summary_details[0]?.stay_length 
        if(carlengthValue < days ) {
            setCarlengthValue((prev) => prev + 1)
        }
    }


    const minusDays = () => {
        if(carlengthValue > 0) {
            setCarlengthValue((prev) => prev - 1)
        }
    }

    
    const addDriverLength = () => {
        const days = summary_details[0]?.stay_length && summary_details[0]?.stay_length 
        if(driverlengthValue <  days && driverlengthValue < carlengthValue) {
            setDriverlengthValue((prev) => prev + 1)
        }
    }

    const minusDriverLength = () => {
        if(driverlengthValue > 0) {
            setDriverlengthValue((prev) => prev - 1)
        }
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const stayLenght =  summary_details[0]?.stay_length;
        const totalPrice =  summary_details[0]?.total;
        const security =  summary_details[0]?.security_deposit;
        const apartmentPrice = price[0]?.price;
        const totalApartmentPrice =  summary_details[0]?.total_apt_price;
        const cleaning =  summary_details[0]?.total_cleaning_price;
        const pickup = summary_details[0]?.total_pickup_dropoff_price;
        const carPrice = summary_details[0]?.total_car_price;
        const driver = summary_details[0]?.total_driver_price;

        if(Query) {
            if(checkInD !==  '' && checkOutD !== '') {
                dispatch(ongoingTransaction({Id, stayLenght, totalPrice, security, apartmentPrice, totalApartmentPrice, cleaning, pickup, carPrice, driver, checkInDate, checkOutDate}))
                setShowModal(true)
                setshow(false)
            } else {
                OpenNotificationWithIcon({
                    message: 'Please select check in and check out date',
                    type: 'warning',
                })
            }
        } else {
            if(checkInD !==  '' && checkOutD !== '') {
                dispatch(ongoingTransaction({Id, stayLenght, totalPrice, security, apartmentPrice, totalApartmentPrice, cleaning, pickup, carPrice, driver, checkInDate, checkOutDate}))
                navigate('/reservation')
                setshow(false)
            } else {
                OpenNotificationWithIcon({
                    message: 'Please select check in and check out date',
                    type: 'warning',
                })
            }
        }
        
    }



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
        setTotalAdditional(CleaningFee + PickupFee)
    }, [CleaningFee, PickupFee]);

    useEffect(() => {
        setCarDriverTotal(carPrice + driverPrice)
    }, [carPrice, driverPrice]);
    


    //!DEPENDING ISSUE

    useEffect(() => {
        dispatch(ShortletDetails({checkInD, checkOutD, Id})) 
    },  [checkInD,checkOutD, Id, dispatch])
    
    
    useEffect(() => {
        dispatch(getReservationUpdate({checkOutDate, checkInDate, selectedCar, carlengthValue, radio, driverlengthValue, checkboxes,Id}))
        navigate(`/apartment/${Id}&checkIn=${checkInDate  !== null ? checkInDate : ''}&checkOut=${checkOutDate  !== null ? checkOutDate : ''}`)

    }, [dispatch, checkInDate, navigate, checkOutDate, selectedCar, carlengthValue, radio, driverlengthValue, checkboxes, Id])

    const date1 = new Date(checkInD);
    const date2 = new Date(checkOutD);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 


    useEffect(() => {
        if(showModal) {
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


    if(status === 'failed') {
        return (
            <Error title="Property not found" Icon={SearchNotFoundIcon} />
        )
    }
    

    return (
        <>
            {openService  && <Backdrop onClick={()=> setOpenService(false)} zIndex="10" /> }
            {showModal  && <Backdrop onClick={()=> setShowModal(false)} theme="rgba(0, 0, 0, .5)" /> }
            {!Query && showMobileReserveModal && 
                <MobileModal 
                    show={showMobileReserveModal} 
                    modalRef={modalRef}
                    openGuest={openGuest}
                    setOpenGuest={setOpenGuest}  
                    checkboxes={checkboxes}
                    openService={openService}
                    setOpenService={setOpenService} 
                    handleChange={handleChange} 
                    handleSubmit={handleSubmit} 
                    TotalAdditionalServices={AddtionalServices}
                    TotalCarAndDriverPrice={carDriverTotal}
                    selectedCar={selectedCar}
                    resetData={resetData} 
                    radio={radio} 
                    addDays={addDays} 
                    minusDays={minusDays}
                    carlengthValue={carlengthValue} 
                    openCar={openCar} 
                    setOpenCar={setOpenCar} 
                    showBenzRef={showBenzRef} 
                    BenZ={BenZ} 
                    handleBenz={handleBenz}
                    showCamryRef={showCamryRef}
                    Camry={Camry}
                    showSuvRef={showSuvRef}
                    Suv={Suv}
                    driver={driver}
                    setDriver={setDriver}
                    carlength={carlength}
                    handlecheckbox={handlecheckbox}
                    setRadio={setRadio}
                    addDriverLength={addDriverLength}
                    minusDriverLength={minusDriverLength}
                    driverlengthValue={driverlengthValue}
                />
            }
            <AnimatePresence  initial={false} exitBeforeEnter={false}>
                {showModal && (
                    <Reservation  setShowModal={setShowModal} proceess={proceess}/>
                )}
            </AnimatePresence>
            <Section>
                <Main paddingleft='true' paddingRight='true'>
                    <Header>
                        {status === 'loading' ?  <SkeletonLoader  />  : 
                            status === 'succeeded' &&
                            <PropertyName status={status} />
                        }
                        <PropertyImage status={status}/> 
                        <BodyContainer>
                            <BodyContent>
                                {status === 'loading' ?  
                                    <BodyHeader>
                                        <SkeletonLoader  width="40%"/> 
                                    </BodyHeader>
                                    :
                                    status === 'succeeded' && (
                                        <PropertyHeader status={status}/>
                                    )
                                }
                                {status === "loading" ?
                                    <Description>
                                        <SkeletonLoader  height='200px'/> 
                                    </Description>
                                    : 
                                    status === "succeeded" && (
                                        <PropertyDescription status={status}/>
                                    )
                                } 
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
                                        // setCarType={setCarType}
                                        setDriverlengthValue={setDriverlengthValue}
                                        driverlengthValue={driverlengthValue}
                                        setRadio={setRadio}
                                        radio={radio}
                                        reserve={reserve}
                                        setShowModal={setShowModal}
                                        MobileModal={setshow}
                                        handleChange={handleChange}
                                        handleSubmit={handleSubmit}
                                        TotalAdditionalServices={AddtionalServices}
                                        TotalCarAndDriverPrice={carDriverTotal}
                                        resetData={resetData} 
                                        showBenzRef={showBenzRef} 
                                        BenZ={BenZ} 
                                        handleBenz={handleBenz}
                                        showCamryRef={showCamryRef}
                                        Camry={Camry}
                                        showSuvRef={showSuvRef}
                                        Suv={Suv}
                                        addDays={addDays} 
                                        minusDays={minusDays}
                                        checkInD={checkInD}
                                        checkOutD={checkOutD}
                                        
                                    />
                                )}            
                                {status === "loading" ? 
                                    <Amenities>
                                        <SkeletonLoader  height='300px'/> 
                                    </Amenities> :
                                    status === "succeeded" && (
                                        <PropertyAmenities />
                                    )
                                }   
                            </BodyContent>
                        </BodyContainer>
                    </Header>
                    <PropertyCalender status={reserve} lenghtstay={diffDays ? diffDays : staylength}  margin="max(3vw,2rem) 0"/> 
                    <PropertyRules  status={status}/>
                </Main> 
            </Section>
        </>
    )
}

export default PropertyDetails

const Description = styled.div `
    grid-column: 1/4;
`

const Amenities = styled.div `
    grid-column: 1/4;
`

const BodyHeader = styled.div `
    grid-column: 1/5;
`