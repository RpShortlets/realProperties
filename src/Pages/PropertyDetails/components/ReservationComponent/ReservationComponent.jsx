import { useRef, useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"
import {useDispatch, useSelector} from "react-redux"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { FlexStyle } from "../../../../styles/globalStyles"
import Button from "../../../../components/Button/Button"
import styled from "styled-components"
import OpenGuestDropdown from "../../../../components/OpenGuestDropdown"
import { incrementAdult, decrementAdult, incrementChildren, decrementChildren,setShowMobileReserve, setShowMobileReserveModal } from "../../../../redux/actions/componentState"
import styles from "../../../../styles/home.module.css"
import RentalServices from "./components/RentalServices"
import SelectDateInput from "./components/SelectDateInput"
import { SkeletonLoader } from "../../../../components/Loader/Skeleton"
import ValueAddedServices from "./components/ValueAddedServices"
import Prices from "./components/Prices"
import Backdrop from "../../../../components/Backdrop"
import useAddGuestTotal from "../../../../hooks/useAddGuestTotal/useAddGuestTotal"
import { OpenNotificationWithIcon } from "../../../../components/Notification/Notification"



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

        .reserveSvg {
            svg {
                font-size: var( --font-small-screen) !important;
                color: var(--color-dark);
            }
        }
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
    setOpenService, Query, handleChange, checkboxes, setOpenCar,
    openCar, selectedCar, setDriver, driver, carlength,  setRadio, radio, driverlengthValue,
    carlengthValue, handleSubmit, MobileModal, TotalCarAndDriverPrice, TotalAdditionalServices,
    showBenzRef,  resetData, addDriverLength,
    minusDriverLength, handlecheckbox, addDays, minusDays, showSuvRef,   
    showCamryRef, handleBenz, BenZ, Camry, Suv, checkInD, checkOutD
    }) => {


    console.log(minusDays)
    const dispatch = useDispatch();

    const {adultcount, childrencount, showMobileReserveModal} = useSelector(state => state.ComponentState)
    const {proceess} = useSelector(state => state.paymentState)
    const {reserve, reservation: {price, summary_details, max_guest } } = useSelector(state => state.reservationState)

    const [disableChild, setDisabledChild]  = useState(false)

    const GeneralInfo = max_guest && max_guest[0]?.allowed_guest; 
    const AdultMinuss =  max_guest &&  max_guest[0]?.allowed_adult
    const AdultAdds = max_guest && max_guest[0]?.allowed_child  
    const countAdultMinus = 1;
    const countAdultAdd =  reserve === 'succeeded' && AdultMinuss
    const countAddChild =  reserve === 'succeeded' && AdultAdds
    const countMinusChild = 1;

    const reserveRef = useRef();
    const  TotalGuest = useAddGuestTotal({adultcount, childrencount, AdultMinuss});

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
        if(adultcount === countAdultAdd) {
            return;
        } else if(childrencount < countAddChild) {
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

    const handleScrollMobile = useCallback(() => {
        if(reserveRef?.current) {
            if(window.scrollY > 670) {
                dispatch(setShowMobileReserve(true))
            } else {
                dispatch(setShowMobileReserve(false))
            }
        }
    }, [dispatch]);

    useEffect(() => {
        window.addEventListener('scroll', handleScrollMobile)
    }, [handleScrollMobile])

    useEffect(() => {
        if(adultcount === countAdultAdd ) {
            setDisabledChild(true)
        } else {
            setDisabledChild(false) 
        }
    }, [adultcount, countAdultAdd])



    if(proceess === 'failed') {
        OpenNotificationWithIcon({
            type: 'error',
            message: "Something went wrong with you reservation. Please try again",
        })
    }


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
                                    <div className="reserveSvg">
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
                                    DisabledChild={disableChild}
                                    AllowAdult={AdultMinuss}
                                    MinusChildren={MinusChildren} 
                                    AddChildren={AddChildren} 
                                    countAdultMinus={countAdultMinus}
                                    countAdultAdd={countAdultAdd}
                                    countMinusChild={countMinusChild}
                                    countAddChild={countAddChild}
                                    top="52px" 
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
                            (<Button  disabledBG="var(--linear-primary)" onClicks={Query? handleSubmit : () => dispatch(setShowMobileReserveModal(!showMobileReserveModal))} title={'Reserve'} border='none' background='var(--linear-primary)' color='var(--color-white)' width='100%' padding='.7rem' fontSize='var(--font-xtra-small-screen)' />
                        )}
                        </ReserveButton>
                        <Condition>
                            <p>{reserve === 'loading' ? <SkeletonLoader /> : 'You won’t be charged yet'}</p>
                        </Condition>
                        {reserve === 'succeeded' &&
                            checkInD && checkInD ?
                                (<Prices 
                                    price={price} 
                                    summary_details={summary_details} 
                                    selectedCar={selectedCar} 
                                    reserve={reserve} 
                                    radio={radio}
                                    TotalAdditionalServices={TotalAdditionalServices}
                                    TotalCarAndDriverPrice={TotalCarAndDriverPrice}
                                />
                        ) : ''}
                    </ReservationContent>
                </ReservationBody>
            </Reservations>
        </>
    )
}

export default ReservationComponent
