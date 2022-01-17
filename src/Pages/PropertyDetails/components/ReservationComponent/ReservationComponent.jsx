import { useRef, useState, useMemo } from "react"
import {useDispatch, useSelector} from "react-redux"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { FlexStyle } from "../../../../styles/globalStyles"
import Button from "../../../../components/Button/Button"
import styled from "styled-components"
import useAddGuestTotal from "../../../../hooks/useAddGuestTotal/useAddGuestTotal"
import OpenGuestDropdown from "../../../../components/OpenGuestDropdown"
import { incrementAdult, decrementAdult, incrementChildren, decrementChildren } from "../../../../redux/actions/componentState"
import {getReservation, getReservationUpdate} from "../../../../redux/actionCreators/actionCreators"
import styles from "../../../../styles/home.module.css"
import RentalServices from "./components/RentalServices"
import { SkeletonLoader } from "../../../../components/Loader/Skeleton"
import ValueAddedServices from "./components/ValueAddedServices"
import Prices from "./components/Prices"


const Reservations = styled.div `
    margin: max(1vw, 2rem) 0;
    transition: all 0.8s;
    

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


const initiateState = {cleaning: "", pickup: "" }


const ReservationComponent = ({setOpenGuest, openGuest, modalRef, openService, setOpenService, setshow, show, Query}) => {
    const dispatch = useDispatch();
    const {adultcount, childrencount, checkInDate, checkOutDate} = useSelector(state => state.ComponentState)
    // const {PropertyDetails: {general_info}} = useSelector(state => state.propertyDetails)
    const {status, reservation: {price, dates, summary_details, max_guest }, } = useSelector(state => state.reservationState)



    const [checkboxes, setCheckboxes] = useState(initiateState)
    const [openCar, setOpenCar] = useState(false)
    const [selectedCar, setSelectedCar] = useState(null)
    const [driver, setDriver] = useState(false)
    const [carlength, setCarlength] = useState(false)
    const [carlengthValue, setCarlengthValue] = useState(0)
    const [carType, setCarType] = useState('')
    const [driverlengthValue, setDriverlengthValue] = useState(0)
    const [radio, setRadio] = useState(null)



    const countAdultMinus = 1;
    const countAdultAdd =  status === 'succeeded' && max_guest[0]?.allowed_adult;
    const countAddChild =  status === 'succeeded' && max_guest[0]?.allowed_child
    const countMinusChild = 1;
    const reserveRef = useRef();
    const BenZ = useRef(null);
    const Suv = useRef(null);
    const Camry = useRef(null);
    // const TotalGuest = useAddGuestTotal({adultcount, childrencount});


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
        if(carlengthValue < summary_details[0]?.stay_length) {
            setCarlengthValue((prev) => prev + 1)
        }
    }

    const addDriverLength = () => {
        if(driverlengthValue < summary_details[0]?.stay_length && driverlengthValue < carlengthValue) {
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
        dispatch(getReservation())
    }

    useMemo(() => 
        dispatch(getReservationUpdate({checkOutDate, checkInDate, selectedCar, carlengthValue, radio, driverlengthValue, checkboxes})), 
    [dispatch, checkInDate, checkOutDate, selectedCar, carlengthValue, radio, driverlengthValue, checkboxes])

    

    return (
        <Reservations ref={reserveRef}>
            <ReservationBody>
                <ReservationContent>
                    <div style={{flex: '1'}}>
                        <span>&#8358;{status === 'loading' ? <SkeletonLoader /> : `${price[0]?.price?.toLocaleString()}/night` }</span>
                    </div>
                    <div>
                        <div>
                            <div>
                                <span>{status === 'loading' ? <SkeletonLoader /> : 'Check-in'}</span>
                                <span>{status === 'loading' ? <SkeletonLoader /> : dates[0].check_in_date ? dates[0].check_in_date : checkInDate ? checkInDate : 'DD/MM/YYYY'}</span>
                            </div>
                            <div>
                                <span>{status === 'loading' ? <SkeletonLoader /> : 'Check-out'}</span>
                                <span>{status === 'loading' ? <SkeletonLoader /> : dates[0].check_out_date ? dates[0].check_out_date : checkOutDate ? checkOutDate : 'DD/MM/YYYY'}</span>
                            </div>
                        </div>
                        <div>
                            {status === 'loading' ? (<SkeletonLoader /> ) :
                            (<div onClick={() => setOpenGuest(!openGuest)}> 
                                <div>
                                    <h4>Guests</h4>
                                    {/* <span>{TotalGuest > 1 ? TotalGuest : countAdultMinus } {GeneralInfo[0]?.allowed_guest > 1 ? 'guests' : 'guest' }</span>  */}
                                </div>
                                <div>
                                    {openGuest ? (<FiChevronUp />) : (<FiChevronDown />)}
                                </div>
                            </div>
                            )}
                            {status === 'loading' ? (<SkeletonLoader />) :
                            (<OpenGuestDropdown  
                                openGuest={openGuest} 
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
                                top="51.7px" 
                                width= "100%" 
                                left='0'   
                                border="1px solid rgba(33, 8, 8, 0.22)"
                                
                            />)}
                        </div>
                    </div>
                    <ValueAddedServices 
                        status={status} 
                        modalRef={modalRef} 
                        checkboxes={checkboxes} 
                        handleChange={handleChange} 
                        openService={openService} 
                        setOpenService={setOpenService}
                    />
                    {status === 'loading' ? (<SkeletonLoader /> ) :
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
                    {status === 'loading' ? (<SkeletonLoader />) :  
                        (<Button onClicks={Query ? handleSubmit : (() => setshow(!show))} title={Query ? 'Reserve' : 'Proceed'} border='none' background='var(--linear-primary)' color='var(--color-white)' width='100%' padding='.7rem' fontSize='var(--font-xtra-small-screen)' />
                    )}
                    </ReserveButton>
                    <Condition>
                        <p>{status === 'loading' ? <SkeletonLoader /> : 'You won’t be charged yet'}</p>
                    </Condition>
                    <Prices 
                        price={price} 
                        summary_details={summary_details} 
                        selectedCar={selectedCar} 
                        status={status} 
                        radio={radio}
                    />
                </ReservationContent>
            </ReservationBody>
        </Reservations>
    )
}

export default ReservationComponent
