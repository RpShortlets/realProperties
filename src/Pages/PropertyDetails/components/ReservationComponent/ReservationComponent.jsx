import { useRef, useEffect, useState } from "react"
import  { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import {useDispatch, useSelector} from "react-redux"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { FlexStyle } from "../../../../styles/globalStyles"
import Button from "../../../../components/Button/Button"
import styled from "styled-components"
import {Pulse} from "../../../../components/Loader/Spinner"
import OpenGuestDropdown from "../../../../components/OpenGuestDropdown"
import { incrementAdult, decrementAdult, incrementChildren, decrementChildren } from "../../../../redux/actions/componentState"
import {ongoingTransaction} from "../../../../redux/actionCreators/actionCreators"
import styles from "../../../../styles/home.module.css"
import RentalServices from "./components/RentalServices"
import SelectDateInput from "./components/SelectDateInput"
import { SkeletonLoader } from "../../../../components/Loader/Skeleton"
import ValueAddedServices from "./components/ValueAddedServices"
import Prices from "./components/Prices"
import Backdrop from "../../../../components/Backdrop"
import useAddGuestTotal from "../../../../hooks/useAddGuestTotal/useAddGuestTotal"



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
    border: 1px solid rgba(0, 0, 0, 0.22);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2rem 1rem;

    @media screen and (min-width: 769px) {
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.3);
        box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        filter: none;
    }

`

const ReservationContent = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div:nth-child(2) {
        display: none;
    }

    @media screen and (min-width:  769px) {
        display: block;
        > div:nth-child(2) {
            display: block;
            border: 1px solid rgba(33, 8, 8, 0.5);
            box-sizing: border-box;
            border-radius: 5px;
            margin: max(1vw,1rem) 0 0.7rem;
            
            /* padding: 10px; */

            > div:first-child {
                ${FlexStyle}
                border-bottom: 1px solid rgba(33, 8, 8, 0.5);
    

                > div {
                    flex: 1;
                    padding: 10px 10px 5px 10px;
                }

                > div:first-child {
                    border-right: 1px solid rgba(33, 8, 8, 0.5);
                }

                span {
                    text-transform: uppercase;
                }
                span:first-child {
                    display: block;
                    font-size: var(--font-xtraLarge-small);
                    font-weight: 600;
                }

                span:nth-child(2) {
                    font-size: 10px;
                    font-weight: 500;
                }
            }

            > div:nth-child(2) {
                padding: 7px 10px 10px;
                position: relative;
                cursor: pointer;

                > div:first-child {
                    ${FlexStyle}
                    justify-content: space-between;
                }

                h4 {
                    font-size: var(--font-xtraLarge-small);
                    font-weight: 600;
                    text-transform: uppercase;
                    margin: 0;
                }

                span {
                    font-size: 10px;
                    font-weight: 500;
                }
            }
        }        
    }


`

const Condition = styled.div `
    display: none;

    @media screen and (min-width: 769px) {
        display: block;
        ${FlexStyle}
        justify-content: center;

        p {
            font-size: var(--font-xtra-small-screen);
            margin: 0;
        }
    }
`

const ReserveButton = styled.div `
    margin: 0;
    flex: 1;

    @media screen and (min-width: 769px) {
        margin: max(.6vw, .9rem) 0; 
    }   

`




const ReservationComponent = ({setOpenGuest, openGuest, modalRef, openService, 
    setOpenService, setshow, show, Query, setCheckboxes, checkboxes, setOpenCar,
    openCar, setSelectedCar, selectedCar, setDriver, driver, setCarlength, carlength,
    setCarType, setDriverlengthValue,  setRadio, radio, setCarlengthValue, driverlengthValue,
    carlengthValue,
    }) => {
    const dispatch = useDispatch();
    const { id } = useParams();


    const {adultcount, childrencount} = useSelector(state => state.ComponentState)
    const {proceess} = useSelector(state => state.paymentState)
    const {reserve, reservation: {price, summary_details, max_guest } } = useSelector(state => state.reservationState)

    const [AddtionalServices, setTotalAdditional]  = useState()  

    const GeneralInfo = max_guest && max_guest[0]?.allowed_guest; 
    const AdultMinuss =  max_guest &&  max_guest[0]?.allowed_adult
    const AdultAdds = max_guest && max_guest[0]?.allowed_child  
    const countAdultMinus = 1;
    const countAdultAdd =  reserve === 'succeeded' && AdultMinuss
    const countAddChild =  reserve === 'succeeded' && AdultAdds
    const countMinusChild = 1;
    const reserveRef = useRef();
    const BenZ = useRef(null);
    const Suv = useRef(null);
    const Camry = useRef(null);
    const CleaningFee = summary_details[0]?.total_cleaning_price ? parseInt(summary_details[0]?.total_cleaning_price) : 0;
    const PickupFee =  summary_details[0]?.total_pickup_dropoff_price ? parseInt(summary_details[0]?.total_pickup_dropoff_price): 0;

    const  TotalGuest = useAddGuestTotal({adultcount, childrencount});



    const handleBenz = () => {
        alert('Hello')
    }

    
    const handlecheckbox = (e) => {
        const { value} = e.target;
        setRadio(value)
    }

    const handleChange = (e) => {
        const { value, checked, name } = e.target;
        setCheckboxes({...checkboxes, [name]: checked ? value : ''})
        setOpenService(false)
    }

    const showBenzRef = (id) => {
        if(BenZ?.current) {
            const value = BenZ?.current?.childNodes[1]?.value;
            const name = BenZ?.current?.childNodes[1]?.name;
            setCarType(value)
            setSelectedCar(name)
            setOpenCar(false)
            setCarlength(true)
            setDriver(true)
        }
    }

    const showSuvRef = (id) => {
        if(Suv?.current) {
            const value = Suv?.current?.childNodes[1]?.value;
            const name = Suv?.current?.childNodes[1]?.name;
            setCarType(value)
            setSelectedCar(name)
            setOpenCar(false)
            setCarlength(true)
            setDriver(true)
        }
    }

    const showCamryRef = (id) => {
        if(Camry?.current) {
            const name = Camry?.current?.childNodes[1]?.name;
            const value = Camry?.current?.childNodes[1]?.value;
            setCarType(value)
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

    const minusDays = () => {
        if(carlengthValue > 0) {
            setCarlengthValue((prev) => prev - 1)
        }
    }

    const resetData = () => {
        setCarlengthValue(0)
        setCarlength(false)
        setSelectedCar(null)
        setDriverlengthValue(0)
        setCarType('')
        setRadio(null)
    }



    const scrollHandler = () => {
        if(window.scrollY >= 1327) {
            if(reserveRef.current) {
                reserveRef.current.style.position = 'relative'
                reserveRef.current.style.bottom = '-50%'
            }
            
        }else {
            if(reserveRef.current) {
                reserveRef.current.style.position = 'static'
            }
        }
    }

    window.addEventListener('scroll', scrollHandler)


    const AddAdult = () => {
        if(adultcount < countAdultAdd) {
            dispatch(incrementAdult())
        }
    }

    const MinusAdult = () => {
        if(adultcount === countAdultMinus) {
            return;
        } else {
            dispatch(decrementAdult())
        }
    }

    
    const AddChildren = () => {
        if(childrencount < countAddChild) {
            dispatch(incrementChildren())
        }
    }

    const MinusChildren = () => {
        if(childrencount === countMinusChild) {
            return;
        } else {
            dispatch(decrementChildren())
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

        dispatch(ongoingTransaction({id, stayLenght, totalPrice, security, apartmentPrice, totalApartmentPrice, cleaning, pickup, carPrice, driver  }))
    }

    useEffect(() => {
        setTotalAdditional(CleaningFee + PickupFee)
    }, [CleaningFee, PickupFee]);


        return (
        <>
            {openCar  && <Backdrop onClick={()=> setOpenCar(false)} zIndex="2" /> }
            <Reservations 
                ref={reserveRef} 
                as={motion.div} 
                initial="hidden"
                animate="visible"        
            >
                <ReservationBody>
                    <ReservationContent>
                        <div style={{flex: '1'}}>
                            <span>&#8358;{reserve === 'loading' ? <SkeletonLoader /> : `${price[0]?.price?.toLocaleString()}/night `}</span>
                        </div>
                        <div>
                            <SelectDateInput/>
                            <div>
                                {reserve === 'loading' ? (<SkeletonLoader /> ) :
                                (<div onClick={() => setOpenGuest(!openGuest)}> 
                                    <div>
                                        <h4>Guests</h4>
                                        <span>{reserve === 'loading' ? <SkeletonLoader /> : TotalGuest > 1 ? TotalGuest : countAdultMinus } { GeneralInfo > 1 ? 'guests' : 'guest' }</span> 
                                    </div>
                                    <div>
                                        {openGuest ? (<FiChevronUp />) : (<FiChevronDown />)}
                                    </div>
                                </div>
                                )}
                                {reserve === 'loading' ? (<SkeletonLoader />) :
                                (<OpenGuestDropdown  
                                    openGuest={openGuest} 
                                    setOpenGuest={setOpenGuest}
                                    myRef={modalRef} 
                                    adultcount={adultcount} 
                                    styles={styles} 
                                    MinusAdult={MinusAdult} 
                                    childrencount={childrencount} 
                                    AddAdult={AddAdult} 
                                    MinusChildren={MinusChildren} 
                                    AddChildren={AddChildren} 
                                    countAdultMinus={countAdultMinus}
                                    countAdultAdd={countAdultAdd}
                                    countMinusChild={countMinusChild}
                                    countAddChild={countAddChild}
                                    top="40px" 
                                    width= "100%" 
                                    left='0'   
                                    border="1px solid rgba(33, 8, 8, 0.22)"
                                    
                                />)
                                }
                            </div>
                        </div>
                        <ValueAddedServices 
                            reserve={reserve} 
                            modalRef={modalRef} 
                            checkboxes={checkboxes} 
                            handleChange={handleChange} 
                            openService={openService} 
                            setOpenService={setOpenService}
                        />
                        {reserve === 'loading' ? (<SkeletonLoader /> ) :
                        (<RentalServices
                            openCar={openCar} 
                            setOpenCar={setOpenCar} 
                            showBenzRef={showBenzRef} 
                            BenZ={BenZ} 
                            handleBenz={handleBenz}
                            showCamryRef={showCamryRef}
                            Camry={Camry}
                            showSuvRef={showSuvRef}
                            Suv={Suv}
                            selectedCar={selectedCar}
                            driver={driver}
                            setDriver={setDriver}
                            carlength={carlength}
                            addDays={addDays}
                            minusDays={minusDays}
                            carlengthValue={carlengthValue}
                            handlecheckbox={handlecheckbox}
                            setRadio={setRadio}
                            radio={radio}
                            resetData={resetData}
                            addDriverLength={addDriverLength}
                            minusDriverLength={minusDriverLength}
                            driverlengthValue={driverlengthValue}
                        />)}
                        <ReserveButton>
                        {reserve === 'loading' ? (<SkeletonLoader />) :  
                            (<Button disabled={proceess === 'loading'} disabledBG="var(--linear-primary)" onClicks={Query ? handleSubmit : (() => setshow(!show))} title={proceess === 'loading' ? <Pulse color="#fff"  size="10" /> : 'Reserve'} border='none' background='var(--linear-primary)' color='var(--color-white)' width='100%' padding='.7rem' fontSize='var(--font-xtra-small-screen)' />
                        )}
                        </ReserveButton>
                        <Condition>
                            <p>{reserve === 'loading' ? <SkeletonLoader /> : 'You won’t be charged yet'}</p>
                        </Condition>
                        {reserve === 'succeeded' &&
                        (
                            
                            <Prices 
                                price={price} 
                                summary_details={summary_details} 
                                selectedCar={selectedCar} 
                                reserve={reserve} 
                                radio={radio}
                                TotalAdditionalServices={AddtionalServices}
                            />
                        )}
                    </ReservationContent>
                </ReservationBody>
            </Reservations>
        </>
    )
}

export default ReservationComponent
